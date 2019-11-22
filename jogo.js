//Declaração de variaveis
var personagem, posicao, aviao1, aviao2, aviao3, bomba1, bomba2, bomba3, bomba4, bomba5, bomba6,
distancia1, distancia2, distancia3, distancia4, distancia5, distancia6, distanciaAviao1, distanciaAviao2, distanciaAviao3,
inimigo1, inimigo2, inimigo3, inimigo4, inimigo5, tiro1, tiro2, tiro3, tiro4, tiro5,
distanciaTiro1, distanciaTiro2, distanciaTiro3, distanciaTiro4, distanciaTiro5, distanciaChegada, verificaChegada,
contTiro1, contTiro2, contTiro3, contTiro4, contTiro5,naTela, 
estouradoBomba1, estouradoBomba2, estouradoBomba3, estouradoBomba4, estouradoBomba5, estouradoBomba6, estouradoTiro1, estouradoTiro2, estouradoTiro3, estouradoTiro4, estouradoTiro5, 
estouradoAviao1, estouradoAviao2, estouradoAviao3,
tempo, vidas, pergunta, bombaDesativar, estadoJogo, resposta1, resposta2, resposta3, arr1, arr2, arr3, arr4, arr5, arr6, verificaFase1, verificaFase2, verificaFase3,
chegada;

const ESTADOJOGO = {
    MENU : 0,
    FASE1 : 1,
    FASE2 : 2,
    FASE3 : 3,
    PAUSADO : 4,
    GAMEOVER : 5
};

estadoJogo = ESTADOJOGO.MENU;

// Transformar bombas em vetores | Respostas em vetores (códigos de desativação)
// definir um botão de desativamento futuramente

//funções

function parametros() {
    personagem = {x : 100, y : 125};
    posicao, aviao1, aviao2, bomba1, bomba2, bomba3, distancia1, distancia2, distancia3, distancia4, distancia5, distancia6,
    distanciaAviao1, distanciaAviao2, inimigo1, inimigo2, inimigo3, inimigo4, inimigo5, tiro1, tiro2, tiro3, tiro4, tiro5, 
    distanciaTiro1, distanciaTiro2, distanciaTiro3, distanciaTiro4, distanciaTiro5, distanciaChegada, verificaChegada = false;
    contTiro1, contTiro2, contTiro3, contTiro4, contTiro5, arr1, arr2, arr3, arr4, arr5, arr6;
    contTiro1 = 0, contTiro2 = 0, contTiro3 = 0, contTiro4 = 0, contTiro5 = 0, tempo = 0, vidas = 3;
    naTela = true, estouradoBomba1 = false, estouradoBomba2 = false, estouradoBomba3 = false, estouradoBomba4 = false, estouradoBomba5 = false, estouradoBomba6 = false, estouradoTiro1 = false,
    estouradoTiro2 = false, estouradoTiro3 = false, estouradoTiro4 = false, estouradoTiro5 = false, estouradoAviao1 = false, estouradoAviao2 = false, estouradoAviao3 = false; 
    //colocar em forma de vetores na parte dois
    pergunta, bombaDesativar, estadoJogo;
    chegada;
    resposta1 = "A";
    resposta2 = "B";
    resposta3 = "C";
    resposta4 = "D";
    resposta5 = "E";
    resposta6 = "F";
}

