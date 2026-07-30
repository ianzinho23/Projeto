(function(){
  "use strict";
 
  var state = { step: 1, profileType: null };
 
  var steps = document.querySelectorAll('.step');
 
  function goToStep(n){
    steps.forEach(function(s){ s.classList.remove('active'); });
    document.getElementById('step-' + n).classList.add('active');
    state.step = n;
    window.scrollTo(0,0);
  }
 
  /* ---------- STEP 1: perfil ---------- */
  var optionCards = document.querySelectorAll('.option-card');
  var btnStep1Continue = document.getElementById('btn-step1-continue');
  var orgLabel = document.getElementById('orgLabel');
  var orgInput = document.getElementById('orgNome');
 
  function selectOption(card){
    optionCards.forEach(function(c){
      c.classList.remove('selected');
      c.setAttribute('aria-checked', 'false');
    });
    card.classList.add('selected');
    card.setAttribute('aria-checked', 'true');
    state.profileType = card.getAttribute('data-type');
    btnStep1Continue.disabled = false;
  }
 
  optionCards.forEach(function(card){
    card.addEventListener('click', function(){ selectOption(card); });
    card.addEventListener('keydown', function(e){
      if(e.key === 'Enter' || e.key === ' '){
        e.preventDefault();
        selectOption(card);
      }
    });
  });
 
  btnStep1Continue.addEventListener('click', function(){
    if(!state.profileType) return;
    if(state.profileType === 'empresario'){
      orgLabel.textContent = 'Nome da empresa / escritório';
      orgInput.placeholder = 'Ex: Barreto Sports Management';
    } else {
      orgLabel.textContent = 'Nome do clube / organização';
      orgInput.placeholder = 'Bahia';
    }
    goToStep(2);
  });
 
  /* ---------- STEP 2: conta ---------- */
  var nomeInput = document.getElementById('nomeCompleto');
  var emailInput = document.getElementById('email');
  var senhaInput = document.getElementById('senha');
  var confirmarInput = document.getElementById('confirmarSenha');
 
  var erroNome = document.getElementById('erro-nome');
  var erroEmail = document.getElementById('erro-email');
  var erroSenha = document.getElementById('erro-senha');
  var erroConfirmar = document.getElementById('erro-confirmar');
 
  function setFieldError(input, errorEl, isValid){
    if(isValid){
      input.classList.remove('invalid');
      errorEl.classList.remove('show');
    } else {
      input.classList.add('invalid');
      errorEl.classList.add('show');
    }
    return isValid;
  }
 
  function validateNome(){
    return setFieldError(nomeInput, erroNome, nomeInput.value.trim().length > 0);
  }
  function validateEmail(){
    var re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return setFieldError(emailInput, erroEmail, re.test(emailInput.value.trim()));
  }
  function validateSenha(){
    return setFieldError(senhaInput, erroSenha, senhaInput.value.length >= 6);
  }
  function validateConfirmar(){
    var valid = confirmarInput.value.length > 0 && confirmarInput.value === senhaInput.value;
    return setFieldError(confirmarInput, erroConfirmar, valid);
  }
 
  [[nomeInput, validateNome], [emailInput, validateEmail], [senhaInput, validateSenha], [confirmarInput, validateConfirmar]]
    .forEach(function(pair){
      pair[0].addEventListener('input', function(){
        if(pair[0].classList.contains('invalid')) pair[1]();
      });
    });
 
  document.getElementById('btn-step2-back').addEventListener('click', function(){ goToStep(1); });
 
  document.getElementById('btn-step2-continue').addEventListener('click', function(){
    var okNome = validateNome();
    var okEmail = validateEmail();
    var okSenha = validateSenha();
    var okConfirmar = validateConfirmar();
    if(okNome && okEmail && okSenha && okConfirmar){
      goToStep(3);
    }
  });
 
  /* toggle mostrar/ocultar senha */
  document.querySelectorAll('.pw-toggle').forEach(function(btn){
    btn.addEventListener('click', function(){
      var targetId = btn.getAttribute('data-target');
      var input = document.getElementById(targetId);
      var showing = input.type === 'text';
      input.type = showing ? 'password' : 'text';
      btn.classList.toggle('showing', !showing);
      btn.setAttribute('aria-label', showing ? 'Mostrar senha' : 'Ocultar senha');
    });
  });
 
  /* ---------- STEP 3: dados ---------- */
  var cidadeInput = document.getElementById('cidade');
  var erroCidade = document.getElementById('erro-cidade');
  var erroUf = document.getElementById('erro-uf');
  var erroOrg = document.getElementById('erro-org');
 
  var ufValues = ['AC','AL','AP','AM','BA','CE','DF','ES','GO','MA','MT','MS','MG','PA','PB','PR','PE','PI','RJ','RN','RS','RO','RR','SC','SP','SE','TO'];
  var ufTrigger = document.getElementById('ufTrigger');
  var ufOptionsEl = document.getElementById('ufOptions');
  var ufSelect = document.getElementById('ufSelect');
  var selectedUf = null;
 
  ufValues.forEach(function(uf){
    var opt = document.createElement('div');
    opt.className = 'select-option';
    opt.setAttribute('data-value', uf);
    opt.textContent = uf;
    opt.addEventListener('click', function(){
      selectedUf = uf;
      ufTrigger.innerHTML = uf + ' <svg viewBox="0 0 24 24" fill="none"><path d="M6 9l6 6 6-6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>';
      ufTrigger.classList.remove('placeholder');
      ufSelect.classList.remove('open');
      erroUf.classList.remove('show');
    });
    ufOptionsEl.appendChild(opt);
  });
 
  ufTrigger.addEventListener('click', function(e){
    e.stopPropagation();
    ufSelect.classList.toggle('open');
  });
  document.addEventListener('click', function(e){
    if(!ufSelect.contains(e.target)) ufSelect.classList.remove('open');
  });
 
  function validateCidade(){
    var ok = cidadeInput.value.trim().length > 0;
    cidadeInput.classList.toggle('invalid', !ok);
    erroCidade.classList.toggle('show', !ok);
    return ok;
  }
  function validateUf(){
    var ok = !!selectedUf;
    erroUf.classList.toggle('show', !ok);
    return ok;
  }
  function validateOrg(){
    var ok = orgInput.value.trim().length > 0;
    orgInput.classList.toggle('invalid', !ok);
    erroOrg.classList.toggle('show', !ok);
    return ok;
  }
 
  document.getElementById('btn-step3-back').addEventListener('click', function(){ goToStep(2); });
 
  document.getElementById('btn-step3-submit').addEventListener('click', function(){
    var okCidade = validateCidade();
    var okUf = validateUf();
    var okOrg = validateOrg();
    if(okCidade && okUf && okOrg){
      var primeiroNome = nomeInput.value.trim().split(' ')[0] || 'Atleta';
      document.getElementById('successName').textContent = primeiroNome;
      goToStep('success');
    }
  });
 
  /* ---------- SUCESSO ---------- */
  document.getElementById('btn-access-platform').addEventListener('click', function(){
    alert('Aqui você redireciona o usuário para a área logada da plataforma.');
  });
 
})();
