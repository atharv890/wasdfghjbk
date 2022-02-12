function setup(){
camera=createCapture(VIDEO);
camera.size(550,550);
canvas=createCanvas(500,500);
canvas.position(200,300);
library=ml5.posenet(camera,modelloaded);
library.on("pose",hi);
}
function draw(){
background("white");
}
function modelloaded(){
    console.log("Model is Loaded");
}
function on(results){
if(results){
    console.log(results);
}
}