function setup() {
    if(estadoJogo === ESTADOJOGO.MENU || estadoJogo === ESTADOJOGO.FASE1) {
        parametros();
        createCanvas(windowWidth, windowHeight);
        posicao = {x : 0, y : 200};
        bomba1 = {x : random(windowWidth), y : random(125, (windowHeight / 3))};
        bomba2 = {x : random(windowWidth), y : random((windowHeight / 3), ((windowHeight / 3) * 2))};
        bomba3 = {x : random(windowWidth), y : random(((windowHeight / 3) * 2), windowHeight)};
        bombaDesativar = 1;
        inimigo1 = {x : random(windowWidth / 2), y : (windowHeight - 12.5)};
        inimigo2 = {x : random((windowWidth / 2), (windowWidth)), y : (windowHeight - 12.5)};
        tiro1 = {x : (inimigo1.x - 2.5), y : (inimigo1.y - 6)};
        tiro2 = {x : (inimigo2.x - 2.5), y : (inimigo2.y - 6)};
    }

    if(estadoJogo === ESTADOJOGO.FASE2) {
        parametros();
        createCanvas(windowWidth, windowHeight);
        aviao1 = {x : 20, y : random(125, windowHeight / 2)};
        aviao2 = {x : 20, y : random(windowHeight / 2, windowHeight)};
        posicao = {x : 0, y : 200};
        bomba1 = {x : random(windowWidth), y : random(125, (windowHeight / 3))};
        bomba2 = {x : random(windowWidth), y : random((windowHeight / 3), ((windowHeight / 3) * 2))};
        bomba3 = {x : random(windowWidth), y : random(((windowHeight / 3) * 2), windowHeight)};
        bombaDesativar = 1;
        inimigo1 = {x : 12.5, y : (windowHeight - 12.5)};
        inimigo2 = {x : random(windowWidth / 2), y : (windowHeight - 12.5)};
        inimigo3 = {x : random((windowWidth / 2), (windowWidth)), y : (windowHeight - 12.5)};
        inimigo4 = {x : (windowWidth - 12.5), y : (windowHeight - 12.5)};
        tiro1 = {x : (inimigo1.x - 2.5), y : (inimigo1.y - 6)};
        tiro2 = {x : (inimigo2.x - 2.5), y : (inimigo2.y - 6)};
        tiro3 = {x : (inimigo3.x - 2.5), y : (inimigo3.y - 6)};
        tiro4 = {x : (inimigo4.x - 2.5), y : (inimigo4.y - 6)};
    }
    
    if(estadoJogo === ESTADOJOGO.FASE3) {
        parametros();
        createCanvas(windowWidth, windowHeight);
        aviao1 = {x : 20, y : random(125, windowHeight / 3)};
        aviao2 = {x : 20, y : random((windowHeight / 3), (windowHeight / 1.5))};
        aviao3 = {x : 20, y : random((windowHeight / 1.5), (windowHeight))};
        posicao = {x : 0, y : 200};
        bomba1 = {x : random(windowWidth / 4), y : random(125, windowHeight / 2.5)};
        bomba2 = {x : random((windowWidth / 4), (windowWidth / 2)), y : random(125, windowHeight / 2.5)};
        bomba3 = {x : random((windowWidth / 2), (windowWidth)), y : random(125, windowHeight / 2.5)};
        bomba4 = {x : random(windowWidth / 4), y : random((windowHeight / 2.5), (windowHeight / 1.5))};
        bomba5 = {x : random((windowWidth / 4), (windowWidth / 2)), y : random((windowHeight / 2.5), (windowHeight / 1.5))};
        bomba6 = {x : random((windowWidth / 2), (windowWidth)), y : random((windowHeight / 2.5), (windowHeight / 1.5))};
        bombaDesativar = 1;
        inimigo1 = {x : (windowWidth - 12.5), y : random(125, windowHeight / 4)};
        inimigo2 = {x : (windowWidth - 12.5), y : random(((windowHeight / 4) + 12.5), (windowHeight / 2.7))};
        inimigo3 = {x : (windowWidth - 12.5), y : random(((windowHeight / 2.7) + 12.5), (windowHeight / 1.9))};
        inimigo4 = {x : (windowWidth - 12.5), y : random(((windowHeight / 1.9) + 12.5), (windowHeight / 1.4))};
        inimigo5 = {x : (windowWidth - 12.5), y : random(((windowHeight / 1.4)+ 12.5), (windowHeight / 1.1))};
        tiro1 = {x : (inimigo1.x - 6), y : (inimigo1.y - 2.5)};
        tiro2 = {x : (inimigo2.x - 6), y : (inimigo2.y - 2.5)};
        tiro3 = {x : (inimigo3.x - 6), y : (inimigo3.y - 2.5)};
        tiro4 = {x : (inimigo4.x - 6), y : (inimigo4.y - 2.5)};
        tiro5 = {x : (inimigo4.x - 6), y : (inimigo4.y - 2.5)};
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

            ellipse(inimigo1.x, inimigo1.y, 25, 25);
            rect(tiro1.x, tiro1.y, 5, 12);
            
            if (tiro1.y > 0) {
                tiro1.y -= 5;
            } else {
                tiro1.y = inimigo1.y;
                tiro1.x = inimigo1.x;
            }

            distanciaTiro1 = int(dist(tiro1.x, tiro1.y, personagem.x, personagem.y));

            if (distanciaTiro1 < 27.5 && !estouradoTiro1 && contTiro1 < 1) {
                text("BOOM!!!", 400, 15);
                vidas--;
                contTiro1++;
            }

            else if (distanciaTiro1 >= 30) {
                contTiro1 = 0;
            }

            ellipse(inimigo2.x, inimigo2.y, 25, 25);
            rect(tiro2.x, tiro2.y, 5, 12);

            if (tiro2.y > 0) {
                tiro2.y -= 5;
            } else {
                tiro2.y = inimigo2.y;
                tiro2.x = inimigo2.x;
            }

            distanciaTiro2 = int(dist(tiro2.x, tiro2.y, personagem.x, personagem.y));

            if (distanciaTiro2 < 27.5 && !estouradoTiro2 && contTiro2 < 1) {
                text("BOOM!!!", 400, 15);
                vidas--;
                contTiro2++;
            }

            else if (distanciaTiro2 >= 30) {
                contTiro2 = 0;
            }

            // textos

            //tempo

            textSize(14); 
            fill(255); 
            text("Tempo: " + tempo + " segundos", 250, 15);

            if (posicao.x < 640) {
                posicao.x = posicao.x + 15;
            } else {
                tempo++;
                posicao.x = 0;
            }

            //vida

            textSize(14);  
            fill(255);
            text("Vidas: " + vidas , 100, 15)

            //pontos

            textSize(14);
            fill(255);
            text("Pontos: " + (bombaDesativar-1) , 10, 15);

            //bomba1

            distancia1 = int(dist(bomba1.x, bomba1.y, personagem.x, personagem.y));
            arr1 = distancia1 / 28;
            arr1 = parseFloat(arr1.toFixed(1));
            textSize(16);
            fill(255)
            text("A distancia entre você e a bomba 1 é " + arr1 + " metros.       O código de desativação dela é: A", 20, 40);

            if (distancia1 < 35 && bombaDesativar === 1) {
                pergunta = prompt("Digite o código de desativação");
            if (pergunta === resposta1) {
                text("DESATIVOU A BOMBA 1!!!", 400, 15);
                bombaDesativar++;
            } else {
                vidas--;
                estouradoBomba1 = true;
            }
            }

            //bomba 2 

            fill(255)
            distancia2 = int(dist(bomba2.x, bomba2.y, personagem.x, personagem.y));
            arr2 = distancia2 / 28;
            arr2 = parseFloat(arr2.toFixed(1));
            text("A distancia entre você e a bomba 2 é " + arr2 + " metros.       O código de desativação dela é: B.", 20, 60);

            if (distancia2 < 35 && !estouradoBomba2 && bombaDesativar < 2) {
                text("BOOMM!!!", 400, 15);
                vidas--;
                estouradoBomba2 = true;
            }
            else if (distancia2 >= 35) {
                estouradoBomba2 = false;
            }
            else if (bombaDesativar === 2) {
                pergunta = prompt("Digite o código de desativação");
                if (pergunta === resposta2) {
                    text("DESATIVOU A BOMBA 2!!!", 400, 15);
                    bombaDesativar++;
                } else {
                    vidas--;
                    estouradoBomba2 = true;
                }
            }
            else if (bombaDesativar < 2) {
                text("BOOMM!!!", 400, 15);
            }

            //bomba 3

            fill(255)
            distancia3 = int(dist(bomba3.x, bomba3.y, personagem.x, personagem.y));
            arr3 = distancia3 / 28;
            arr3 = parseFloat(arr3.toFixed(1));
            text("A distancia entre você e a bomba 3 é " + arr3 + " metros.       O código de desativação dela é: C", 20, 80);

            if (distancia3 < 35 && !estouradoBomba3 && bombaDesativar < 3){
                text("BOOMM!!!", 400, 15);
                vidas--;
                estouradoBomba3 = true;
            }
            else if (distancia3 >=35){
                estouradoBomba3 = false;
            }
            else if (bombaDesativar === 3) {
                pergunta = prompt("Digite o código de desativação");
                if (pergunta === resposta3) {
                    text("DESATIVOU A BOMBA 3!!!", 400, 15);
                    bombaDesativar++; 
                } else {
                    vidas--;
                    estouradoBomba3 = true;
                }
            }
            else if (bombaDesativar < 3){
                text("BOOMM!!!", 400, 15);
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

            ellipse(inimigo1.x, inimigo1.y, 25, 25);
            rect(tiro1.x, tiro1.y, 5, 12);
            
            if (tiro1.y > 0) {
                tiro1.y -= 5;
                tiro1.x += 5;
            } else {
                tiro1.y = inimigo1.y;
                tiro1.x = inimigo1.x;
            }

            distanciaTiro1 = int(dist(tiro1.x, tiro1.y, personagem.x, personagem.y));

            if (distanciaTiro1 < 27.5 && !estouradoTiro1 && contTiro1 < 1) {
                text("BOOM!!!", 400, 15);
                vidas--;
                contTiro1++;
            }

            else if (distanciaTiro1 >= 30) {
                contTiro1 = 0;
            }

            ellipse(inimigo2.x, inimigo2.y, 25, 25);
            rect(tiro2.x, tiro2.y, 5, 12);

            if (tiro2.y > 0) {
                tiro2.y -= 5;
            } else {
                tiro2.y = inimigo2.y;
                tiro2.x = inimigo2.x;
            }

            distanciaTiro2 = int(dist(tiro2.x, tiro2.y, personagem.x, personagem.y));

            if (distanciaTiro2 < 27.5 && !estouradoTiro2 && contTiro2 < 1) {
                text("BOOM!!!", 400, 15);
                vidas--;
                contTiro2++;
            }

            else if (distanciaTiro2 >= 30) {
                contTiro2 = 0;
            }

            ellipse(inimigo3.x, inimigo3.y, 25, 25);
            rect(tiro3.x, tiro3.y, 5, 12);

            if (tiro3.y > 0) {
                tiro3.y -= 5;
            } else {
                tiro3.y = inimigo3.y;
                tiro3.x = inimigo3.x;
            }

            distanciaTiro3 = int(dist(tiro3.x, tiro3.y, personagem.x, personagem.y));

            if (distanciaTiro3 < 27.5 && !estouradoTiro3 && contTiro3 < 1) {
                text("BOOM!!!", 400, 15);
                vidas--;
                contTiro3++;
            }

            else if (distanciaTiro3 >= 30) {
                contTiro3 = 0;
            }

            ellipse(inimigo4.x, inimigo4.y, 25, 25);
            rect(tiro4.x, tiro4.y, 5, 12);

            if (tiro4.y > 0) {
                tiro4.y -= 5;
                tiro4.x -= 5;
            } else {
                tiro4.y = inimigo4.y;
                tiro4.x = inimigo4.x;
            }

            distanciaTiro4 = int(dist(tiro4.x, tiro4.y, personagem.x, personagem.y));

            if (distanciaTiro4 < 27.5 && !estouradoTiro4 && contTiro4 < 1) {
                text("BOOM!!!", 400, 15);
                vidas--;
                contTiro4++;
            }

            else if (distanciaTiro4 >= 30) {
                contTiro4 = 0;
            }

            // aviões
            // corrigir mortes múltiplas

            ellipse(aviao1.x, aviao1.y, 40, 40);

            if (aviao1.x < windowWidth) {
                aviao1.x += 9;   
            } else {
                aviao1.y = random(125, windowHeight / 2);
                aviao1.x = 20;
            }

            distanciaAviao1 = int(dist(aviao1.x, aviao1.y, personagem.x, personagem.y));

            if (distanciaAviao1 < 45 && !estouradoAviao1) {
                text("BOOM!!!", 400, 15);
                vidas--;
                estouradoAviao1 = true;
            }

            else if (distanciaAviao1 >= 45){
                estouradoAviao1 = false;
            }

            else {
                text("BOOM!!!", 400, 15);
            }

            ellipse(aviao2.x, aviao2.y, 40, 40);

            if (aviao2.x < windowWidth) {
                aviao2.x += 9;   
            } else {
                aviao2.y = random(windowHeight / 2, windowHeight);
                aviao2.x = 20;
                ellipse(aviao2.x, aviao2.y, 40, 40);
            }

            distanciaAviao2 = int(dist(aviao2.x, aviao2.y, personagem.x, personagem.y));

            if (distanciaAviao2 < 45 && !estouradoAviao2) {
                text("BOOM!!!", 400, 15);
                vidas--;
                estouradoAviao2 = true;
            }

            else if (distanciaAviao2 >= 45) {
                estouradoAviao2 = false;
            }

            else {
                text("BOOM!!!", 400, 15);
            }
            

            // textos

            //tempo

            textSize(14); 
            fill(255); 
            text("Tempo: " + tempo + " segundos", 250, 15);

            if (posicao.x < 640) {
                posicao.x = posicao.x + 15;
            } else {
                tempo++;
                posicao.x = 0;
            }

            //vida

            textSize(14);  
            fill(255);
            text("Vidas: " + vidas , 100, 15)

            //pontos

            textSize(14);
            fill(255);
            text("Pontos: " + (bombaDesativar-1) , 10, 15);

            //bomba1

            distancia1 = int(dist(bomba1.x, bomba1.y, personagem.x, personagem.y));
            arr1 = distancia1 / 28;
            arr1 = parseFloat(arr1.toFixed(1));
            textSize(16);
            fill(255)
            text("A distancia entre você e a bomba 1 é " + arr1 + " metros.       O código de desativação dela é: A", 20, 40);

            if (distancia1 < 35 && bombaDesativar === 1) {
                pergunta = prompt("Digite o código de desativação");
            if (pergunta === resposta1) {
                text("DESATIVOU A BOMBA 1!!!", 400, 15);
                bombaDesativar++;
            } else {
                vidas--;
                estouradoBomba1 = true;
            }
            }

            //bomba 2 

            fill(255)
            distancia2 = int(dist(bomba2.x, bomba2.y, personagem.x, personagem.y));
            arr2 = distancia2 / 28;
            arr2 = parseFloat(arr2.toFixed(1));
            text("A distancia entre você e a bomba 2 é " + arr2 + " metros.       O código de desativação dela é: B.", 20, 60);

            if (distancia2 < 35 && !estouradoBomba2 && bombaDesativar < 2) {
                text("BOOMM!!!", 400, 15);
                vidas--;
                estouradoBomba2 = true;
            }
            else if (distancia2 >= 35) {
                estouradoBomba2 = false;
            }
            else if (bombaDesativar === 2) {
                pergunta = prompt("Digite o código de desativação");
                if (pergunta === resposta2) {
                    text("DESATIVOU A BOMBA 2!!!", 400, 15);
                    bombaDesativar++;
                } else {
                    vidas--;
                    estouradoBomba2 = true;
                }
            }
            else if (bombaDesativar < 2) {
                text("BOOMM!!!", 400, 15);
            }

            //bomba 3

            fill(255)
            distancia3 = int(dist(bomba3.x, bomba3.y, personagem.x, personagem.y));
            arr3 = distancia3 / 28;
            arr3 = parseFloat(arr3.toFixed(1));
            text("A distancia entre você e a bomba 3 é " + arr3 + " metros.       O código de desativação dela é: C", 20, 80);

            if (distancia3 < 35 && !estouradoBomba3 && bombaDesativar < 3){
                text("BOOMM!!!", 400, 15);
                vidas--;
                estouradoBomba3 = true;
            }
            else if (distancia3 >= 35){
                estouradoBomba3 = false;
            }
            else if (bombaDesativar === 3) {
                pergunta = prompt("Digite o código de desativação");
                if (pergunta === resposta3) {
                    text("DESATIVOU A BOMBA 3!!!", 400, 15);
                    bombaDesativar++; 
                } else {
                    vidas--;
                    estouradoBomba3 = true;
                }
            }
            else if (bombaDesativar < 3){
                text("BOOMM!!!", 400, 15);
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

            ellipse(inimigo1.x, inimigo1.y, 25, 25);
            rect(tiro1.x, tiro1.y, 12, 5);
            
            if (tiro1.x > 0) {
                tiro1.x -= 5;
            } else {
                tiro1.y = inimigo1.y;
                tiro1.x = inimigo1.x;
            }

            distanciaTiro1 = int(dist(tiro1.x, tiro1.y, personagem.x, personagem.y));

            if (distanciaTiro1 < 27.5 && !estouradoTiro1 && contTiro1 < 1) {
                text("BOOM!!!", 400, 15);
                vidas--;
                contTiro1++;
            }

            else if (distanciaTiro1 >= 27.5) {
                contTiro1 = 0;
            }

            ellipse(inimigo2.x, inimigo2.y, 25, 25);
            rect(tiro2.x, tiro2.y, 12, 5);

            if (tiro2.x > 0) {
                tiro2.x -= 5;
            } else {
                tiro2.y = inimigo2.y;
                tiro2.x = inimigo2.x;
            }

            distanciaTiro2 = int(dist(tiro2.x, tiro2.y, personagem.x, personagem.y));

            if (distanciaTiro2 < 27.5 && !estouradoTiro2 && contTiro2 < 1) {
                text("BOOM!!!", 400, 15);
                vidas--;
                contTiro2++;
            }

            else if (distanciaTiro2 >= 27.5) {
                contTiro2 = 0;
            }

            ellipse(inimigo3.x, inimigo3.y, 25, 25);
            rect(tiro3.x, tiro3.y, 12, 5);

            if (tiro3.x > 0) {
                tiro3.x -= 5;
            } else {
                tiro3.y = inimigo3.y;
                tiro3.x = inimigo3.x;
            }

            distanciaTiro3 = int(dist(tiro3.x, tiro3.y, personagem.x, personagem.y));

            if (distanciaTiro3 < 27.5 && !estouradoTiro3 && contTiro3 < 1) {
                text("BOOM!!!", 400, 15);
                vidas--;
                contTiro3++;
            }

            else if (distanciaTiro3 >= 27.5) {
                contTiro3 = 0;
            }

            ellipse(inimigo4.x, inimigo4.y, 25, 25);
            rect(tiro4.x, tiro4.y, 12, 5);

            if (tiro4.x > 0) {
                tiro4.x -= 5;
            } else {
                tiro4.y = inimigo4.y;
                tiro4.x = inimigo4.x;
            }

            distanciaTiro4 = int(dist(tiro4.x, tiro4.y, personagem.x, personagem.y));

            if (distanciaTiro4 < 27.5 && !estouradoTiro4 && contTiro4 < 1) {
                text("BOOM!!!", 400, 15);
                vidas--;
                contTiro4++;
            }

            else if (distanciaTiro4 >= 27.5) {
                contTiro4 = 0;
            }

            ellipse(inimigo5.x, inimigo5.y, 25, 25);
            rect(tiro5.x, tiro5.y, 12, 5);

            if (tiro5.x > 0) {
                tiro5.x -= 5;
            } else {
                tiro5.y = inimigo5.y;
                tiro5.x = inimigo5.x;
            }

            distanciaTiro5 = int(dist(tiro5.x, tiro5.y, personagem.x, personagem.y));

            if (distanciaTiro5 < 27.5 && !estouradoTiro5 && contTiro5 < 1) {
                text("BOOM!!!", 400, 15);
                vidas--;
                contTiro5++;
            }

            else if (distanciaTiro5 >= 27.5) {
                contTiro5 = 0;
            }

            // aviões
            // corrigir mortes múltiplas

            ellipse(aviao1.x, aviao1.y, 40, 40);

            if (aviao1.x < windowWidth) {
                aviao1.x += 9;   
            } else {
                aviao1.y = random(125, windowHeight / 2);
                aviao1.x = 20;
            }

            distanciaAviao1 = int(dist(aviao1.x, aviao1.y, personagem.x, personagem.y));

            if (distanciaAviao1 < 45 && !estouradoAviao1) {
                text("BOOM!!!", 400, 15);
                vidas--;
                estouradoAviao1 = true;
            }

            else if (distanciaAviao1 >= 45){
                estouradoAviao1 = false;
            }

            else {
                text("BOOM!!!", 400, 15);
            }

            ellipse(aviao2.x, aviao2.y, 40, 40);

            if (aviao2.x < windowWidth) {
                aviao2.x += 9;   
            } else {
                aviao2.y = random(windowHeight / 2, windowHeight);
                aviao2.x = 20;
                ellipse(aviao2.x, aviao2.y, 40, 40);
            }

            distanciaAviao2 = int(dist(aviao2.x, aviao2.y, personagem.x, personagem.y));

            if (distanciaAviao2 < 45 && !estouradoAviao2) {
                text("BOOM!!!", 400, 15);
                vidas--;
                estouradoAviao2 = true;
            }

            else if (distanciaAviao2 >= 45) {
                estouradoAviao2 = false;
            }

            else {
                text("BOOM!!!", 400, 15);
            }
            
            ellipse(aviao3.x, aviao3.y, 40, 40);

            if (aviao3.x < windowWidth) {
                aviao3.x += 9;   
            } else {
                aviao3.y = random(windowHeight / 2, windowHeight);
                aviao3.x = 20;
                ellipse(aviao3.x, aviao3.y, 40, 40);
            }

            distanciaAviao3 = int(dist(aviao3.x, aviao3.y, personagem.x, personagem.y));

            if (distanciaAviao3 < 45 && !estouradoAviao3) {
                text("BOOM!!!", 400, 15);
                vidas--;
                estouradoAviao3 = true;
            }

            else if (distanciaAviao3 >= 45) {
                estouradoAviao3 = false;
            }

            else {
                text("BOOM!!!", 400, 15);
            }

            // textos

            //tempo

            textSize(14); 
            fill(255); 
            text("Tempo: " + tempo + " segundos", 250, 15);

            if (posicao.x < 640) {
                posicao.x = posicao.x + 15;
            } else {
                tempo++;
                posicao.x = 0;
            }

            //vida

            textSize(14);  
            fill(255);
            text("Vidas: " + vidas , 100, 15)

            //pontos

            textSize(14);
            fill(255);
            text("Pontos: " + (bombaDesativar-1) , 10, 15);

            //bomba1

            distancia1 = int(dist(bomba1.x, bomba1.y, personagem.x, personagem.y));
            arr1 = distancia1 / 28;
            arr1 = parseFloat(arr1.toFixed(1));
            textSize(16);
            fill(255)
            text("A distancia entre você e a bomba 1 é " + arr1 + " metros.       O código de desativação dela é: A", 20, 40);

            if (distancia1 < 35 && bombaDesativar === 1) {
                pergunta = prompt("Digite o código de desativação");
            if (pergunta === resposta1) {
                text("DESATIVOU A BOMBA 1!!!", 400, 15);
                bombaDesativar++;
            } else {
                vidas--;
                estouradoBomba1 = true;
            }
            }

            //bomba 2 

            fill(255)
            distancia2 = int(dist(bomba2.x, bomba2.y, personagem.x, personagem.y));
            arr2 = distancia2 / 28;
            arr2 = parseFloat(arr2.toFixed(1));
            text("A distancia entre você e a bomba 2 é " + arr2 + " metros.       O código de desativação dela é: B.", 20, 60);

            if (distancia2 < 35 && !estouradoBomba2 && bombaDesativar < 2) {
                text("BOOMM!!!", 400, 15);
                vidas--;
                estouradoBomba2 = true;
            }
            else if (distancia2 >= 35) {
                estouradoBomba2 = false;
            }
            else if (bombaDesativar === 2) {
                pergunta = prompt("Digite o código de desativação");
                if (pergunta === resposta2) {
                    text("DESATIVOU A BOMBA 2!!!", 400, 15);
                    bombaDesativar++;
                } else {
                    vidas--;
                    estouradoBomba2 = true;
                }
            }
            else if (bombaDesativar < 2) {
                text("BOOMM!!!", 400, 15);
            }

            //bomba 3

            fill(255)
            distancia3 = int(dist(bomba3.x, bomba3.y, personagem.x, personagem.y));
            arr3 = distancia3 / 28;
            arr3 = parseFloat(arr3.toFixed(1));
            text("A distancia entre você e a bomba 3 é " + arr3 + " metros.       O código de desativação dela é: C", 20, 80);

            if (distancia3 < 35 && !estouradoBomba3 && bombaDesativar < 3){
                text("BOOMM!!!", 400, 15);
                vidas--;
                estouradoBomba3 = true;
            }
            else if (distancia3 >= 35){
                estouradoBomba3 = false;
            }
            else if (bombaDesativar === 3) {
                pergunta = prompt("Digite o código de desativação");
                if (pergunta === resposta3) {
                    text("DESATIVOU A BOMBA 4!!!", 400, 15);
                    bombaDesativar++; 
                } else {
                    vidas--;
                    estouradoBomba3 = true;
                }
            }
            else if (bombaDesativar < 3){
                text("BOOMM!!!", 400, 15);
            }

            // bomba 4

            fill(255)
            distancia4 = int(dist(bomba4.x, bomba4.y, personagem.x, personagem.y));
            arr4 = distancia4 / 28;
            arr4 = parseFloat(arr4.toFixed(1));
            text("A distancia entre você e a bomba 4 é " + arr4 + " metros.       O código de desativação dela é: D", 20, 100);

            if (distancia4 < 35 && !estouradoBomba4 && bombaDesativar < 4) {
                text("BOOMM!!!", 400, 15);
                vidas--;
                estouradoBomba4 = true;
            }
            else if (distancia4 >= 35) {
                estouradoBomba4 = false;
            }
            else if (bombaDesativar === 4) {
                pergunta = prompt("Digite o código de desativação");
                if (pergunta === resposta4) {
                    text("DESATIVOU A BOMBA 4!!!", 400, 15);
                    bombaDesativar++; 
                } else {
                    vidas--;
                    estouradoBomba4 = true;
                }
            }
            else if (bombaDesativar < 4) {
                text("BOOMM!!!", 400, 15);
            }

            // bomba 5

            fill(255)
            distancia5 = int(dist(bomba5.x, bomba5.y, personagem.x, personagem.y));
            arr5 = distancia5 / 28;
            arr5 = parseFloat(arr5.toFixed(1));
            text("A distancia entre você e a bomba 5 é " + arr5 + " metros.       O código de desativação dela é: E", 20, 120);

            if (distancia5 < 35 && !estouradoBomba5 && bombaDesativar < 5){
                text("BOOMM!!!", 400, 15);
                vidas--;
                estouradoBomba5 = true;
            }
            else if (distancia5 >= 35) {
                estouradoBomba5 = false;
            }
            else if (bombaDesativar === 5) {
                pergunta = prompt("Digite o código de desativação");
                if (pergunta === resposta5) {
                    text("DESATIVOU A BOMBA 5!!!", 400, 15);
                    bombaDesativar++; 
                } else {
                    vidas--;
                    estouradoBomba5 = true;
                }
            }
            else if (bombaDesativar < 5) {
                text("BOOMM!!!", 400, 15);
            }

            fill(255)
            distancia6 = int(dist(bomba6.x, bomba6.y, personagem.x, personagem.y));
            arr6 = distancia6 / 28;
            arr6 = parseFloat(arr6.toFixed(1));
            text("A distancia entre você e a bomba 6 é " + arr6 + " metros.       O código de desativação dela é: F", 20, 140);

            if (distancia6 < 35 && !estouradoBomba6 && bombaDesativar < 6) {
                text("BOOMM!!!", 400, 15);
                vidas--;
                estouradoBomba6 = true;
            }
            else if (distancia6 >= 35) {
                estouradoBomba6 = false;
            }
            else if (bombaDesativar === 6) {
                pergunta = prompt("Digite o código de desativação");
                if (pergunta === resposta6) {
                    text("DESATIVOU A BOMBA 6!!!", 400, 15);
                    bombaDesativar++; 
                } else {
                    vidas--;
                    estouradoBomba6 = true;
                }
            }
            else if (bombaDesativar < 6) {
                text("BOOMM!!!", 400, 15);
            }

            rect(chegada.x, chegada.y, 50, 20);
            distanciaChegada = int(dist(chegada.x, chegada.y, personagem.x, personagem.y));

            if (distanciaChegada < 30) {
                verificaChegada = true;
            }
        }
    }

} 