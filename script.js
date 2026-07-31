const botaoMenu = document.getElementById("menuToggle");
const menuBotoes = document.getElementById("navbarBotoes");


botaoMenu.addEventListener("click", function () {
  menuBotoes.classList.toggle("aberto");
});
