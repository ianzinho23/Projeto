const loginForm = document.getElementById("loginForm");
const panelLogin = document.getElementById("panelLogin");
const panelSuccess = document.getElementById("panelSuccess");

const togglePass = document.getElementById("togglePass");
const senhaInput = document.getElementById("senha");

const continueBtn = document.getElementById("continueBtn");
const googleBtn = document.getElementById("googleBtn");
const facebookBtn = document.getElementById("facebookBtn");

togglePass.addEventListener("click", function () {
  if (senhaInput.type === "password") {
    senhaInput.type = "text";
    togglePass.textContent = "👁";
  } else {
    senhaInput.type = "password";
    togglePass.textContent = "⌣";
  }
});

loginForm.addEventListener("submit", function (evento) {
  evento.preventDefault();

  if (!loginForm.checkValidity()) {
    loginForm.reportValidity();
    return;
  }

  panelLogin.classList.add("hidden");
  panelSuccess.classList.remove("hidden");
});

continueBtn.addEventListener("click", function () {
  window.location.href = "/pages/descobrir/descobrir.html";
});

googleBtn.addEventListener("click", function () {
  alert("Login com Google (exemplo, ainda sem servidor)");
});

facebookBtn.addEventListener("click", function () {
  alert("Login com Facebook (exemplo, ainda sem servidor)");
});
