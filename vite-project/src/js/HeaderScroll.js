export const setupScrolledHeader = () => {
  const header = document.querySelector("header");
  window.addEventListener("scroll", function () {
    if (window.pageYOffset > 0) {
      header.classList.add("scrolled-header");
    } else {
      header.classList.remove("scrolled-header");
    }
  });
};
