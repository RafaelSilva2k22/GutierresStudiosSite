import renderHome from "../pages/Home.js";
import renderAbout from "../pages/about.js";
import renderContact from "../pages/contact.js";
import renderGalery from "../pages/galery.js";

export function initNavLinks() {
  const nav = document.getElementById("nav");
  const main = document.getElementById("main");

  if (!nav || !main) {
    console.error('Elementos "nav" ou "main" não encontrados.');
    return;
  }

  const navLinks = [
    { href: "/", text: "Home", render: renderHome },
    { href: "/sobre", text: "Sobre", render: renderAbout },
    { href: "/contato", text: "Contato", render: renderContact },
    { href: "/galeria", text: "Galeria", render: renderGalery },
  ];

  navLinks.forEach((link) => {
    const a = document.createElement("a");
    a.href = link.href;
    a.textContent = link.text;
    a.classList.add("link-menu");
    nav.appendChild(a);
  });

  // Adicionando links de redes sociais
  const socialLinks = [
    {
      href: "https://www.facebook.com/suaempresa",
      text: "Facebook",
      imgSrc: "./public/assets/images/facebook.svg",
    },
    {
      href: "https://www.instagram.com/suainstagram",
      text: "Instagram",
      imgSrc: "./public/assets/images/instagram.svg",
    },
  ];
  const div = document.createElement("div");
  div.classList.add("social-box");

  socialLinks.forEach((link) => {
    const a = document.createElement("a");
    a.href = link.href;
    a.target = "_blank";
    a.rel = "noopener noreferrer";
    const img = document.createElement("img");
    img.src = link.imgSrc;
    img.alt = link.text;
    img.classList.add("social-icon");
    a.appendChild(img);
    nav.appendChild(div);
    div.appendChild(a);
  });

  main.innerHTML = renderHome();

  // Adicionando eventos de clique aos links após serem adicionados ao DOM
  const links = document.querySelectorAll("#nav a");
  links.forEach((link) => {
    link.addEventListener("click", function (event) {
      event.preventDefault();
      document.querySelector("nav").classList.remove("active");
      document.querySelector("header").classList.remove("header-active");
      document.getElementById("menu-bar").classList.remove("change");
    });
  });

  nav.addEventListener("click", (event) => {
    if (event.target.tagName === "A") {
      event.preventDefault();
      const page = navLinks.find(
        (link) => link.href === event.target.getAttribute("href")
      );
      if (page) {
        main.innerHTML = page.render();
      }
    }
  });
}
const hamburgerMenu = document.querySelector("#menu-bar");

hamburgerMenu.addEventListener("click", function () {
  document.querySelector("nav").classList.toggle("active");
  document.querySelector("header").classList.toggle("header-active");
  document.getElementById("menu-bar").classList.toggle("change");
});
