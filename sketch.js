
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint =Matter.Constraint

var ground, tree,treeImg,ground2,box1,ground3,ground4,ground5,ground6,line1;
var   mango1,tree1;
var engine, world;
var particles=[];
var line=[];
var plinkos=[];
var lineHeight= 300;
function preload()
{

}

function setup() {
	engine = Engine.create();
	world = engine.world;
	Engine.run(engine);

	createCanvas(480, 700);
	rectMode(CENTER);


	groundSprite=createSprite(width/2, 695, 480,10);
	groundSprite.shapeColor=color("green")

	ground = Bodies.rectangle(width/2, 695, 480,10 , {isStatic:true} );
 	World.add(world, ground);

  ground2=createSprite(5, height/2, 10,700);
  ground2.shapeColor=color("green")
 
  ground2 = Bodies.rectangle(5, height/2, 10,700 , {isStatic:true} );
  World.add(world, ground2);
 
  ground3=createSprite(width/2, 5, 480,10);
	ground3.shapeColor=color("green")

	ground3 = Bodies.rectangle(width/2, 5, 480,10 , {isStatic:true} );
  World.add(world, ground3);
   
  ground4=createSprite(475, height/2, 10,680);
  ground4.shapeColor=color("green")
 
  ground4 = Bodies.rectangle(475, height/2, 10,680 , {isStatic:true} );
  World.add(world, ground4);
  
 line1=new Line(240,685,680,10);

 division1=new Division(0,550,10,300);

}


function draw() {
Engine.update(engine);
  rectMode(CENTER);
  background(0);
  line1.display();
  division1.display();
  drawSprites();
 
}



