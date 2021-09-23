var fundo, gato, rato,
gatoimg1, gatoimg2, gatoimg3, ratoimg1, ratoimg2, ratoimg3;





function preload() {
    //carregue as imagens aqui
    fundo = loadImage("images/garden.png");
    gatoimg1 = loadAnimation("images/cat1.png");
    gatoimg2 = loadAnimation("images/cat2.png","images/cat3.png");
    gatoimg3 = loadAnimation("images/cat4.png");
    ratoimg1 = loadAnimation("images/mouse1.png");
    ratoimg2 = loadAnimation("images/mouse2.png","images/mouse3.png");
    ratoimg3 = loadAnimation("images/mouse4.png");
}

function setup(){
    createCanvas(1000,800);
    //crie os sprites de gato e rato aqui
    gato = createSprite(870,600)
    gato.addAnimation("gato1",gatoimg1)
    gato.scale = 0.2
    
    rato = createSprite(200,600)
    rato.addAnimation("rato1",ratoimg1)
    rato.scale = 0.15
    
}

function draw() {

    background(fundo);
    if(gato.x - rato.x < (gato.width - rato.width)/2){
       gato.velocityX = 0
       gato.addAnimation("gato3",gatoimg3)
       gato.x = 300
       gato.scale = 0.2
       gato.changeAnimation("gato3")
       rato.addAnimation("rato3",ratoimg3)
       rato.scale = 0.15
       rato.changeAnimation("rato3")
    }
    //Escreva a condição aqui para avaliar se o gato e o rato colidem
    drawSprites();
}


function keyPressed(){
    if(keyCode === LEFT_ARROW){
    gato.velocityX = -5
    gato.addAnimation("gato2",gatoimg2)
    gato.changeAnimation("gato2")
    rato.addAnimation("rato2",ratoimg2)
    rato.frameDelay = 25;
    rato.changeAnimation("rato2")
    }
  //Para mover e alterar a animação, escreva o código aqui


}
