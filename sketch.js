var fixedRect, movingRect



function setup() {
  createCanvas(800,400);
  fixedRect = createSprite(400, 200, 70, 50);
  fixedRect.shapeColor = ("blue")
  movingRect = createSprite(300,200,70,50)
  movingRect.shapeColor = ("blue")

}

function draw() {
  background(255,255,255);  

movingRect.x = World.mouseX
movingRect.y = World.mouseY

console.log(movingRect.x - fixedRect.x)

if (movingRect.x - fixedRect.x < movingRect.width/2 + fixedRect.width/2 &&
  fixedRect.x - movingRect.x < movingRect.width/2 + fixedRect.width/2 &&
  movingRect.y - fixedRect.y < movingRect.height/2 + fixedRect.height/2 &&
  fixedRect.y - movingRect.y < movingRect.height/2 + fixedRect.height/2){
  fixedRect.shapeColor = ("red")
  movingRect.shapeColor = ("red")
} 
  else {
    fixedRect.shapeColor = ("blue")
    movingRect.shapeColor = ("blue")
  }
  drawSprites();
}