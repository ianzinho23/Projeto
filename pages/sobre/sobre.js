const frases = [
    "Todo atleta merece ser visto.",
    "Não apenas os que têm clube grande atrás.",
    "Não apenas os de capital.",
    "Não apenas os que conhecem alguém.",
    "O talento não avisa onde nasce.",
    "Mas a falta de visibilidade o silencia.",
    "ModoCarreira existe para mudar <br>isso.".toUpperCase(),
    "CRIAR PERFIL GRÁTIS﹥",
    "VER ATLETAS"
    
];

const linhas = document.querySelectorAll(".linha");

frases.forEach((frase, index) => {
    setTimeout(() => {
        linhas[index].innerHTML = frase;
        linhas[index].classList.add("aparecer");
    }, index * 500); 
});


//faq

document.querySelectorAll('.faq-item').forEach(function(item){
    var btn = item.querySelector('.faq-q');
    var answer = item.querySelector('.faq-a');
    btn.addEventListener('click', function(){
      var isOpen = item.classList.contains('open');
      document.querySelectorAll('.faq-item.open').forEach(function(openItem){
        if(openItem !== item){
          openItem.classList.remove('open');
          openItem.querySelector('.faq-a').style.maxHeight = null;
        }
      });
      if(isOpen){
        item.classList.remove('open');
        answer.style.maxHeight = null;
      } else {
        item.classList.add('open');
        answer.style.maxHeight = answer.scrollHeight + 'px';
      }
    });
  });