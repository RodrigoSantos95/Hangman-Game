let palavras = ["RACE", "SOCCER", "BRASIL", "JAVASCRIPT", "REACT", "HTML"];
let tabuleiro = document.querySelector("#forca").getContext("2d");
let palavraSecreta = ""; 
let letras = [];

function setPalavraSecreta () {
    let palavra = palavras[Math.floor(Math.random() * palavras.length)];
    palavraSecreta = palavra;
}

function verificarLetra(key) {
    let estado = false;
    if(key >= 65 && letras.indexOf(key) || key <= 90 && letras.indexOf(key)) {
        letras.push(key);
        return estado;
    }else{
        estado = true;
        letras.push(key);
        return estado;
    }
}

function iniciarJogo() {
    document.querySelector("#div-desaparece").style.display = "none";
    document.querySelector("#container-h1").style.display = "none";
    setPalavraSecreta();
    desenharCanvas();
    desenharLinhas();

    document.onkeydown = (e) => {
        let letra = e.key.toUpperCase();

        if(verificarLetra(letra) && palavraSecreta.includes(letra)) {
            for(let i=0; i < palavraSecreta.length; i++) {
                if(palavraSecreta[i] === letra) {
                    escreverLetra(i);
                }else{
                    
                }
            }
        }
    }
}