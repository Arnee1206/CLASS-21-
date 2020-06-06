var fixRect;
var movingRect;


function setup() {

  createCanvas(800,400);
  fixRect = createSprite(400,200,50,80);
  movingRect = createSprite (400,400,50,80);
  fixRect.shapeColor = "green";
  movingRect.shapeColor = "red";

  fixRect.velocityY = 2;
  movingRect.velocityY = -2;


}

function draw() {
  background(0,0,0);  
  
  bounceOff(movingRect,fixRect);
  drawSprites();
}



