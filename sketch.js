var wall, thickness;
var speed, weight, bullet;

function setup() {
  createCanvas(1600,400);
  thickness=random(22, 83);
  speed=random(223, 321);
  weight=random(30, 52);
  
  bullet=createSprite(50, 200, 50, 50);
  bullet.velocityX=speed;
  bullet.shapeColor="white";

  wall=createSprite(1200, 200, thickness, height/2);
  wall.shapeColor=color(80, 80, 80);
  
}

function draw() {
  background("gray"); 
  if (function hasCollided(bullet, wall)
  {
    bullet.velocityX=0;
    var damage=0.5*weight*speed*speed/(thickness*thickness*thickness);

    if (damage>10){
      wall.shapeColor=color("red");
    }

    if (damage<10){
      wall.shapeColor=color("green");
    }
  })

  if (wall.x-bullet.x<(bullet.width+wall.width/2)){
    bullet.velocityX=0;
    var deformation=0.5*weight*speed*speed/22509;
    if (deformation>180){
      bullet.shapeColor=color(255, 0, 0); //red
    }
    if (deformation<100){
      bullet.shapeColor=color(0, 255, 0); //green
    }
  }


  drawSprites();
}

function hasCollided(bullet, wall){
  bulletRightEdge=bullet.x+bullet.width;
  wallleftEdge=wall.x;
  if (bullet.RightEdge>=wall.LeftEdge){
    return true
  }
  return false;
}

