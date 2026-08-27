const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");

test("medium zoom uses a larger desktop margin and smaller mobile margin", () => {
  const script = fs.readFileSync("assets/js/zoom.js", "utf8");

  assert.match(script, /window\.innerWidth\s*>=\s*768/);
  assert.match(script, /const margin = isDesktop \? 96 : 24/);
  assert.match(script, /margin,/);
});

test("production CSS keeps medium zoom runtime classes", () => {
  const purgeConfig = require(path.resolve("purgecss.config.js"));
  const isSafelisted = (className) => purgeConfig.safelist.some((entry) => (entry instanceof RegExp ? entry.test(className) : entry === className));

  assert.equal(isSafelisted("medium-zoom-overlay"), true);
  assert.equal(isSafelisted("medium-zoom-image--opened"), true);
});
