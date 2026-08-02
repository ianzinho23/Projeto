const botaoMenu = document.getElementById("menuToggle");
const linksMenu = document.getElementById("navbarLinks");

botaoMenu.addEventListener("click", function () {
  linksMenu.classList.toggle("aberto");
});