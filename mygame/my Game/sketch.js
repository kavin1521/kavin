var database;
var game,form1;
var gameState=0;
var playerCount;
var bg1img;

function preload(){
bg1img=loadImage("bg/bg1.jpg");
}

function setup(){
    var canvas = createCanvas(displayWidth-20,displayHeight-30);
    database=firebase.database();
    form1= new Form ();
    form1.display();
}

function draw(){
    background(0);
   
}