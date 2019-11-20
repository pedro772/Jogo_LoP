//Declaração de variaveis
var personagem, posicao, aviao, bomba1, bomba2, bomba3, distancia1, distancia2, distancia3, distanciaAviao, inimigo1, inimigo2, tiro1, tiro2, distanciaTiro1, distanciaTiro2, contTiro1, contTiro2; 
var naTela = true, estourado1 = false, estourado2 = false, estourado3 = false, estourado4 = false, estourado5 = false; //colocar em forma de vetores na parte dois
var tempo, vidas, pergunta, bombaDesativar, estadoJogo, resposta1, resposta2, resposta3;

const ESTADOJOGO = {
    MENU : 0,
    FASE1 : 1,
    FASE2 : 2,
    FASE3 : 3,
    PAUSADO : 4,
    GAMEOVER : 5
};

// Transformar bombas em vetores | Respostas em vetores (códigos de desativação)
// definir um botão de desativamento futuramente

//funções

function parametros() {
    personagem = {x : 100, y : 125};
    posicao, aviao, bomba1, bomba2, bomba3, distancia1, distancia2, distancia3, distanciaAviao, inimigo1, inimigo2, tiro1, tiro2, distanciaTiro1, distanciaTiro2;
    contTiro1 = 0, contTiro2 = 0, tempo = 0, vidas = 3;
    naTela = true, estourado1 = false, estourado2 = false, estourado3 = false, estourado4 = false, estourado5 = false;
    pergunta, bombaDesativar, estadoJogo;
    resposta1 = "DucadoDeVarsóvia";
    resposta2 = "FaltaDeSuprimentos";
    resposta3 = "RetiradaDasTropas";
}

function setup() {
    parametros();
    estadoJogo = ESTADOJOGO.MENU;
    createCanvas(windowWidth, windowHeight);
    aviao = {x : 2, y : random(125, windowHeight)};
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

function draw() {
    if (estadoJogo === ESTADOJOGO.MENU) {
        background(0);
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
        if (keyIsDown(CONTROL)) {
            parametros();
            setup();
            estadoJogo = ESTADOJOGO.FASE1;
        }
    }

    if (estadoJogo === ESTADOJOGO.FASE1) {
    background(0);

    if (bombaDesativar > 3) {
	    fill(255); 
	    text("VOCÊ VENCEU!!!" , (windowWidth / 2), (windowHeight / 2));
    } 

    else {

        // personagem principal

        if (keyIsDown(LEFT_ARROW) && personagem.x > 25)
            personagem.x -= 5;

        if (keyIsDown(RIGHT_ARROW) && personagem.x< width-25)
            personagem.x += 5;

        if (keyIsDown(UP_ARROW) && personagem.y> 125)
            personagem.y -= 5;

        if (keyIsDown(DOWN_ARROW) && personagem.y < height-25)
            personagem.y += 5;

        fill(152, 245, 255);
        ellipse(personagem.x, personagem.y, 50, 50);
        fill(255);

        // inimigo e tiro

        ellipse(inimigo1.x, inimigo1.y, 25, 25);
        rect(tiro1.x, tiro1.y, 5, 12);
        
        if (tiro1.y > 0) {
            tiro1.y -= 7;
        } else {
            tiro1.y = inimigo1.y;
            tiro1.x = inimigo1.x;
        }

        distanciaTiro1 = int(dist(tiro1.x, tiro1.y, personagem.x, personagem.y));

        if (distanciaTiro1 < 27.5 && !estourado5 && contTiro1 < 1) {
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
            tiro2.y -= 7;
        } else {
            tiro2.y = inimigo2.y;
            tiro2.x = inimigo2.x;
        }

        distanciaTiro2 = int(dist(tiro2.x, tiro2.y, personagem.x, personagem.y));

        if (distanciaTiro2 < 27.5 && !estourado5 && contTiro2 < 1) {
            text("BOOM!!!", 400, 15);
            vidas--;
            contTiro2++;
        }

        else if (distanciaTiro2 >= 30) {
            contTiro2 = 0;
        }

        /*
        // avião 

        if(naTela) {
            aviao.x += 9;   
        } else {
            aviao.y = random(125, windowHeight); 
            aviao.x = 2;
            naTela = true;
        }

        if(aviao.x > windowWidth) {
            naTela = false;
        }

        ellipse(aviao.x, aviao.y, 40, 40);

        distanciaAviao = int(dist(aviao.x, aviao.y, personagem.x, personagem.y));

        if (distanciaAviao < 45 && !estourado4) {
	        text("BOOM!!!", 400, 15);
		    vidas--;
		    estourado4 = true;
        }

        else if (distanciaAviao >=45){
            estourado4 = false;
        }

        else {
            text("BOOM!!!", 400, 15);
        }
        */

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
        textSize(16);
        fill(255)
        text("A distancia entre você e a bomba 1 é " + distancia1 + " pixels.       O código de desativação dela é: DucadoDeVarsóvia", 20, 40);

        if (distancia1 < 35 && bombaDesativar === 1) {
		    pergunta = prompt("Digite o código de desativação");
		if (pergunta === resposta1) {
	        text("DESATIVOU A BOMBA 1!!!", 400, 15);
		    bombaDesativar++;
		} else {
		    vidas--;
		    estourado1 = true;
		}
        }

        //bomba 2 

        fill(255)
        distancia2 = int(dist(bomba2.x, bomba2.y, personagem.x, personagem.y));
        text("A distancia entre você e a bomba 2 é " + distancia2 + " pixels.       O código de desativação dela é: FaltaDeSuprimentos.", 20, 60);

        if (distancia2 < 35 && !estourado2 && bombaDesativar < 2) {
	        text("BOOMM!!!", 400, 15);
		    vidas--;
		    estourado2 = true;
        }
        else if (distancia2 >= 35) {
	        estourado2 = false;
        }
        else if (bombaDesativar === 2) {
            pergunta = prompt("Digite o código de desativação");
            if (pergunta === resposta2) {
	            text("DESATIVOU A BOMBA 2!!!", 400, 15);
                bombaDesativar++;
            }
        }
        else if (bombaDesativar < 2) {
	        text("BOOMM!!!", 400, 15);
        }

        //bomba 3

        fill(255)
        distancia3 = int(dist(bomba3.x, bomba3.y, personagem.x, personagem.y));
        text("A distancia entre você e a bomba 3 é " + distancia3 + " pixels.       O código de desativação dela é: RetiradaDasTropas", 20, 80);

        if (distancia3 < 35 && !estourado3 && bombaDesativar < 3){
	        text("BOOMM!!!", 400, 15);
		    vidas--;
		    estourado3 = true;
        }
        else if (distancia3 >=35){
	        estourado3 = false;
        }
        else if (bombaDesativar === 3) {
            pergunta = prompt("Digite o código de desativação");
            if (pergunta === resposta3) {
	            text("DESATIVOU A BOMBA 3!!!", 400, 15);
                bombaDesativar++; 
            }
        }
        else if (bombaDesativar < 3){
	        text("BOOMM!!!", 400, 15);
        }
  }
}
} 