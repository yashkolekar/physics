const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
var myWorld,myEngine,ground;
function setup() {
  createCanvas(400,400);
  //createSprite(400, 200, 50, 50);
  myEngine=Engine.create()
  myWorld=myEngine.world;
  var groundOptions={
isStatic:true

  }
  var ballOptions={
    restitution:1
  }
ground=Bodies.rectangle(200,390,400,5,groundOptions)
ball=Bodies.circle(200,200,30,ballOptions)
World.add(myWorld,ground)
World.add(myWorld,ball)
console.log(ground)
  
}

function draw() {
  background(255,255,255); 
  Engine.update(myEngine)
  ellipseMode(CENTER)
  ellipse(ball.position.x,ball.position.y,60,60)
  rectMode(CENTER)
  rect(ground.position.x,ground.position.y,400,5)
  drawSprites();
}