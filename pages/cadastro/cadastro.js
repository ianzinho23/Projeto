let tipoDeContaEscolhido = "";

function mostrarEtapa(idDaEtapa) {
  const todasAsEtapas = document.querySelectorAll(".step");
  todasAsEtapas.forEach(function (etapa) {
    etapa.classList.remove("active");
  });

  document.getElementById(idDaEtapa).classList.add("active");
  window.scrollTo(0, 0);
}


const opcoesCadastro = document.querySelectorAll(".option-card");

opcoesCadastro.forEach(function (opcao) {
  opcao.addEventListener("click", function () {
      opcoesCadastro.forEach(function (item) {
        item.classList.remove("selected");
      });

      this.classList.add("selected");
      tipoDeContaEscolhido = this.getAttribute("data-type");
  });
});

const botaoStep1 = document.getElementById("btn-step1-continue");
const rotuloOrganizacao = document.getElementById("orgLabel");
const campoOrganizacao = document.getElementById("orgNome");

botaoStep1.addEventListener("click", function () {
  if (tipoDeContaEscolhido === "") {
    alert("Escolha uma opção para continuar!");
    return;
  }

  if (tipoDeContaEscolhido === "empresario") {
    rotuloOrganizacao.textContent = "Nome da empresa / escritório";
    campoOrganizacao.placeholder = "Ex: Barreto Sports Management";
  } else {
    rotuloOrganizacao.textContent = "Nome do clube / organização";
    campoOrganizacao.placeholder = "Bahia";
  }

  mostrarEtapa("step-2");
});

const botoesVerSenha = document.querySelectorAll(".pw-toggle");

botoesVerSenha.forEach(function (botao) {
  botao.addEventListener("click", function () {
    const idDoCampo = botao.getAttribute("data-target");
    const campoSenha = document.getElementById(idDoCampo);

    if (campoSenha.type === "password") {
      campoSenha.type = "text";
      botao.textContent = "🙈";
    } else {
      campoSenha.type = "password";
      botao.textContent = "👁";
    }
  });
});

document.getElementById("btn-step2-back").addEventListener("click", function () {
  mostrarEtapa("step-1");
});

document.getElementById("btn-step2-continue").addEventListener("click", function () {
  const nome = document.getElementById("nomeCompleto").value;
  const email = document.getElementById("email").value;
  const senha = document.getElementById("senha").value;
  const confirmarSenha = document.getElementById("confirmarSenha").value;

  if (nome.trim() === "" || email.trim() === "") {
    alert("Preencha o nome e o e-mail para continuar.");
    return;
  }

  if (senha.length < 6) {
    alert("A senha precisa ter no mínimo 6 caracteres.");
    return;
  }

  if (senha !== confirmarSenha) {
    alert("As senhas não são iguais. Confira e tente de novo.");
    return;
  }

  mostrarEtapa("step-3");
});

document.getElementById("btn-step3-back").addEventListener("click", function () {
  mostrarEtapa("step-2");
});

document.getElementById("btn-step3-submit").addEventListener("click", function () {
  const cidade = document.getElementById("cidade").value;
  const uf = document.getElementById("uf").value;
  const organizacao = campoOrganizacao.value;

  if (cidade.trim() === "" || uf === "" || organizacao.trim() === "") {
    alert("Preencha todos os campos para finalizar o cadastro.");
    return;
  }

  const nomeCompleto = document.getElementById("nomeCompleto").value;
  const primeiroNome = nomeCompleto.trim().split(" ")[0] || "Atleta";
  document.getElementById("successName").textContent = primeiroNome;

  mostrarEtapa("step-success");
});

document.getElementById("btn-access-platform").addEventListener("click", function () {
  window.location.href = "/pages/descobrir/descobrir.html";
});
