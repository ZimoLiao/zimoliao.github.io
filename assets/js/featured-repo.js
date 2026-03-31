(function (global) {
  function escapeHtml(value) {
    return String(value)
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#39;");
  }

  function formatCompactCount(value) {
    const number = Number(value);
    if (!Number.isFinite(number)) {
      return "0";
    }
    if (number >= 1000000) {
      return `${(number / 1000000).toFixed(number >= 10000000 ? 0 : 1).replace(/\.0$/, "")}m`;
    }
    if (number >= 1000) {
      return `${(number / 1000).toFixed(number >= 10000 ? 0 : 1).replace(/\.0$/, "")}k`;
    }
    return `${Math.round(number)}`;
  }

  function formatUpdatedLabel(value) {
    const date = new Date(value);
    if (Number.isNaN(date.getTime())) {
      return "Recently updated";
    }
    return `Updated ${date.toLocaleDateString("en", { month: "short", year: "numeric", timeZone: "UTC" })}`;
  }

  function buildRepoCardHtml(repo) {
    const title = escapeHtml(repo.name || repo.full_name || "repository");
    const fullName = escapeHtml(repo.full_name || title);
    const description = escapeHtml(repo.description || "Open-source work on GitHub.");
    const language = escapeHtml(repo.language || "Unknown");
    const stars = formatCompactCount(repo.stargazers_count);
    const forks = formatCompactCount(repo.forks_count);
    const updated = escapeHtml(formatUpdatedLabel(repo.updated_at));
    const repoUrl = escapeHtml(repo.html_url || "#");

    return `
      <div class="featured-repo-card__eyebrow">${fullName}</div>
      <div class="featured-repo-card__title-row">
        <h3 class="featured-repo-card__title">${title}</h3>
        <span class="featured-repo-card__badge">GitHub</span>
      </div>
      <p class="featured-repo-card__description">${description}</p>
      <div class="featured-repo-card__meta">
        <span><i class="ti ti-code"></i>${language}</span>
        <span><i class="ti ti-star-filled"></i>${stars}</span>
        <span><i class="ti ti-git-fork"></i>${forks}</span>
        <span><i class="ti ti-clock"></i>${updated}</span>
      </div>
      <div class="featured-repo-card__actions">
        <a class="featured-repo-card__link" href="${repoUrl}" target="_blank" rel="noopener noreferrer">View repository</a>
      </div>
    `;
  }

  function applyRepoData(card, repo) {
    card.innerHTML = buildRepoCardHtml(repo);
    card.dataset.state = "ready";
  }

  function applyRepoError(card) {
    card.dataset.state = "fallback";
    const link = card.dataset.repoUrl;
    card.querySelector(".featured-repo-card__status").textContent = "GitHub metadata is unavailable right now.";
    card.querySelector(".featured-repo-card__fallback-link").href = link;
  }

  async function loadFeaturedRepoCard(card) {
    const repo = card.dataset.repo;
    const response = await fetch(`https://api.github.com/repos/${repo}`, {
      headers: {
        Accept: "application/vnd.github+json",
      },
    });

    if (!response.ok) {
      throw new Error(`GitHub API returned ${response.status}`);
    }

    const payload = await response.json();
    applyRepoData(card, payload);
  }

  function loadFeaturedRepoCards() {
    const cards = document.querySelectorAll("[data-featured-repo]");
    cards.forEach((card) => {
      loadFeaturedRepoCard(card).catch(() => applyRepoError(card));
    });
  }

  if (typeof document !== "undefined") {
    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", loadFeaturedRepoCards);
    } else {
      loadFeaturedRepoCards();
    }
  }

  const exported = {
    buildRepoCardHtml,
    formatCompactCount,
    formatUpdatedLabel,
  };

  if (typeof module !== "undefined" && module.exports) {
    module.exports = exported;
  }

  global.featuredRepoCard = exported;
})(typeof window !== "undefined" ? window : globalThis);
