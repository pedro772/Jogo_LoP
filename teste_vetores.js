//Declaração de variaveis

var personagem, posicao, distanciaChegada, verificaChegada,
tempo, vidas, pergunta, bombaDesativar, estadoJogo, verificaFase1, verificaFase2, verificaFase3,
chegada;
var bomba = [];
var inimigo = [];
var tiro = [];
var distanciaTiro = [];
var contTiro = [];
var aviao = [];
var estouradoAviao = [];
var estouradoTiro = [];
var distancia = [];
var distanciaAviao = [];
var estouradoBomba = [];
var arr = [];
var resposta = [];

const ESTADOJOGO = {
    MENU : 0,
    FASE1 : 1,
    FASE2 : 2,
    FASE3 : 3,
    PAUSADO : 4,
    GAMEOVER : 5
};

estadoJogo = ESTADOJOGO.MENU;

//funções

function parametros() {
    bomba, inimigo, tiro, distanciaTiro, distanciaAviao, aviao, contTiro, estouradoAviao, estouradoTiro, distancia, distanciaAviao, estouradoBomba, arr;
    personagem = {x : 100, y : 125};
    for(i = 0; i < 7; i++) {
        contTiro[i] = 0;
        estouradoBomba[i] = false;
        estouradoTiro[i] = false;
        estouradoAviao[i] = false;
        if (i === 0) resposta[i] = "A";
        if (i === 1) resposta[i] = "B";
        if (i === 2) resposta[i] = "C";
        if (i === 3) resposta[i] = "D";
        if (i === 4) resposta[i] = "E";
        if (i === 5) resposta[i] = "F";
        }
    posicao, distanciaChegada, verificaFase1, verificaFase2, verificaFase3, tempo = 0, vidas = 3, pergunta, bombaDesativar, estadoJogo, chegada;
    verificaChegada = false;
}

