const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");

test("about layout renders compact social links under the profile image", () => {
  const layout = fs.readFileSync("_layouts/about.liquid", "utf8");
  const stylesheet = fs.readFileSync("_sass/_base.scss", "utf8");

  assert.match(layout, /class="profile-social"/);
  assert.doesNotMatch(layout, /<div class="social">/);
  assert.match(stylesheet, /\.profile-social/);
  assert.match(stylesheet, /font-size:\s*1\.35rem/);
  assert.match(stylesheet, /margin-top:\s*0\.68rem/);
  assert.match(stylesheet, /line-height:\s*1\.05/);
  assert.match(stylesheet, /color:\s*var\(--global-text-color\)/);
});
