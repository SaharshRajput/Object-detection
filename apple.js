img="";
status="";
objects=[];
function preload()
{
    img=loadImage("apple.jpg");
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
    
    
}
function gotResult(error,results)
{
if(error)
{
console.error(error);
}
else{
    console.log(results);
    objects=results;
}
}
function draw()
{
    image(img,0,0,640,420);
    if(status != "")
    {
        r=random(255);
        g=random(255);
        b=random(255);
        objectDetector.detect(img,gotResult);
        
for(i=0;i<objects.length;i++)
{   
    document.getElementById("status").innerHTML="Status : Detecting Objects";
    document.getElementById("number_of_objects").innerHTML="There are 2 big object and CoCoSSD model have identified them.";
    fill(r,g,b);
    percent=floor(objects[i].confidence*100);
    text(objects[i].label+" "+percent+"%",objects[i].x+15,objects[i].y+15);
    noFill();
    stroke(r,g,b);
    rect(objects[i].x,objects[i].y,objects[i].width,objects[i].height); 
}
    }
}