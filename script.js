let palavras = ["RACE", "COMPUTER", "BRASIL", "TRAVEL", "REACT", "HTML"];
let tabuleiro = document.querySelector("#forca").getContext("2d");
let palavraSecreta = ""; 
let letras = [];
let letrasErradas = [];
let erros = 8;
let acertos =0;

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

function adicionarLetraErrada() {
    erros -= 1;
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
                    letras.push(i)
                    acertos++
                }
            }
        }else{
            adicionarLetraErrada(letra);
            escreverLetraErrada(letra, erros);
            letrasErradas.push(letra)
            desenharForca()
        }
        let mensagem = ""

        if(letrasErradas.length == 9) {
           mensagem = "Fim de Jogo! Você perdeu!";
           document.onkeydown = null;
            
        }
        if(acertos == palavraSecreta.length) {
            mensagem = "Parabéns, você acertou a palavra!";
            document.onkeydown = null;
        }
        if(mensagem) {
            document.querySelector("#mensagem").innerHTML = mensagem
            document.querySelector(".popup-container").style.display = "flex"
        }
    }
}

function reiniciarJogo() {
    window.location.reload()
}