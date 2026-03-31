// Initialize medium zoom.
$(document).ready(function () {
  const isDesktop = window.innerWidth >= 768;
  const margin = isDesktop ? 96 : 24;

  medium_zoom = mediumZoom("[data-zoomable]", {
    background: getComputedStyle(document.documentElement).getPropertyValue("--global-bg-color") + "ee", // + 'ee' for trasparency.
    margin,
  });
});