function setup() {
    if(estadoJogo === ESTADOJOGO.MENU || estadoJogo === ESTADOJOGO.FASE1) {
        parametros();
        createCanvas(windowWidth, windowHeight);
        posicao = {x : 0, y : 200};
        for (i = 0; i < 3; i++) {
            if (i === 0) {
                bomba[i] = {x : random(windowWidth), y : random(125, (windowHeight / 3))};
                inimigo[i] = {x : random(windowWidth / 2), y : (windowHeight - 12.5)};
                tiro[i] = {x : (inimigo[i].x - 2.5), y : (inimigo[i].y - 6)};
            }
            if (i === 1) {
                bomba[i] = {x : random(windowWidth), y : random((windowHeight / 3), ((windowHeight / 3) * 2))};
                inimigo[i] = {x : random((windowWidth / 2), (windowWidth)), y : (windowHeight - 12.5)};
                tiro[i] = {x : (inimigo[i].x - 2.5), y : (inimigo[i].y - 6)};
            }
            if (i === 2) {
                bomba[i] = {x : random(windowWidth), y : random(((windowHeight / 3) * 2), windowHeight)};
            }
        }
        bombaDesativar = 1;
    }

    if(estadoJogo === ESTADOJOGO.FASE2) {
        parametros();
        createCanvas(windowWidth, windowHeight);
        posicao = {x : 0, y : 200};
        for (i = 0; i < 4; i++) {
            if (i === 0) {
                aviao[i] = {x : 20, y : random(225, windowHeight / 2)};
                bomba[i] = {x : random(windowWidth), y : random(125, (windowHeight / 3))};
                inimigo[i] = {x : 12.5, y : (windowHeight - 12.5)};  
            }
            if (i === 1) {
                aviao[i] = {x : 20, y : random(windowHeight / 2, windowHeight)};
                bomba[i] = {x : random(windowWidth), y : random((windowHeight / 3), ((windowHeight / 3) * 2))};
                inimigo[i] = {x : random(windowWidth / 2), y : (windowHeight - 12.5)};
            }
            if (i === 2) {
                bomba[i] = {x : random(windowWidth), y : random(((windowHeight / 3) * 2), windowHeight)};
                inimigo[i] = {x : random((windowWidth / 2), (windowWidth)), y : (windowHeight - 12.5)};
            }
            if (i === 3) {
                inimigo[i] = {x : (windowWidth - 12.5), y : (windowHeight - 12.5)};
            }
            tiro[i] = {x : (inimigo[i].x - 2.5), y : (inimigo[i].y - 6)};
        }
        bombaDesativar = 1;
    }
    
    if(estadoJogo === ESTADOJOGO.FASE3) {
        parametros();
        createCanvas(windowWidth, windowHeight);
        posicao = {x : 0, y : 200};
        for (i = 0; i < 6; i++) {
            if (i === 0) {
                aviao[i] = {x : 20, y : random(225, windowHeight / 3)};
                bomba[i] = {x : random(windowWidth / 4), y : random(125, windowHeight / 2.5)};
                inimigo[i] = {x : (windowWidth - 12.5), y : random(125, windowHeight / 4)};
            }
            if (i === 1) {
                aviao[i] = {x : 20, y : random((windowHeight / 3), (windowHeight / 1.5))};
                bomba[i] = {x : random((windowWidth / 4), (windowWidth / 2)), y : random(125, windowHeight / 2.5)};
                inimigo[i] = {x : (windowWidth - 12.5), y : random(((windowHeight / 4) + 12.5), (windowHeight / 2.7))};
            }
            if (i === 2) {
                aviao[i] = {x : 20, y : random((windowHeight / 1.5), (windowHeight))};
                bomba[i] = {x : random((windowWidth / 2), (windowWidth)), y : random(125, windowHeight / 2.5)};
                inimigo[i] = {x : (windowWidth - 12.5), y : random(((windowHeight / 2.7) + 12.5), (windowHeight / 1.9))};
            }
            if (i === 3) {
                bomba[i] = {x : random(windowWidth / 4), y : random((windowHeight / 2.5), (windowHeight / 1.5))};
                inimigo[i] = {x : (windowWidth - 12.5), y : random(((windowHeight / 1.9) + 12.5), (windowHeight / 1.4))};
            }
            if (i === 4) {
                bomba[i] = {x : random((windowWidth / 4), (windowWidth / 2)), y : random((windowHeight / 2.5), (windowHeight / 1.5))};
                inimigo[i] = {x : (windowWidth - 12.5), y : random(((windowHeight / 1.4)+ 12.5), (windowHeight / 1.1))};
            }
            if (i === 5) {
                bomba[i] = {x : random((windowWidth / 2), (windowWidth)), y : random((windowHeight / 2.5), (windowHeight / 1.5))};
            }
            if (i < 5) {
                tiro[i] = {x : (inimigo[i].x - 6), y : (inimigo[i].y - 2.5)};
            }
        }
        bombaDesativar = 1;
        chegada = {x : ((windowWidth / 2) - 10), y : (windowHeight - 30)};
    }
}

