function desenharCanvas() {
    tabuleiro.lineWidth = 8;
    tabuleiro.lineCap = "round";
    tabuleiro.lineJoin = "round";
    tabuleiro.fillStyle = "#F3f5FC";
    tabuleiro.strokeStyle = "#0A3871";

    tabuleiro.fillRect(0,0,1200,600);
    tabuleiro.beginPath();
    tabuleiro.moveTo(700,250);
    tabuleiro.lineTo(500,250);
    tabuleiro.stroke();
    tabuleiro.closePath();
}

function desenharLinhas() {
    tabuleiro.lineWidth = 6;
    tabuleiro.lineCap = "round";
    tabuleiro.lineJoin = "round";
    tabuleiro.fillStyle = "#F3f5FC";
    tabuleiro.strokeStyle = "#0A3871";

    let largura = 600/palavraSecreta.length;
    for(let i=0; i < palavraSecreta.length; i++) {
        tabuleiro.moveTo(350+(largura*i), 330);
        tabuleiro.lineTo(400+(largura*i), 330);
    }

    tabuleiro.stroke();
    tabuleiro.closePath();
}

function escreverLetra(index) {
    tabuleiro.font = "bold 52px Itim";
    tabuleiro.lineCap = "round";
    tabuleiro.fillStyle = "#0A3871";
    tabuleiro.lineWidth = 6;
    let largura = 600/palavraSecreta.length;
    tabuleiro.fillText(palavraSecreta[index],350+(largura*index), 320);
}

function escreverLetraErrada(letra, erros) {
    tabuleiro.font = "bold 40px Itim";
    tabuleiro.lineCap = "round";
    tabuleiro.fillStyle = "#0A3871";
    tabuleiro.lineWidth = 6;
    tabuleiro.fillText(letra,320+(40*(10-erros)),380);
}