var rect1,rect2


function setup() {
  createCanvas(800,400);
 rect1= createSprite(400, 200, 50, 50);
 rect2=createSprite(300,200,50,100)
 rect1.shapeColor=("green")
 rect2.shapeColor=("green")
 rect1.debug=true
 rect2.debug=true

 rect1.velocityX=2
 rect1.velocityY=3
 rect2.velocityX=2
 rect2.velocityY=-2
 edges=createEdgeSprites()
}

function draw() {
  background(255,255,255); 
  if(isTouching(rect1,rect2)) 
 {

    rect1.shapeColor=("red")
    rect2.shapeColor=("red")
  }
    else{
    rect1.shapeColor=("green")
    rect2.shapeColor=("green")
    }
  rect1.bounceOff(edges)
  rect2.bounceOff(edges)

  bounceOff(rect1,rect2)
  drawSprites();
}
