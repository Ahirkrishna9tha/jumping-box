var canvas;
var music;
var ball,block,block2,block3,block4;
function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
block= createSprite(80,600,50,80)
block2= createSprite(80,600,50,80);
block3= createSprite(80,600,50,80);
block4= createSprite(80,600,50,80);

    //create box sprite and give velocity
    ball= createSprite(random(20,750));
    ball.velocityX=0.5;
}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
  //add condition to check if box touching surface and make it box
  if(block2.isTouching (ball)){
ball.shapeColor=rgb(255,128,0);
ball.velocityX=0
music.stop();


  }
  drawSprites();
}
