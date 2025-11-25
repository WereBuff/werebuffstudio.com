# Validate & Plan Helpers

This bundle contains two scripts to validate your `web_builder_instructions.json` and `sitemap.yaml`,
then generate a build plan (`plan.json`).

## Files
- validate_plan_node.mjs  (Node.js / ECMAScript module)
- validate_plan_python.py (Python)

## Usage

### Node
1) Install YAML parser:
   npm i yaml

2) Run:
   node validate_plan_node.mjs --json web_builder_instructions.json --yaml sitemap.yaml --out plan.json

### Python
1) Install PyYAML:
   pip install pyyaml

2) Run:
   python validate_plan_python.py --json web_builder_instructions.json --yaml sitemap.yaml --out plan.json

Both scripts print the plan to stdout and write it to `plan.json`.
