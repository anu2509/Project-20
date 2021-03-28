var tom,jerry;

var tomImg1, tomImg2,jerryImg1,jerryImg2,jerryImg3;
var garden,gardenImg;

function preload() {
    //load the images here
    jerryImg1 = loadAnimation("images/mouse1.png");
    tomImg1 = loadAnimation("images/cat1.png");
    tomImg2 = loadAnimation("images/cat2.png","images/cat3.png");
    gardenImg = loadImage("images/garden.png");
    jerryImg2 = loadImage("images/mouse3.png");
    tomImg3 = loadImage("images/cat4.png")
    jerryImg3 = loadImage("images/mouse2.png");
}

function setup(){
    createCanvas(400,400);
    //create tom and jerry sprites here
    garden = createSprite(200,200,400,400);
    garden.addImage(gardenImg);

    tom = createSprite(320,330,20,50);
    tom.addAnimation("cat",tomImg1);
    tom.scale = 0.15;
    tom.depth = garden.depth + 1;
    tom.setCollider("circle",0,0,40);
    tom.debug = false;


    jerry = createSprite(50,330,20,50);
    jerry.addAnimation("mouse",jerryImg1);
    jerry.scale = 0.1;


        
}

function draw() {

    background(255);
    //Write condition here to evalute if tom and jerry collide
         
    if(tom.isTouching(jerry)){
       
        tom.velocityX = 0;
        tom.addAnimation("cat4",tomImg3)
        tom.changeAnimation("cat4");
        
        jerry.addAnimation("mse",jerryImg3);
        jerry.changeAnimation("mse")
    }
        keyPressed()


    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here

  if (keyWentDown("LEFT_ARROW")){
    tom.addAnimation("cat2",tomImg2);
    tom.changeAnimation("cat2");
    tom.velocityX = -2;

   jerry.addAnimation("mouse2",jerryImg2);
   jerry.changeAnimation("mouse2");

  }
}
                     