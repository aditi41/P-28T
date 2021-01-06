
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var tree,treePic;

function preload()
{
	treePic = loadImage("tree.png")
}

function setup() {
	createCanvas(1250, 570);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	boy = new Boy(200,480);

	tree = new Tree(1000,300);

	stone = new Stone(0,0,100);
	slingshot = new Slingshot(stone.body,{x:120, y:400});

	mango1 = new Mango(1000,70,300);
	mango2 = new Mango(1000,200,100);
	mango3 = new Mango(1000,200,100);
	mango4 = new Mango(1000,200,100);
	mango5 = new Mango(1000,200,100);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  
  drawSprites();
  tree.display();
  stone.display();
  slingshot.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  boy.display();
  
}

function mouseDragged(){

    Matter.Body.setPosition(stone.body, {x:mouseX, y:mouseY});
}

function mouseReleased(){

	slingshot.fly();

}