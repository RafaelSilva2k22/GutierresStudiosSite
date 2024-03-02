// smoothScroll.js
export const smoothScrollTo = (target) => {
  const targetPosition = target.offsetTop - 5 * 16; // 5rem é aproximadamente 80px
  window.scrollTo({
    top: targetPosition,
    behavior: "smooth",
  });
};

export const addSmoothScrollToLinks = () => {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        smoothScrollTo(target);
      }
    });
  });
};
