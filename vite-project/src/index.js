import { initNavLinks } from "./js/NavLinks.js";
import { smoothScrollTo, addSmoothScrollToLinks } from "./js/smoothScroll.js";
import { setupBackToTopButton } from "./js/BackToTop.js";
import { setupScrolledHeader } from "./js/HeaderScroll.js";

document.addEventListener("DOMContentLoaded", () => {
  addSmoothScrollToLinks();
  initNavLinks();
  setupBackToTopButton();
  setupScrolledHeader();
});
