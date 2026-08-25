---
layout: page
permalink: /gallery/
title: Gallery
nav: true
nav_order: 3
_styles: |
  .gallery-grid {
    display: grid;
    gap: 2.25rem;
  }

  .gallery-item {
    margin: 0;
  }

  .gallery-media {
    overflow: hidden;
    border: 1px solid var(--global-divider-color);
    border-radius: 8px;
    background: var(--global-code-bg-color);
  }

  .gallery-media video {
    display: block;
    width: 100%;
    aspect-ratio: 3 / 1;
    object-fit: contain;
    background: #ffffff;
  }

  .gallery-caption {
    margin-top: 0.75rem;
    color: var(--global-text-color-light);
    font-family: Georgia, "Times New Roman", serif;
    font-size: 0.92rem;
    line-height: 1.55;
    letter-spacing: 0;
  }

  .gallery-caption mjx-container[jax="CHTML"] {
    margin: 0 0.03em;
    font-size: 1em !important;
  }

  .gallery-caption .math {
    color: inherit;
  }
---

<div class="gallery-grid">
  <figure class="gallery-item">
    <div class="gallery-media">
      <video controls autoplay muted loop playsinline preload="metadata">
        <source src="{{ '/assets/video/gallery/sp-vorticity-mag-white-ppt-under30mb.mp4' | relative_url }}" type="video/mp4">
      </video>
    </div>
    <figcaption class="gallery-caption">
      Volume rendering of vorticity magnitude in incompressible turbulent channel flow at
      <span class="math">\(Re_\tau = 300\)</span>. The computational domain is
      <span class="math">\(4\pi h \times 2h \times 2\pi h\)</span>, nondimensionalized by the channel half-height
      <span class="math">\(h\)</span>. Visualization rendered in ParaView.
    </figcaption>
  </figure>
</div>
