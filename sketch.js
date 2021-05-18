const Engine = Matter.Engine;
const World = Matter.World;
const Bodies =  Matter.Bodies;
const Constraint = Matter.Constraint;
var bg,ground,gimg;
var santa,santaImg;
var ice=[];
var maxSnow=70;

function preload(){
  bg=loadImage("snow2.jpg");
  gimg=loadImage("ground.PNG");
  santaImg=loadImage("santa1.png");
}

function setup() {
  createCanvas(1300,600);
  
  engine=Engine.create();
  world= engine.world;


ground=createSprite(650,670);
ground.addImage(gimg);
ground.scale=3.2;


santa=createSprite(150,480);
santa.addImage(santaImg);
santa.scale=1.2;
santa.setCollider("rectangle",15, -20,100,180);


if(frameCount % 60 === 0){
  for(var i=0; i<maxSnow; i++){
  ice.push(new Snow(random(0,1350), random(0,50)));
  }
  }


}

function draw() {
  background(bg);  
  Engine.update(engine);

  santa.collide(ground);


  if(keyWentDown("space")&& santa.y >= 100) {
    santa.velocityY = -12;
}

//add gravity
santa.velocityY = santa.velocityY + 0.6

  for(var i = 0;i < maxSnow; i++){
    ice[i].display();
    ice[i].changePosition();
    }    
    


ground.display();

  
  drawSprites();

}