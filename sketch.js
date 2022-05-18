
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var g1,w1,w2;
var ball;

function preload()
{
	
}

function setup() {
	createCanvas(windowWidth,windowHeight);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
   g1 = new ground(800,500,3000,20)
   w1 = new ground(800,420,20,140)
   w2 = new ground(1000,420,20,140)
	Engine.run(engine);
    var ball_options ={
		restitution:0.7,
	    density:1.2
	  }
	ball = Bodies.circle(200,200,20,ball_options);
	World.add(world,ball);
	
	
	  rectMode(CENTER);
	  ellipseMode(RADIUS);
  
}


function draw() {
   background(0);
	rectMode(CENTER);
 Engine.update(engine)
  g1.show()
  w1.show()
  w2.show()
  ellipse(ball.position.x,ball.position.y,20,20)
 
 if(keyDown(UP_ARROW)){
	 force();
 }
 
 
  drawSprites();
}
function force(){
	Matter.Body.applyForce(ball,{x:0,y:0},{x:3,y:0})
  Matter.Body.applyForce(ball,{x:0,y:0},{x:0,y:-7})
}

 




