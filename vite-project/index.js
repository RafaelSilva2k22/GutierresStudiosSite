import { initNavLinks } from "./src/js/NavLinks.js";
import {
  smoothScrollTo,
  addSmoothScrollToLinks,
} from "./src/js/smoothScroll.js";
import { setupBackToTopButton } from "./src/js/BackToTop.js";
import { setupScrolledHeader } from "./src/js/HeaderScroll.js";

document.addEventListener("DOMContentLoaded", () => {
  addSmoothScrollToLinks();
  initNavLinks();
  setupBackToTopButton();
  setupScrolledHeader();
});
