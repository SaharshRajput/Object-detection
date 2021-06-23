img="";
status="";
function preload()
{
    img=loadImage("bottle.jpg");
}
function setup()
{
    canvas=createCanvas(640,420);
    canvas.center();
  
    objectDetector=ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status").innerHTML="Status : Detecting Objects";
}
function modelLoaded()
{
    console.log("Model is loaded");
    status= true;
    objectDetector.detect(img,gotResult);
    
}
function gotResult(error,results)
{
if(error)
{
console.error(error);
}
else{
    console.log(results);
}
}
function draw()
{
    image(img,0,0,640,420);
    
}