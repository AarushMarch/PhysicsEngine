const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var myEngine,myWorld;
var ground, ball;

function setup() {

  createCanvas(800,400);

  myEngine = Engine.create();
  myWorld = myEngine.world;

 var ground_options={
     isStatic: true
  }

  var ball_options = {
    restitution: 1.0
  }
  
  ground = Bodies.rectangle(200,390,400,20,ground_options);
  World.add(myWorld,ground);

  ball = Bodies.circle(200, 100, 20,ball_options);
  World.add(myWorld, ball);

  console.log(ground);
  console.log(ground.type);
  console.log(ground.position.x)
  console.log(ground.position.y);
}

function draw() {
  background(205,205,255);  
  Engine.update(myEngine);
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,800,20);

  ellipseMode(RADIUS);
  ellipse(ball.position.x, ball.position.y, 20, 20);
}