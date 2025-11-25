#!/usr/bin/env node
/**
 * validate_plan_node.mjs
 * Usage:
 *   node validate_plan_node.mjs --json web_builder_instructions.json --yaml sitemap.yaml --out plan.json
 *
 * Requires: npm i yaml
 */
import fs from 'node:fs';
import path from 'node:path';
import process from 'node:process';
import { fileURLToPath } from 'node:url';
import * as YAML from 'yaml';

const args = (() => {
  const a = process.argv.slice(2);
  const out = { json: 'web_builder_instructions.json', yaml: 'sitemap.yaml', out: 'plan.json' };
  for (let i=0; i<a.length; i+=2) {
    const k = a[i], v = a[i+1];
    if (k === '--json') out.json = v;
    else if (k === '--yaml') out.yaml = v;
    else if (k === '--out') out.out = v;
  }
  return out;
})();

function readJson(p) {
  const raw = fs.readFileSync(p, 'utf-8');
  return JSON.parse(raw);
}

function readYaml(p) {
  const raw = fs.readFileSync(p, 'utf-8');
  return YAML.parse(raw);
}

function invariant(cond, msg) {
  if (!cond) {
    throw new Error(msg);
  }
}

// ---- main ----
try {
  const webConf = readJson(args.json);
  const sitemap = readYaml(args.yaml);

  const { site, theme, navigation, routing, contentModels, templates, seo, performance, ux } = webConf;

  // Basic validations
  invariant(site?.baseUrl, 'site.baseUrl missing');
  invariant(Array.isArray(site?.locales) && site.locales.length > 0, 'site.locales missing/empty');
  invariant(routing?.pages && Array.isArray(routing.pages), 'routing.pages missing');
  invariant(navigation?.primary && Array.isArray(navigation.primary), 'navigation.primary missing');
  invariant(contentModels?.games?.seed?.length > 0, 'contentModels.games.seed is empty');
  const firstGame = contentModels.games.seed[0];
  invariant(firstGame.slug, 'games.seed[0].slug missing');
  invariant(firstGame.title, 'games.seed[0].title missing');

  // Derive scope
  const routes = routing.pages.map(p => p.path);
  const gameSlugs = (contentModels.games.seed || []).map(g => g.slug);
  const newsPosts = (contentModels.posts?.seed || []).map(p => p.slug);

  // Assets to check (existence is optional here; build tools should ensure copy)
  const assets = [
    site.logo,
    firstGame.heroImage,
    ...(firstGame.gallery || [])
  ].filter(Boolean);

  // Build plan
  const plan = {
    meta: {
      generator: 'validate_plan_node.mjs',
      version: '1.0.0',
      timestamp: new Date().toISOString()
    },
    scope: {
      baseUrl: site.baseUrl,
      locales: site.locales,
      defaultLocale: site.localeDefault,
      routes,
      dynamicRoutes: { games: gameSlugs },
      newsCount: newsPosts.length,
      assets
    },
    builds: [
      { name: 'home', path: '/', data: { games: contentModels.games.seed, posts: contentModels.posts?.seed || [] } },
      ...gameSlugs.map(slug => ({ name: `game_${slug}`, path: `/games/${slug}/` })),
      { name: 'news_index', path: '/category/news/' },
      { name: 'studio', path: '/studio/' },
      { name: 'career', path: '/career/' },
      { name: 'press', path: '/press/' },
      { name: 'privacy', path: '/privacy-policy/' },
      { name: 'terms', path: '/terms/' },
      { name: 'cookie', path: '/cookie-policy/' }
    ],
    seo: webConf.seo?.defaults || {}
  };

  // Optionally integrate sitemap URL list
  if (sitemap?.urlset) {
    plan.sitemap = { count: sitemap.urlset.length };
  }

  // Write out
  fs.writeFileSync(args.out, JSON.stringify(plan, null, 2), 'utf-8');
  console.log(`✔ Plan written to ${args.out}`);
  console.log(JSON.stringify(plan, null, 2));
} catch (err) {
  console.error('✖ Error:', err?.message || err);
  process.exit(1);
}
