//Declaração de variaveis

var personagem = {x : 100, y : 125};
var posicao, aviao, bomba1, bomba2, bomba3, distancia1, distancia2, distancia3, distanciaAviao, inimigo, tiro, distanciaTiro;
var contTiro = 0;
var naTela = true;
var estourado1 = false, estourado2 = false, estourado3 = false, estourado4 = false, estourado5 = false; //colocar em forma de vetores na parte dois
var tempo = 0;
var pergunta;
var resposta = "Elisa";
var vidas = 3;
var bombaDesativar; 

//definir um botão de desativamento futuramente
//obs: declarar o soldaldo do mal 
//funções 

function setup() {
    createCanvas(windowWidth, windowHeight);
    aviao = {x : 2, y : random(125, windowHeight)};
    posicao = {x : 0, y : 200};
    bomba1 = {x : random(windowWidth), y : random(125, (windowHeight / 3))};
    bomba2 = {x : random(windowWidth), y : random((windowHeight / 3), ((windowHeight / 3) * 2))};
    bomba3 = {x : random(windowWidth), y : random(((windowHeight / 3) * 2), windowHeight)};
    bombaDesativar = 1;
    inimigo = {x : random(windowWidth), y : (windowHeight - 12.5)};
    tiro = {x : (inimigo.x - 2.5), y : (inimigo.y - 6)};
}

function draw() {
    background(255, 250, 250);
  
    if (vidas <= 0) {
	    fill(255); 
	    text("GAME OVER!!!" , (windowWidth / 2), (windowHeight / 2))
    }

    else if (bombaDesativar > 3) {
	    fill(255); 
	    text("VOCÊ VENCEU!!!" , (windowWidth / 2), (windowHeight / 2));
    } 
  
    else {
  
        //personagem principal
  
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

        ellipse(inimigo.x, inimigo.y, 25, 25);
        rect(tiro.x, tiro.y, 5, 12);

        if (tiro.y > 0) {
            tiro.y -= 7;
        } else {
            tiro.y = inimigo.y;
            tiro.x = inimigo.x;
        }

        distanciaTiro = int(dist(tiro.x, tiro.y, personagem.x, personagem.y));

        if (distanciaTiro < 27.5 && !estourado4 && contTiro < 1) {
            text("BOOM!!!", 400, 15);
            vidas--;
            contTiro++;
        }

        else if (distanciaTiro >= 30) {
            contTiro = 0;
        }

        else {
            text("BOOM!!!", 400, 15);
        }

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
  
  
        // textos
  
        //tempo

        textSize(14); 
        fill(255); 
        text("Tempo: " + tempo, 250, 15);
  
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
        textSize(20);
        fill(255)
        text("A distancia entre você e a bomba 1 é " + distancia1 + " pixels.", 20, 40);
  
        if (distancia1 < 35 && bombaDesativar === 1) {
		    pergunta = prompt("Para desativar esta bomba responda: quem é a menina mais linda do mundo?")
		if (pergunta === resposta) {
	        text("DESATIVOU A BOMBA 1!!!", 400, 15);
		    bombaDesativar++;
		} else {
		    vidas--;
		    estourado1 = true;
		}
        }
        estourado1 === false;
    
        //bomba 2 
  
        fill(255)
        distancia2 = int(dist(bomba2.x, bomba2.y, personagem.x, personagem.y));
        text("A distancia entre você e a bomba 2 é " + distancia2 + " pixels.", 20, 60);
  
        if (distancia2 < 35 && !estourado2 && bombaDesativar < 2) {
	        text("BOOMM!!!", 400, 15);
		    vidas--;
		    estourado2 = true;
        }
        else if (distancia2 >=35) {
	        estourado2 = false;
        }
        else if (bombaDesativar === 2) {
	        text("DESATIVOU A BOMBA 2!!!", 400, 15);
		    bombadesativar++;  
        }
        else if (bombaDesativar < 2) {
	        text("BOOMM!!!", 400, 15);
        }

        //bomba 3
 
        fill(255)
        distancia3 = int(dist(bomba3.x, bomba3.y, personagem.x, personagem.y));
        text("A distancia entre você e a bomba 3 é " + distancia3 + " pixels.", 20, 80);
  
        if (distancia3 < 35 && !estourado3 && bombaDesativar < 3){
	        text("BOOMM!!!", 400, 15);
		    vidas--;
		    estourado3 = true;
        }
        else if (distancia3 >=35){
	        estourado3 = false;
        }
        else if (bombaDesativar === 3){
	        text("DESATIVOU A BOMBA 3!!!", 400, 15);
		    bombaDesativar++;  
        }
        else if (bombaDesativar < 3){
	        text("BOOMM!!!", 400, 15);
        }
  }
}