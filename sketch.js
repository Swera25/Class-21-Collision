var fixedRect, movingRect;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  gameObject1 = createSprite(100,100,50,50);
  gameObject1.shapeColor = "lightgreen";
  gameObject2 = createSprite(200,100,50,50);
  gameObject2.shapeColor = "lightgreen";
  gameObject3 = createSprite(300,100,50,50);
  gameObject3.shapeColor = "lightgreen";
  gameObject4 = createSprite(400,100,50,50);
  gameObject4.shapeColor = "lightgreen";

}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if (isTouching(movingRect,gameObject2)) {
     
  movingRect.shapeColor = "red";
  fixedRect.shapeColor = "red";
  }
  else {

    movingRect.shapeColor = "green";
  fixedRect.shapeColor = "green";
  }

  drawSprites();
}
