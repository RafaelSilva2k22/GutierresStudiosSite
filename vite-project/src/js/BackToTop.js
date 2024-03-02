// backToTopButton.js
export const setupBackToTopButton = () => {
  const backToTopButton = document.querySelector(".backToTop");
  backToTopButton.classList.add("hidden");

  const checkScroll = () => {
    if (window.pageYOffset > 200) {
      backToTopButton.classList.remove("hidden");
    } else {
      backToTopButton.classList.add("hidden");
    }
  };

  window.addEventListener("scroll", checkScroll);

  backToTopButton.addEventListener("click", function () {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
};
