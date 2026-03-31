const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");

test("medium zoom uses a larger desktop margin and smaller mobile margin", () => {
  const script = fs.readFileSync("assets/js/zoom.js", "utf8");

  assert.match(script, /window\.innerWidth\s*>=\s*768/);
  assert.match(script, /const margin = isDesktop \? 48 : 24/);
  assert.match(script, /margin,/);
});