function draw() {
    if (estadoJogo === ESTADOJOGO.MENU) {
        background(0);
        textSize(14);
        fill(255);
        text(("PARA COMEÇAR O JOGO APERTE CONTROL"), (windowWidth / 2), (windowHeight / 2));
        if (keyIsDown(CONTROL)) {
            estadoJogo = ESTADOJOGO.FASE1;
        }
    }

    if (vidas <= 0) {
        estadoJogo = ESTADOJOGO.GAMEOVER;
    }

    if (estadoJogo === ESTADOJOGO.GAMEOVER) {
        background(0);
        fill(255, 0, 0);
        text("VOCÊ FALHOU!!!" , (windowWidth / 3), (windowHeight / 2));
        fill(255);
        text(("PARA REINICIAR O JOGO APERTE CONTROL"), (windowWidth / 2), (windowHeight / 2));
        text(("PARA VOLTAR PARA O MENU APERTE ESC"), (windowWidth / 1.5), (windowHeight / 3));
        text(("PARA CONTINUAR NA FASE 2 APERTE BACKSPACE"), (windowWidth / 3), (windowHeight / 3));
        text(("PARA CONTINUAR NA FASE 3 APERTE SHIFT"), (windowWidth / 1.5), (windowHeight / 1.5));
        if (keyIsDown(CONTROL)) {
            parametros();
            setup();
            estadoJogo = ESTADOJOGO.FASE1;
        }
        if (keyIsDown(ESCAPE)) {
            parametros();
            setup();
            estadoJogo = ESTADOJOGO.MENU;
        }
        if (keyIsDown(BACKSPACE)) {
            estadoJogo = ESTADOJOGO.FASE2;
            parametros();
            setup();
            verificaFase1 = 1;
            estadoJogo = ESTADOJOGO.FASE2;
            verificaFase1 = 1;
        }
        if (keyIsDown(SHIFT)) {
            estadoJogo = ESTADOJOGO.FASE3;
            parametros();
            setup();
            verificaFase2 = 1;
            estadoJogo = ESTADOJOGO.FASE3;
            verificaFase2 = 1;
        }
    }

    if (estadoJogo === ESTADOJOGO.FASE1) {
        background(0);

        if (bombaDesativar > 3) {
            fill(255); 
            text("VOCÊ VENCEU!!!" , (windowWidth / 3), (windowHeight / 2));
            text("PARA VOLTAR AO MENU APERTE ESC", (windowWidth / 2), (windowHeight / 2));
            text("PARA AVANÇAR PARA A SEGUNDA FASE APERTE BACKSPACE", (windowWidth / 2), (windowHeight / 3));
            if (keyIsDown(ESCAPE)) {
                parametros();
                setup();
                verificaFase1 = 1;
                estadoJogo = ESTADOJOGO.MENU;
            }
            if (keyIsDown(BACKSPACE)) {
                estadoJogo = ESTADOJOGO.FASE2;
                parametros();
                setup();
                verificaFase1 = 1;
                estadoJogo = ESTADOJOGO.FASE2;
                verificaFase1 = 1;
            }
        } 

        else {

            // personagem principal

            if (keyIsDown(LEFT_ARROW) && personagem.x > 25)
                personagem.x -= 5;

            if (keyIsDown(RIGHT_ARROW) && personagem.x < width - 25)
                personagem.x += 5;

            if (keyIsDown(UP_ARROW) && personagem.y > 125)
                personagem.y -= 5;

            if (keyIsDown(DOWN_ARROW) && personagem.y < height - 25)
                personagem.y += 5;

            fill(152, 245, 255);
            ellipse(personagem.x, personagem.y, 50, 50);
            fill(255);

            // inimigo e tiro

            for (i = 0; i < 2; i++) {              
                ellipse(inimigo[i].x, inimigo[i].y, 25, 25);
                rect(tiro[i].x, tiro[i].y, 5, 12);

                if (tiro[i].y > 0) {
                    tiro[i].y -= 5;
                } else {
                    tiro[i].y = inimigo[i].y;
                    tiro[i].x = inimigo[i].x;
                }

                distanciaTiro[i] = int(dist(tiro[i].x, tiro[i].y, personagem.x, personagem.y));

                if (distanciaTiro[i] < 27.5 && contTiro[i] < 1) {
                    text("BOOM!!!", 400, 15);
                    vidas--;
                    contTiro[i]++;
                }
    
                else if (distanciaTiro[i] >= 30) {
                    contTiro[i] = 0;
                }
            }

            // textos

            // tempo

            textSize(14); 
            fill(255); 
            text("Tempo: " + tempo + " segundos", 250, 15);

            if (posicao.x < 640) {
                posicao.x = posicao.x + 15;
            } else {
                tempo++;
                posicao.x = 0;
            }

            // vidas

            textSize(14);  
            fill(255);
            text("Vidas: " + vidas , 100, 15)

            // pontos

            textSize(14);
            fill(255);
            text("Pontos: " + (bombaDesativar-1) , 10, 15);

            // bombas

            for(i = 0; i < 3; i++) {
                fill(255)
                distancia[i] = int(dist(bomba[i].x, bomba[i].y, personagem.x, personagem.y));
                arr[i] = distancia[i] / 28;
                arr[i] = parseFloat(arr[i].toFixed(1));
                if (i === 0) {
                    text("A distancia entre você e a bomba " + (i + 1) + " é " + arr[i] + " metros.       O código de desativação dela é: " + resposta [i], 20, 30);
                }
                if (i === 1) {
                    text("A distancia entre você e a bomba " + (i + 1) + " é " + arr[i] + " metros.       O código de desativação dela é: " + resposta[i], 20, 50);
                }
                if (i === 2) {
                    text("A distancia entre você e a bomba " + (i + 1) + " é " + arr[i] + " metros.       O código de desativação dela é: " + resposta[i], 20, 70);
                }

                if (distancia[i] < 35 && !estouradoBomba[i] && bombaDesativar < (i + 1)) {
                    text("BOOMM!!!", 400, 15);
                    vidas--;
                    estouradoBomba[i] = true;
                }
                else if (distancia[i] >= 35) {
                    // estouradoBomba[i] = false;
                }
                else if (bombaDesativar === (i + 1)) {
                    pergunta = prompt("Digite o código de desativação");
                    if (pergunta === resposta[i]) {
                        text("DESATIVOU A BOMBA 2!!!", 400, 15);
                        bombaDesativar++;
                    } else {
                        vidas--;
                        estouradoBomba[i] = true;
                    }
                }
                else if (bombaDesativar < (i + 1)) {
                    text("BOOMM!!!", 400, 15);
                }
            }
        }
    }

    if (estadoJogo === ESTADOJOGO.FASE2) {
        background(0);

        if (bombaDesativar > 3) {
            fill(255); 
            text("VOCÊ VENCEU!!!" , (windowWidth / 3), (windowHeight / 2));
            text("PARA VOLTAR AO MENU APERTE ESC", (windowWidth / 2), (windowHeight / 2));
            text("PARA REPETIR A FASE 2 APERTE BACKSPACE", (windowWidth / 2), (windowHeight / 1.2));
            text("PARA AVANÇAR PARA A FASE 3 APERTE CONTROL", (windowWidth / 1.5), (windowHeight / 3));
            if (keyIsDown(ESCAPE)) {
                parametros();
                setup();
                estadoJogo = ESTADOJOGO.MENU;
            }
            if (keyIsDown(BACKSPACE)) {
                estadoJogo = ESTADOJOGO.FASE2;
                parametros();
                setup();
                verificaFase1 = 1;
                estadoJogo = ESTADOJOGO.FASE2;
                verificaFase1 = 1;
            }
            if (keyIsDown(CONTROL)) {
                estadoJogo = ESTADOJOGO.FASE3;
                parametros();
                setup();
                verificaFase2 = 1;
                estadoJogo = ESTADOJOGO.FASE3;
                verificaFase2 = 1;
            }
        } 

        else {

            // personagem principal

            if (keyIsDown(LEFT_ARROW) && personagem.x > 25)
                personagem.x -= 5;

            if (keyIsDown(RIGHT_ARROW) && personagem.x < width - 25)
                personagem.x += 5;

            if (keyIsDown(UP_ARROW) && personagem.y > 125)
                personagem.y -= 5;

            if (keyIsDown(DOWN_ARROW) && personagem.y < height - 25)
                personagem.y += 5;

            fill(152, 245, 255);
            ellipse(personagem.x, personagem.y, 50, 50);
            fill(255);

            // inimigo e tiro

            for (i = 0; i < 4; i++) {              
                ellipse(inimigo[i].x, inimigo[i].y, 25, 25);
                rect(tiro[i].x, tiro[i].y, 5, 12);

                if (tiro[i].y > 0) {
                    tiro[i].y -= 5;
                } else {
                    tiro[i].y = inimigo[i].y;
                    tiro[i].x = inimigo[i].x;
                }

                distanciaTiro[i] = int(dist(tiro[i].x, tiro[i].y, personagem.x, personagem.y));

                if (distanciaTiro[i] < 27.5 && contTiro[i] < 1) {
                    text("BOOM!!!", 400, 15);
                    vidas--;
                    contTiro[i]++;
                }
    
                else if (distanciaTiro[i] >= 30) {
                    contTiro[i] = 0;
                }
            }

            // aviões

            for (i = 0; i < 2; i++) {
                ellipse(aviao[i].x, aviao[i].y, 40, 40);

                if (aviao[i].x < windowWidth) {
                    aviao[i].x += 9;
                } else {
                    aviao[i].x = 20;
                    if (i === 0) {
                        aviao[i].y = random(225, windowHeight / 2);
                    }
                    if (i === 1) {
                        aviao[i].y = random(windowHeight / 2, windowHeight);
                    }
                }

                distanciaAviao[i] = int(dist(aviao[i].x, aviao[i].y, personagem.x, personagem.y));

                if (distanciaAviao[i] < 45 && !estouradoAviao[i]) {
                    text("BOOM!!!", 400, 15);
                    vidas--;
                    estouradoAviao[i] = true;
                }
                else if (distanciaAviao[i] >= 45){
                    estouradoAviao[i] = false;
                }
    
                else {
                    text("BOOM!!!", 400, 15);
                }
            }

            // textos

            // tempo

            textSize(14); 
            fill(255); 
            text("Tempo: " + tempo + " segundos", 250, 15);

            if (posicao.x < 640) {
                posicao.x = posicao.x + 15;
            } else {
                tempo++;
                posicao.x = 0;
            }

            // vidas

            textSize(14);  
            fill(255);
            text("Vidas: " + vidas , 100, 15)

            // pontos

            textSize(14);
            fill(255);
            text("Pontos: " + (bombaDesativar-1) , 10, 15);

            // bombas

            for(i = 0; i < 3; i++) {
                fill(255)
                distancia[i] = int(dist(bomba[i].x, bomba[i].y, personagem.x, personagem.y));
                arr[i] = distancia[i] / 28;
                arr[i] = parseFloat(arr[i].toFixed(1));
                if (i === 0) {
                    text("A distancia entre você e a bomba " + (i + 1) + " é " + arr[i] + " metros.       O código de desativação dela é: " + resposta[i], 20, 30);
                }
                if (i === 1) {
                    text("A distancia entre você e a bomba " + (i + 1) + " é " + arr[i] + " metros.       O código de desativação dela é: " + resposta[i], 20, 50);
                }
                if (i === 2) {
                    text("A distancia entre você e a bomba " + (i + 1) + " é " + arr[i] + " metros.       O código de desativação dela é: " + resposta[i], 20, 70);
                }

                if (distancia[i] < 35 && !estouradoBomba[i] && bombaDesativar < (i + 1)) {
                    text("BOOMM!!!", 400, 15);
                    vidas--;
                    estouradoBomba[i] = true;
                }
                else if (distancia[i] >= 35) {
                    // estouradoBomba[i] = false;
                }
                else if (bombaDesativar === (i + 1)) {
                    pergunta = prompt("Digite o código de desativação");
                    if (pergunta === resposta[i]) {
                        text("DESATIVOU A BOMBA 2!!!", 400, 15);
                        bombaDesativar++;
                    } else {
                        vidas--;
                        estouradoBomba[i] = true;
                    }
                }
                else if (bombaDesativar < (i + 1)) {
                    text("BOOMM!!!", 400, 15);
                }
            }
        }
    }

    if(estadoJogo === ESTADOJOGO.FASE3) {
        background(0);

        if (bombaDesativar > 6 && verificaChegada === true) {
            fill(255); 
            text("VOCÊ VENCEU!!!" , (windowWidth / 3), (windowHeight / 2));
            text("PARA VOLTAR AO MENU APERTE ESC", (windowWidth / 2), (windowHeight / 2));
            text("PARA REPETIR A FASE 3 APERTE BACKSPACE", (windowWidth / 2), (windowHeight / 3));
            if (keyIsDown(ESCAPE)) {
                parametros();
                setup();
                estadoJogo = ESTADOJOGO.MENU;
            }
            if (keyIsDown(BACKSPACE)) {
                estadoJogo = ESTADOJOGO.FASE3;
                parametros();
                setup();
                verificaFase2 = 1;
                estadoJogo = ESTADOJOGO.FASE3;
                verificaFase2 = 1;
            }
        } 

        else {

            // personagem principal

            if (keyIsDown(LEFT_ARROW) && personagem.x > 25)
                personagem.x -= 5;

            if (keyIsDown(RIGHT_ARROW) && personagem.x < width - 25)
                personagem.x += 5;

            if (keyIsDown(UP_ARROW) && personagem.y > 125)
                personagem.y -= 5;

            if (keyIsDown(DOWN_ARROW) && personagem.y < height - 25)
                personagem.y += 5;

            fill(152, 245, 255);
            ellipse(personagem.x, personagem.y, 50, 50);
            fill(255);

            // inimigo e tiro

            for (i = 0; i < 5; i++) {              
                ellipse(inimigo[i].x, inimigo[i].y, 25, 25);
                rect(tiro[i].x, tiro[i].y, 12, 5);

                if (tiro[i].x > 0) {
                    tiro[i].x -= 5;
                } else {
                    tiro[i].y = inimigo[i].y;
                    tiro[i].x = inimigo[i].x;
                }

                distanciaTiro[i] = int(dist(tiro[i].x, tiro[i].y, personagem.x, personagem.y));

                if (distanciaTiro[i] < 27.5 && contTiro[i] < 1) {
                    text("BOOM!!!", 400, 15);
                    vidas--;
                    contTiro[i]++;
                }
    
                else if (distanciaTiro[i] >= 30) {
                    contTiro[i] = 0;
                }
            }

            // aviões

            for (i = 0; i < 3; i++) {
                ellipse(aviao[i].x, aviao[i].y, 40, 40);

                if (aviao[i].x < windowWidth) {
                    aviao[i].x += 9;
                } else {
                    aviao[i].x = 20;
                    if (i === 0) {
                        aviao[i].y = random(225, windowHeight / 3);
                    }
                    if (i === 1) {
                        aviao[i].y = random((windowHeight / 3), (windowHeight / 1.5));
                    }
                    if (i === 2) {
                        aviao[i].y = random((windowHeight / 1.5), (windowHeight));
                    }
                }

                distanciaAviao[i] = int(dist(aviao[i].x, aviao[i].y, personagem.x, personagem.y));

                if (distanciaAviao[i] < 45 && !estouradoAviao[i]) {
                    text("BOOM!!!", 400, 15);
                    vidas--;
                    estouradoAviao[i] = true;
                }
                else if (distanciaAviao[i] >= 45){
                    estouradoAviao[i] = false;
                }
    
                else {
                    text("BOOM!!!", 400, 15);
                }
            }

            // textos

            // tempo

            textSize(14); 
            fill(255); 
            text("Tempo: " + tempo + " segundos", 250, 15);

            if (posicao.x < 640) {
                posicao.x = posicao.x + 15;
            } else {
                tempo++;
                posicao.x = 0;
            }

            // vidas

            textSize(14);  
            fill(255);
            text("Vidas: " + vidas , 100, 15)

            // pontos

            textSize(14);
            fill(255);
            text("Pontos: " + (bombaDesativar-1) , 10, 15);

            // bombas

            for(i = 0; i < 6; i++) {
                fill(255)
                distancia[i] = int(dist(bomba[i].x, bomba[i].y, personagem.x, personagem.y));
                arr[i] = distancia[i] / 28;
                arr[i] = parseFloat(arr[i].toFixed(1));
                if (i === 0) {
                    text("A distancia entre você e a bomba " + (i + 1) + " é " + arr[i] + " metros.       O código de desativação dela é: " + resposta[i], 20, 30);
                }
                if (i === 1) {
                    text("A distancia entre você e a bomba " + (i + 1) + " é " + arr[i] + " metros.       O código de desativação dela é: " + resposta[i], 20, 50);
                }
                if (i === 2) {
                    text("A distancia entre você e a bomba " + (i + 1) + " é " + arr[i] + " metros.       O código de desativação dela é: " + resposta[i], 20, 70);
                }
                if (i === 3) {
                    text("A distancia entre você e a bomba " + (i + 1) + " é " + arr[i] + " metros.       O código de desativação dela é: " + resposta[i], 620, 30);
                }
                if (i === 4) {
                    text("A distancia entre você e a bomba " + (i + 1) + " é " + arr[i] + " metros.       O código de desativação dela é: " + resposta[i], 620, 50);
                }
                if (i === 5) {
                    text("A distancia entre você e a bomba " + (i + 1) + " é " + arr[i] + " metros.       O código de desativação dela é: " + resposta[i], 620, 70);
                }

                if (distancia[i] < 35 && !estouradoBomba[i] && bombaDesativar < (i + 1)) {
                    text("BOOMM!!!", 400, 15);
                    vidas--;
                    estouradoBomba[i] = true;
                }
                else if (distancia[i] >= 35) {
                    // estouradoBomba[i] = false;
                }
                else if (bombaDesativar === (i + 1)) {
                    pergunta = prompt("Digite o código de desativação");
                    if (pergunta === resposta[i]) {
                        text("DESATIVOU A BOMBA 2!!!", 400, 15);
                        bombaDesativar++;
                    } else {
                        vidas--;
                        estouradoBomba[i] = true;
                    }
                }
                else if (bombaDesativar < (i + 1)) {
                    text("BOOMM!!!", 400, 15);
                }
            }

            rect(chegada.x, chegada.y, 50, 20);
            distanciaChegada = int(dist(chegada.x, chegada.y, personagem.x, personagem.y));

            if (distanciaChegada < 30) {
                verificaChegada = true;
            }
        }
    }
} 