---
layout: page
permalink: /gallery/
title: Gallery
description: All simulations and visualizations are my own work. Please email me to request permission before reuse.
description_html: All simulations and visualizations are my own work. Please <a href="mailto:zimoliao@mail.ustc.edu.cn">email me</a> to request permission before reuse.
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

  .gallery-media--45x16 video {
    aspect-ratio: 45 / 16;
  }

  .gallery-caption {
    margin-top: 0.75rem;
    color: var(--global-caption-color);
    font-family: inherit;
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

  .gallery-caption a em,
  .gallery-caption a strong {
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
      <span class="math">\(Re_b = 5150\)</span> (corresponding to <span class="math">\(Re_\tau \approx 300\)</span>). The computational domain is
      <span class="math">\(4\pi h \times 2h \times 2\pi h\)</span>, where <span class="math">\(h\)</span> is the channel
      half-height. Visualization rendered in ParaView.
    </figcaption>
  </figure>

  <figure class="gallery-item">
    <div class="gallery-media gallery-media--45x16">
      <video controls autoplay muted loop playsinline preload="metadata">
        <source
          src="{{ '/assets/video/gallery/ptcl-flow-lowUf-colorbyVp-3dview-3600x1280-web.mp4' | relative_url }}"
          type="video/mp4"
        >
      </video>
    </div>
    <figcaption class="gallery-caption">
      Volume rendering of vorticity magnitude in four-way coupled particle-laden turbulent channel flow at
      <span class="math">\(Re_b = 5150\)</span> and <span class="math">\(St^+ = 100\)</span>, a regime of pronounced drag reduction
      and turbulence attenuation. Only particles in low-speed fluid regions are shown, colored by their wall-normal velocity
      (<span class="math">\(v_p > 0\)</span>, red; <span class="math">\(v_p < 0\)</span>, blue), revealing the lift-up of particle
      streaks clustered in these regions. See <a href="https://doi.org/10.1017/jfm.2025.10340"><em>J. Fluid Mech.</em>
      <strong>1015</strong>, A55 (2025)</a> for the physical analysis. Visualization rendered in ParaView.
    </figcaption>
  </figure>
</div>
