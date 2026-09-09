---
layout: page
permalink: /gallery/
title: Gallery
description: All simulations and visualizations are my own work. Please email me to request permission before reuse.
description_html: All simulations and visualizations are my own work. Please <a href="mailto:zimoliao@mail.ustc.edu.cn">email me</a> to request permission before reuse.
header_divider: true
nav: true
nav_order: 3
_styles: |
  .gallery-grid {
    display: grid;
    gap: 2.25rem;
  }

  .gallery-grid--paired {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 1.5rem;
  }

  .gallery-section + .gallery-section {
    border-top: 1px solid var(--global-divider-color);
    margin-top: 2.5rem;
    padding-top: 2rem;
  }

  .gallery-section-title {
    margin: 0 0 1.25rem;
  }

  .gallery-section-description {
    margin: -0.5rem 0 1.5rem;
    color: var(--global-gray-text-color) !important;
    line-height: 1.55;
    hyphens: auto;
    text-align: justify;
    text-align-last: left;
    text-justify: inter-word;
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

  .gallery-media--square video {
    aspect-ratio: 1 / 1;
  }

  .gallery-caption {
    margin-top: 0.75rem;
    color: var(--global-gray-text-color) !important;
    font-family: inherit;
    line-height: 1.55;
    letter-spacing: 0;
    hyphens: auto;
    text-align: justify;
    text-align-last: left;
    text-justify: inter-word;
  }

  .gallery-caption mjx-container[jax="CHTML"],
  .gallery-section-description mjx-container[jax="CHTML"] {
    margin: 0 0.03em;
    font-size: 1em !important;
  }

  .gallery-caption-label {
    color: inherit;
    font-weight: 500;
  }

  .gallery-caption .math,
  .gallery-section-description .math {
    color: inherit;
  }

  .gallery-caption a em,
  .gallery-caption a strong {
    color: inherit;
  }

  @media (max-width: 767.98px) {
    .gallery-grid--paired {
      grid-template-columns: 1fr;
      gap: 2.25rem;
    }

    .gallery-caption,
    .gallery-section-description {
      hyphens: none;
      text-align: left;
      text-align-last: auto;
    }
  }
---

<section class="gallery-section" aria-labelledby="gallery-2d-hit">
  <h2 id="gallery-2d-hit" class="gallery-section-title type-section-title">Two-dimensional homogeneous isotropic turbulence (HIT)</h2>
  <p class="gallery-section-description type-body">
    Vorticity evolution in a doubly periodic square domain. All quantities are nondimensional, with scales chosen so that the domain side length is
    <span class="math">\(2\pi\)</span> and the mean enstrophy injection rate in the forced case is
    <span class="math">\(\eta_I = 1\)</span>; the decaying case uses the same scales.
    Both simulations solve the two-dimensional incompressible Navier-Stokes
    equations in vorticity-streamfunction form using a Fourier pseudospectral method with
    <span class="math">\(1024^2\)</span> collocation points and the <span class="math">\(3/2\)</span> rule for dealiasing.
    The deterministic evolution is advanced using a third-order integrating-factor Runge-Kutta scheme.
  </p>
  <div class="gallery-grid gallery-grid--paired">
    <figure class="gallery-item">
      <div class="gallery-media gallery-media--square">
        <video controls autoplay muted loop playsinline preload="metadata">
          <source src="{{ '/assets/video/gallery/hit-decaying-2d-vorticity-1024.mp4' | relative_url }}" type="video/mp4">
        </video>
      </div>
      <figcaption class="gallery-caption type-body">
        <span class="gallery-caption-label">Decaying HIT.</span> Free decay from an initial condition obtained from forced HIT,
        with kinematic viscosity <span class="math">\(\nu = 4 \times 10^{-5}\)</span>
        and neither forcing nor linear friction. You can see similar swirling patterns when you stir your morning coffee!
      </figcaption>
    </figure>

    <figure class="gallery-item">
      <div class="gallery-media gallery-media--square">
        <video controls autoplay muted loop playsinline preload="metadata">
          <source src="{{ '/assets/video/gallery/hit-forced-2d-vorticity-1024.mp4' | relative_url }}" type="video/mp4">
        </video>
      </div>
      <figcaption class="gallery-caption type-body">
        <span class="gallery-caption-label">Forced HIT.</span> Vorticity evolution with kinematic viscosity
        <span class="math">\(\nu = 4 \times 10^{-5}\)</span>, linear friction coefficient
        <span class="math">\(\alpha = 0.03\)</span>, and stochastic vorticity forcing that is white in time
        and restricted to the wavenumber band <span class="math">\(19 \le |\boldsymbol{k}| \le 21\)</span>.
      </figcaption>
    </figure>

  </div>
</section>

<section class="gallery-section" aria-labelledby="gallery-channel-flow">
  <h2 id="gallery-channel-flow" class="gallery-section-title type-section-title">Turbulent channel flows</h2>
  <div class="gallery-grid">
    <figure class="gallery-item">
      <div class="gallery-media">
        <video controls autoplay muted loop playsinline preload="metadata">
          <source src="{{ '/assets/video/gallery/sp-vorticity-mag-white-ppt-under30mb.mp4' | relative_url }}" type="video/mp4">
        </video>
      </div>
      <figcaption class="gallery-caption type-body">
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
      <figcaption class="gallery-caption type-body">
        Volume rendering of vorticity magnitude in four-way coupled particle-laden turbulent channel flow at
        <span class="math">\(Re_b = 5150\)</span> and <span class="math">\(St^+ = 100\)</span>, a regime of pronounced drag reduction
        and turbulence attenuation. Only particles in low-speed fluid regions are shown, colored by their wall-normal velocity
        (<span class="math">\(v_p > 0\)</span>, red; <span class="math">\(v_p < 0\)</span>, blue), revealing the lift-up of particle
        streaks clustered in these regions. See <a href="https://doi.org/10.1017/jfm.2025.10340"><em>J. Fluid Mech.</em>
        <strong>1015</strong>, A55 (2025)</a> for the physical analysis. Visualization rendered in ParaView.
      </figcaption>
    </figure>

  </div>
</section>
