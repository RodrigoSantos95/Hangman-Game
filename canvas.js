function desenharCanvas() {
    tabuleiro.lineWidth = 8;
    tabuleiro.lineCap = "round";
    tabuleiro.lineJoin = "round";
    tabuleiro.fillStyle = "#F3f5FC";
    tabuleiro.strokeStyle = "#0A3871";

    tabuleiro.fillRect(0,0,1200,600);
    tabuleiro.beginPath();
    tabuleiro.moveTo(700,250);
    tabuleiro.lineTo(600,250);
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
    tabuleiro.fillText(letra,200+(40*(10-erros)),380);
}

function desenharForca () {
    switch (letrasErradas.length) {
        case 1:
            tabuleiro.moveTo(650,250)
            tabuleiro.lineTo(650,100)
            tabuleiro.stroke()
            tabuleiro.closePath()
        break;

        case 2:
            tabuleiro.moveTo(650,100)
            tabuleiro.lineTo(700,100)
            tabuleiro.stroke()
            tabuleiro.closePath()
        break;

        case 3:
            tabuleiro.moveTo(700,100)
            tabuleiro.lineTo(700,125)
            tabuleiro.stroke()
            tabuleiro.closePath()
        break;

        case 4: 
            tabuleiro.beginPath()
            tabuleiro.arc(700,145,15,0,2*Math.PI)
            tabuleiro.stroke()
            tabuleiro.closePath()
        break;

        case 5: 
            tabuleiro.moveTo(700,160)
            tabuleiro.lineTo(700,200)
            tabuleiro.stroke()
            tabuleiro.closePath()
        break;

        case 6:
            tabuleiro.moveTo(700,160)
            tabuleiro.lineTo(720,175)
            tabuleiro.stroke()
            tabuleiro.closePath()
        break;
        
        case 7: 
            tabuleiro.moveTo(700,160)
            tabuleiro.lineTo(680,175)
            tabuleiro.stroke()
            tabuleiro.closePath()
        break;

        case 8:
            tabuleiro.moveTo(700,200)
            tabuleiro.lineTo(720,220)
            tabuleiro.stroke()
            tabuleiro.closePath()
        break;

        case 9:
            tabuleiro.moveTo(700,200)
            tabuleiro.lineTo(680,220)
            tabuleiro.stroke()
            tabuleiro.closePath()
        break;

    }
    
}