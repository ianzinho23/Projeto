const frases = [
    "Todo atleta merece ser visto.",
    "Não apenas os que têm clube grande atrás.",
    "Não apenas os de capital.",
    "Não apenas os que conhecem alguém.",
    "O talento não avisa onde nasce.",
    "Mas a falta de visibilidade o silencia.",
    "ModoCarreira existe para mudar <br>isso.".toUpperCase(),
    
];

const linhas = document.querySelectorAll(".linha");

frases.forEach((frase, index) => {
    setTimeout(() => {
        linhas[index].innerHTML = frase;
        linhas[index].classList.add("aparecer");
    }, index * 500); // 1.2s entre cada frase
});