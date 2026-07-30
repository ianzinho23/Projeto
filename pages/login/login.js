const loginForm = document.getElementById("loginForm");


const emailInput = document.getElementById("email");
const senhaInput = document.getElementById("senha");


const panelLogin = document.getElementById("panelLogin");
const panelSuccess = document.getElementById("panelSuccess");


const submitBtn = document.getElementById("submitBtn");
const continueBtn = document.getElementById("continueBtn");


const googleBtn = document.getElementById("googleBtn");
const facebookBtn = document.getElementById("facebookBtn");


const togglePass = document.getElementById("togglePass");
const eyeIcon = document.getElementById("eyeIcon");






panelLogin.classList.remove("hidden");
panelSuccess.classList.add("hidden");




togglePass.addEventListener("click", () => {


    const mostrando = senhaInput.type === "text";


    senhaInput.type = mostrando ? "password" : "text";


    eyeIcon.innerHTML = mostrando
        ? `
        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8Z"/>
        <circle cx="12" cy="12" r="3"/>
        `
        : `
        <path d="M17.94 17.94A10.94 10.94 0 0 1 12 20c-7 0-11-8-11-8a21.6 21.6 0 0 1 5.06-6.06"/>
        <path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8"/>
        <line x1="1" y1="1" x2="23" y2="23"/>
        `;


});




[emailInput, senhaInput].forEach(input => {


    input.addEventListener("blur", () => {


        input.classList.add("touched");


    });


});




function setLoading(status) {


    submitBtn.disabled = status;


    submitBtn.innerHTML = status


        ? `
        <span class="spinner"></span>
        <span class="btn-label">ENTRANDO...</span>
        `


        : `
        <span class="btn-label">
            ENTRAR NA PLATAFORMA
        </span>
        `;


}






loginForm.addEventListener("submit", function (event) {


    event.preventDefault();


    if (!loginForm.checkValidity()) {


        emailInput.classList.add("touched");
        senhaInput.classList.add("touched");


        loginForm.reportValidity();


        return;


    }


    setLoading(true);


    setTimeout(() => {


        setLoading(false);


        mostrarSucesso();


    }, 1000);


});






function mostrarSucesso() {


    panelLogin.classList.add("hidden");


    panelSuccess.classList.remove("hidden");


}




continueBtn.addEventListener("click", () => {


    console.log("Redirecionando...");




});




googleBtn.addEventListener("click", () => {


    console.log("Google Login");


});


facebookBtn.addEventListener("click", () => {


    console.log("Facebook Login");


});
