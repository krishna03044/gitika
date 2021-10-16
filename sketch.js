const Engine = Matter.Engine;
const Composite= Matter.Composite;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground, pumpkin, ghost1,ghost2,ghost3,ghost4,ghost5;
var bear1, bear2, log1, log2, log3, log4, backgroundImg;
var sling;
var state = "drag";
function preload(){
    backgroundImg = loadImage("./sprites/background.jpg");
}

function setup(){
    canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
    angleMode(RADIANS);

    ground = new Ground(width/2,height-10,width,20);
    ghost1 = new Ghost(700, 320);
    ghost2 = new Ghost(920, 320);
    bear1 = new Bear(810, 350);
    log1 = new Log(810, 260, 300, PI/2)
    
    ghost3 = new Ghost(700,240,70,70);
    ghost4 = new Ghost(920,240,70,70);
    bear2 = new Bear(810, 220);
    log2 =  new Log(810,180,300, PI/2);
    
    ghost5 = new Ghost(810,160,70,70);
    log3 = new Log(760,120,150, PI/7);
    log4 = new Log(870,120,150, -PI/7);

    pumpkin = new Pumpkin(100,100);
    sling = new Slingshot({x:200,y:160},pumpkin.body)
}

function draw(){
    background(backgroundImg);
    Engine.update(engine);

    ground.display();
    ghost1.display();
    ghost2.display();
    bear1.display();
    log1.display();

    ghost3.display();
    ghost4.display();
    bear2.display();
    log2.display();
    ghost5.display();
    log3.display();
    log4.display();

    pumpkin.display(state);
    sling.display();
}

function mouseDragged(){
    if(state === "drag"){
        Matter.Body.setPosition(pumpkin.body, {x:mouseX, y:mouseY});
    }
    
}

function mouseReleased(){
    sling.fly();
    state = "fly"
}
function keyPressed() {
    if(keyCode  === 32){
        sling.attach(pumpkin.body)
        state = "drag"
    }
    
}
