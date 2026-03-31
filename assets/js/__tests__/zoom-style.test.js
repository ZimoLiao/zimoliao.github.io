const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");

test("desktop zoomed images are constrained to 90 percent of the viewport", () => {
  const stylesheet = fs.readFileSync("_sass/_base.scss", "utf8");

  assert.match(stylesheet, /@media\s*\(min-width:\s*768px\)/);
  assert.match(stylesheet, /\.medium-zoom-image--opened/);
  assert.match(stylesheet, /max-width:\s*90vw\s*!important/);
  assert.match(stylesheet, /max-height:\s*90vh\s*!important/);
});
