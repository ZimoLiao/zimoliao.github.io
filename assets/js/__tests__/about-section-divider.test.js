const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");

test("about page sections use a shared wrapper with divider styling", () => {
  const layout = fs.readFileSync("_layouts/about.liquid", "utf8");
  const stylesheet = fs.readFileSync("_sass/_base.scss", "utf8");

  assert.match(layout, /class="about-section"/);
  assert.match(stylesheet, /\.about-section \+ \.about-section/);
  assert.match(stylesheet, /border-top:\s*1px solid var\(--global-divider-color\)/);
});
