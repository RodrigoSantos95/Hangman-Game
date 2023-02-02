let palavras = ["RACE", "SOCCER", "BRASIL", "JAVASCRIPT", "REACT", "HTML"];
let tabuleiro = document.querySelector("#forca").getContext("2d");
let palavraSecreta = ""; 

function setPalavraSecreta () {
    let palavra = palavras[Math.floor(Math.random() * palavras.length)];
    palavraSecreta = palavra;
}

function iniciarJogo() {
    document.querySelector("#div-desaparece").style.display = "none";
    document.querySelector("#container-h1").style.display = "none";
    setPalavraSecreta();
    desenharCanvas();
    desenharLinhas();
}