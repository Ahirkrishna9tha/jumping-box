var canvas;
var music;
var ball,block,block2,block3,block4;
function preload(){
music= loadSound("music.mp3")
}


function setup(){
    canvas = createCanvas(800,600);
edges=createEdgeSprites();
    //create 4 different surfaces
block= createSprite(490,600,175,80)
block2= createSprite(100,600,175,80);
block3= createSprite(300,600,175,80);
block4= createSprite(690,600,175,80);

block.shapeColor=("darkblue");
block2.shapeColor=("red");
block3.shapeColor=("yellow");
block4.shapeColor=("green");

    //create box sprite and give velocity
    ball= createSprite(random(20,700),100,10,10);
    ball.velocityX=4;
    ball.velocityY=-6;
    ball.shapeColor=rgb(255,128,0);
    
    
}

function draw() {
    background("black");
    //create edgeSprite
    
    ball.bounceOff(edges);
   
  //add condition to check if box touching surface and make it box
  if (block .isTouching(ball)) {
    ball.shapeColor=("black")
    ball.velocityX=0;
    ball.velocityY=-0;
    music.stop()
  }


    
  if (block2.isTouching(ball)&&ball.bounceOff(block2)) {
    ball.shapeColor=("red")
    music.play()
  }
  if (block3.isTouching(ball)&&ball.bounceOff(block3)) {
    ball.shapeColor=("yellow")
    music.play()
  }
  if (block4 .isTouching(ball)&&ball.bounceOff(block4)) {
    ball.shapeColor=("green")
    music.play()
  }

drawSprites();
}
