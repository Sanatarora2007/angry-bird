const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine,world,bodies;
var ground,ball;
var box1,box2,box3,box4,box5;
var pig1,pig2;
var log1,log2,log3,log4;
var bird,backgroundImage
var platform,slingShot
var bg="images/bg.png"
var score=0
var gameState="onSling"

function preload(){

    getTime();

}

function setup(){

    var canvas= createCanvas(1200,400);
    engine= Engine.create();
    world= engine.world;
    box1= new Box(700,320,70,70);
    box2= new Box(920,320,70,70);
    box3= new Box(700,240,70,70);
    box4= new Box(920,240,70,70);
    box5= new Box(810,160,70,70);
    pig1= new Pig(810,350,50,50);
    pig2= new Pig(810,230,50,50);
    ground= new Ground(600,390,1200,20);
    log1= new Log(810,260,20,300,PI/2);
    log2= new Log(810,180,20,300,PI/2);
    log3= new Log(760,120,20,150,PI/7);
    log4= new Log(870,120,20,150,-PI/7);
    bird= new Bird(200,50,50,50);
    platform =new Ground(150,305,300,170)
    slingShot= new SlingShot(bird.body,{x:200,y:50})
    

}

function draw(){

    if(backgroundImage){
        background(backgroundImage);
    }
    textSize(35)
    fill("white")
    text("Score "+score,width-300,50)
    Engine.update(engine);
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    pig1.display();
    pig1.score()
    pig2.display();
    pig2.score();
    log1.display();
    log2.display();
    log3.display();
    log4.display();
    ground.display();
    bird.display();
    platform.display();
    slingShot.display();

   

}
 
function mouseDragged(){
    if(gameState !== "launched" && bird.body.position.x<=200){
        console.log(bird.body.position.x)
    Matter.Body.setPosition(bird.body,{x:mouseX,y:mouseY});
    }
     
}
 function mouseReleased(){
     
    slingShot.fly();
    gameState="launched";
 }

 function keyPressed(){
     if(keyCode===32){

        bird.z=[];
        Matter.Body.setPosition(bird.body,{x:200,y:50})
        slingShot.attach(bird.body);

     }
 }

 async function getTime(){

    var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
    var jsonResponse = await response.json();
    var dateTime=jsonResponse.datetime;
    var hour=dateTime.slice(11,13)
    console.log(hour)
    if(hour>=06 && hour<=19){

        bg="images/bg.png"

    }
    else{
        bg="images/bg2.jpg"
    }
    backgroundImage=loadImage(bg)

 }
