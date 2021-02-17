
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var box1,box2,box3,box4;
var ground;

function setup() {
	createCanvas(1600,700);

	

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	dustBin = new dustbin(1200,650);
	paperObject = new Paper(200,450,40);
    grownd = new Ground(width/2, 670,width,20);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  
  text("Ishwaak Saraogi",100,100)
  
  dustBin.display();
  paperObject.display();
  grownd.display();




  drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:85,y:-85});
	}
}

