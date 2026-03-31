const test = require("node:test");
const assert = require("node:assert/strict");

const {
  buildRepoCardHtml,
  formatCompactCount,
  formatUpdatedLabel,
} = require("../featured-repo.js");

test("formatCompactCount shortens large repository counts", () => {
  assert.equal(formatCompactCount(12), "12");
  assert.equal(formatCompactCount(1200), "1.2k");
  assert.equal(formatCompactCount(2500000), "2.5m");
});

test("formatUpdatedLabel returns a compact month and year label", () => {
  assert.equal(formatUpdatedLabel("2026-03-30T12:00:00Z"), "Updated Mar 2026");
});

test("buildRepoCardHtml renders key repository metadata", () => {
  const html = buildRepoCardHtml({
    name: "scholaraio",
    full_name: "zimoliao/scholaraio",
    html_url: "https://github.com/zimoliao/scholaraio",
    description: "Tools for paper and arXiv workflows.",
    language: "Python",
    stargazers_count: 1284,
    forks_count: 84,
    updated_at: "2026-03-30T12:00:00Z",
  });

  assert.match(html, /scholaraio/);
  assert.match(html, /Tools for paper and arXiv workflows\./);
  assert.match(html, /Python/);
  assert.match(html, /1\.3k/);
  assert.match(html, /84/);
  assert.match(html, /Updated Mar 2026/);
  assert.match(html, /View repository/);
});
