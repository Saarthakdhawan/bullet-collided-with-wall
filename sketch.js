var wall,bullet,speed,weight,thickness;


function setup() {
  createCanvas(1600,400);
  bullet=createSprite(10, 200, 50, 20);
  speed=random(223,321);
  thickness=random(20,83);
  wall=createSprite(1500,200,thickness,100);
  bullet.velocityX=speed;
  weight=random(30,52);
}

function draw() {
  background(255,255,255);  
  if(hasCollided(wall,bullet)){
    bullet.velocityX=0;
    var d=0.5*weight*speed*speed/(thickness*thickness*thickness);
    if(d<10){
      wall.shapeColor="green";
    }
    
    if(d>10){
      wall.shapeColor="red";
    }
  }
  drawSprites();
}
function hasCollided(wall1,bullet1){
if(wall1.x-bullet1.x<bullet1.width/2+wall1.width/2){
  return true;
}
else{
  return false;
}
}