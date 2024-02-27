// src/index.js
import renderHome from "./pages/Home.js";
import renderAbout from "./pages/About.js";
import renderContact from "./pages/Contact.js";

document.addEventListener("DOMContentLoaded", () => {
  const nav = document.getElementById("nav");
  const main = document.getElementById("main");

  if (!nav || !main) {
    console.error('Elementos "nav" ou "main" não encontrados.');
    return;
  }

  // Carregar links de navegação
  const navLinks = [
    { href: "/", text: "Home", render: renderHome },
    { href: "/sobre", text: "Sobre", render: renderAbout },
    { href: "/contato", text: "Contato", render: renderContact },
  ];

  navLinks.forEach((link) => {
    const a = document.createElement("a");
    a.href = link.href;
    a.textContent = link.text;
    nav.appendChild(a);
  });

  // Carregar conteúdo inicial
  main.innerHTML = renderHome();

  // Adicionar evento de clique aos links de navegação
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
});
