#!/usr/bin/env python3
# validate_plan_python.py
# Usage:
#   python validate_plan_python.py --json web_builder_instructions.json --yaml sitemap.yaml --out plan.json
# Requires: pyyaml (pip install pyyaml)

import argparse, json, sys, datetime, os
try:
    import yaml
except Exception as e:
    print("This script requires PyYAML. Install via: pip install pyyaml", file=sys.stderr)
    raise

def read_json(path):
    with open(path, "r", encoding="utf-8") as f:
        return json.load(f)

def read_yaml(path):
    with open(path, "r", encoding="utf-8") as f:
        return yaml.safe_load(f)

def invariant(cond, msg):
    if not cond:
        raise ValueError(msg)

def main():
    parser = argparse.ArgumentParser()
    parser.add_argument("--json", default="web_builder_instructions.json")
    parser.add_argument("--yaml", default="sitemap.yaml")
    parser.add_argument("--out", default="plan.json")
    args = parser.parse_args()

    webconf = read_json(args.json)
    sitemap = read_yaml(args.yaml)

    site = webconf.get("site", {})
    theme = webconf.get("theme", {})
    navigation = webconf.get("navigation", {})
    routing = webconf.get("routing", {})
    content = webconf.get("contentModels", {})
    templates = webconf.get("templates", {})
    seo = webconf.get("seo", {})
    performance = webconf.get("performance", {})
    ux = webconf.get("ux", {})

    # Validations
    invariant(site.get("baseUrl"), "site.baseUrl missing")
    invariant(isinstance(site.get("locales"), list) and site["locales"], "site.locales missing/empty")
    invariant(isinstance(routing.get("pages"), list), "routing.pages missing")
    invariant(isinstance(navigation.get("primary"), list), "navigation.primary missing")
    games = content.get("games", {})
    invariant(isinstance(games.get("seed"), list) and games["seed"], "contentModels.games.seed is empty")
    first_game = games["seed"][0]
    invariant(first_game.get("slug"), "games.seed[0].slug missing")
    invariant(first_game.get("title"), "games.seed[0].title missing")

    routes = [p["path"] for p in routing["pages"]]
    game_slugs = [g["slug"] for g in games["seed"]]
    posts_seed = (content.get("posts", {}) or {}).get("seed", []) or []
    news_posts = [p["slug"] for p in posts_seed]

    assets = list(filter(None, [
        site.get("logo"),
        first_game.get("heroImage"),
        *first_game.get("gallery", [])
    ]))

    plan = {
        "meta": {
            "generator": "validate_plan_python.py",
            "version": "1.0.0",
            "timestamp": datetime.datetime.utcnow().isoformat() + "Z"
        },
        "scope": {
            "baseUrl": site["baseUrl"],
            "locales": site["locales"],
            "defaultLocale": site.get("localeDefault"),
            "routes": routes,
            "dynamicRoutes": { "games": game_slugs },
            "newsCount": len(news_posts),
            "assets": assets
        },
        "builds": [
            { "name": "home", "path": "/", "data": { "games": games["seed"], "posts": posts_seed } },
            *[{ "name": f"game_{slug}", "path": f"/games/{slug}/" } for slug in game_slugs],
            { "name": "news_index", "path": "/category/news/" },
            { "name": "studio", "path": "/studio/" },
            { "name": "career", "path": "/career/" },
            { "name": "press", "path": "/press/" },
            { "name": "privacy", "path": "/privacy-policy/" },
            { "name": "terms", "path": "/terms/" },
            { "name": "cookie", "path": "/cookie-policy/" }
        ],
        "seo": seo.get("defaults", {})
    }

    if isinstance(sitemap.get("urlset"), list):
        plan["sitemap"] = { "count": len(sitemap["urlset"]) }

    with open(args.out, "w", encoding="utf-8") as f:
        json.dump(plan, f, ensure_ascii=False, indent=2)

    print(f"✔ Plan written to {args.out}")
    print(json.dumps(plan, ensure_ascii=False, indent=2))

if __name__ == "__main__":
    main()
