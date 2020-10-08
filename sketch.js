const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;
var boyAnimation;
var Anime;

var umbrella;
var maxdrops=100;
var drops = [];

var first,second,third,fourth;

var n;

function preload(){
    boyAnimation = loadAnimation("images/Walking Frame/walking_1.png","images/Walking Frame/walking_2.png",
    "images/Walking Frame/walking_3.png","images/Walking Frame/walking_4.png","images/Walking Frame/walking_5.png",
    "images/Walking Frame/walking_6.png","images/Walking Frame/walking_7.png","images/Walking Frame/walking_8.png");

    first=loadImage("images/thunderbolt/1.png");
    second=loadImage("images/thunderbolt/2.png");
    third=loadImage("images/thunderbolt/3.png");
    fourth=loadImage("images/thunderbolt/4.png");
}

function setup(){
   createCanvas(1800,2250);
   engine = Engine.create();
   world =engine.world;

   umbrella = new Umbrella(width/2,1800);

   for(var i=0; i<maxdrops; i+=1){
        drops.push(new Drops(random(0,width),random(0,height)));
   }
   
   Engine.run(engine);
}

function draw(){
    imageMode(CENTER);
    Engine.update(engine);
    background(0);

    n=random(1,4);

    switch(n)
    {
        case 1:
            image(first,random(30,1770),100);
        break;
        case 2:
            image(second,random(30,1770),100);
        break;
        case 3:
            image(third,random(30,1770),100);
        break;
        case 4:
            image(fourth,random(30,1770),100);
        break;
    }

    umbrella.display();

    for(var i=0; i<maxdrops; i+=1){
        drops[i].display();
    }
    
}   

