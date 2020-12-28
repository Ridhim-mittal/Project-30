const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var b1, b2, b3, b4, b5, b6, b6, b7, b8;
var b9, b10, b11, b12, b13, b14, b15, b16;
var b17, b18;
var pentagon, slinsghot, ground, base1, base2;
var mangoBodyPosition, stoneBodyPosition;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;


    ground = new Ground(600,690,1200,20);
    base1 = new Ground(990,255,190,15);
    base2 = new Ground(590,455,190,15);

    b1 = new Box(930,235,30,40);
    
    b2 = new Box(960,235,30,40);
    b3 = new Box(990,235,30,40);
    b4 = new Box(1020,235,30,40);
    b5 = new Box(1050,235,30,40);


    
    b6= new Box(960,195,30,40);
    b7 = new Box(990,195,30,40);
    b8 = new Box(1020,195,30,40);

    b9 = new Box(990,155,30,40);

    b10 = new Box(530,435,30,40)
    b11 = new Box(560,435,30,40);
    b12 = new Box(590,435,30,40);
    b13 = new Box(620,435,30,40);
    b14 = new Box(650,435,30,40);

    b15 = new Box(560,395,30,40);
    b16 = new Box(590,395,30,40);
    b17 = new Box(620,395,30,40);

    b18 = new Box(590,355,30,40);



	pentagon = new Pentagon(160,265);
	slingshot = new Slingshot(pentagon.body,{x:160,y:265});

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("lightgreen");
  Engine.update(engine);

  keyPressed();

  
  
fill("black");  
ground.display();

fill("yellow");
base1.display();
base2.display();
fill("pink");
b1.display();
b2.display();
b3.display();
b4.display();
b5.display();
fill("lightblue");
b6.display();
b7.display();
b8.display();
fill("orange");
b9.display();
fill("pink");
b10.display();
b11.display();
b12.display();
b13.display();
b14.display();
fill("lightblue")
b15.display();
b16.display();
b17.display();
fill("orange")
b18.display();

pentagon.display();
slingshot.display();





  drawSprites();
 
}

function mouseDragged(){
    Matter.Body.setPosition(pentagon.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}

function keyPressed(){
  if(keyCode === 32){
      slingshot.attach(pentagon.body);
  }
}

function mouseReleased(){
  slingshot.fly();
}


