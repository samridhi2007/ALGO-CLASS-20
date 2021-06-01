var fixed, moving;

function setup() {
  createCanvas(1200,800);
  fixed = createSprite(400, 200, 50, 70);
  moving = createSprite(600, 200, 70, 50);

  fixed.debug = true;
  moving.debug = true;
  moving.velocityX = -2;
  fixed.velocityX = 2;
}

function draw() {
  background(0);  

  //moving.x = mouseX;
  //moving.y = mouseY;

  //DETECTING COLLISION ALGO
  if(moving.x - fixed.x <= fixed.width/2 + moving.width/2 
    && fixed.x - moving.x <= fixed.width/2 + moving.width/2
    && moving.y - fixed.y <= fixed.height/2 + moving.height/2 
    && fixed.y - moving.y <= fixed.height/2 + moving.height/2){
    moving.shapeColor = "red";
    fixed.shapeColor = "red";
  }
  else{
    moving.shapeColor = "green";
    fixed.shapeColor = "green";
  } 

  //BOUNCING OBJECT ALGO
  if (moving.x - fixed.x <= fixed.width/2 + moving.width/2 
    && fixed.x - moving.x <= fixed.width/2 + moving.width/2){
      moving.velocityX=(-1)*moving.velocityX;

      fixed.velocityX=(-1)*fixed.velocityX;

      
    }
    if (moving.y - fixed.y <= fixed.height/2 + moving.height/2 
      && fixed.y - moving.y <= fixed.width/2 + moving.height/2){
        moving.velocityY=(-1)*moving.velocityY;
  
        fixed.velocityY=(-1)*fixed.velocityY;
      }



  
  drawSprites();
}

/*
ALGORITHM
  - Process/Logic used to solve a problem
Computer Algo --> The instructions given to a computer to solve a problem

Pre-defined algo:
  1. Detecting collision between objects --> isTouching()
  2. Bouncing two objects together --> bounceOff() / bounce()
*/