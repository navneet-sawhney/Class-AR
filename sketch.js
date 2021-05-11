var movingRect;
var fixedRect;

function setup() {
  createCanvas(800,400);
  
  movingRect= createSprite(400, 200, 50, 100);
  fixedRect = createSprite(400, 100, 100, 50);
  movingRect.shapeColor = "red";
  fixedRect.shapeColor = "blue"
}

function draw() {
  background(255,255,255); 
  
  movingRect.x = mouseX;
  movingRect.y = mouseY;

  if(movingRect.x-fixedRect.x < (movingRect.width+fixedRect.width)/2 
  && fixedRect.x -movingRect.x <(movingRect.width+fixedRect.width)/2 ){
    movingRect.shapeColor = "yellow";
    fixedRect.shapeColor = "black"

  }

  else {
    movingRect.shapeColor = "red";
    fixedRect.shapeColor = "blue"
  }

  drawSprites();
}