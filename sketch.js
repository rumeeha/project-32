const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body=Matter.Body;
const Constraint=Matter.Constraint;

var engine, world;
var score = 0;


function setup(){
    createCanvas(2400,800);
    engine = Engine.create();
    world = engine.world;
    Engine.run(engine);

     ground1=new Ground(1170,700,500,20);
     ground2=new Ground(1850,500,350,20);

     //ground1
     //level 4
     block1=new Block(1250,680,50,70);
     block2=new Block(1230,680,50,70);
     block3=new Block(1210,680,50,70);
     block4=new Block(1200,680,50,70);
     block5=new Block(1155,680,50,70);
     block6=new Block(1060,680,50,70);
     block7=new Block(1050,680,50,70);

     //level 3
    block8=new Block(1230,650,50,70);
    block9=new Block(1210,650,50,70);
    block10=new Block(1200,650,50,70);
    block11=new Block(1155,650,50,70);
    block12=new Block(1070,650,50,70);

    //level 2
    block13=new Block(1170,600,50,70);
    block14=new Block(1150,600,50,70);
    block15=new Block(1200,600,50,70);

    //level1
    block16=new Block(1170,580,50,70);

    //ground2
    //level 3
    block17=new Block(1900,480,50,70);
    block18=new Block(1890,480,50,70);
    block19=new Block(1860,480,50,70);
    block20=new Block(1830,480,50,70);
    block21=new Block(1800,480,50,70);

    //level 2
    block22=new Block(1890,460,50,70);
    block23=new Block(1860,460,50,70);
    block24=new Block(1830,460,50,70);

    //level 1
    block25=new Block(1860,430,50,70);

    polygon=new Polygon(100,100,40)
    
    SlingShot=new slingshot(polygon.body,{x:200,y:400})

}


function draw(){
    background("rgb(56,44,44)");
    
   //  if(background)
       // background(background);
    
      
       noStroke();
       textSize(35)
       fill("white")
       text("SCORE  " + score, 750, 50)

    Engine.update(engine);
   
    ground1.display();
    ground2.display();
    block1.display();
    block2.display();
    block3.display();
    block4.display();
    block5.display();
    block6.display();
    block7.display();
    block8.display();
    block9.display();
    block10.display();
    block11.display();
    block12.display();
    block13.display();
    block14.display();
    block15.display();
    block16.display();
    block17.display();
    block18.display();
    block19.display();
    block20.display();
    block21.display();
    block22.display();
    block23.display();
    block24.display();
    block25.display();
    SlingShot.display();
    polygon.display();

    block1.score();
    block2.score();
    block3.score();
    block4.score();
    block5.score();
    block6.score();
    block7.score();
    block8.score();
    block9.score();
    block10.score();
    block11.score();
    block12.score();
    block13.score();
    block14.score();
    block15.score();
    block16.score();
    block17.score();
    block18.score();
    block19.score();
    block20.score();
    block21.score();
    block22.score();
    block23.score();
    block24.score();
    block25.score();

    drawSprites();

}

function mouseDragged(){
    Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
  }
  
  
  function mouseReleased(){
     SlingShot.fly();
  }

  
function keyPressed(){
  if(keyCode === 32){
     SlingShot.attach(polygon.body);
  }
}

