let palavras = ["RACE", "SOCCER", "BRASIL", "JAVASCRIPT", "REACT", "HTML"];
let tabuleiro = document.querySelector("#forca").getContext("2d");
let palavraSecreta = ""; 

function setPalavraSecreta () {
    let palavra = palavras[Math.floor(Math.random() * palavras.length)];
    palavraSecreta = palavra;
    console.log(palavraSecreta)
}

function iniciarJogo() {
    document.querySelector("#div-desaparece").style.display = "none";
    setPalavraSecreta();
}