let x
let y
let z
var canvas


// function windowResized() { 

//   resizeCanvas(windowWidth,windowHeight)
//   if(windowWidth < 450) {
//     size = 10;
// } else {
//     size = 100;
// }
  
// }
function setup() {
 canvas= createCanvas(windowWidth, windowHeight);
 canvas.position(300,300);
background(random(0,255), random(0,255), random(0,255));
resizeCanvas(windowWidth,windowHeight);
if(windowWidth < 480) {
  size = 10;
} else {
  size = 100;
}
  
}


function draw(){
  
  x=random(0,width)
  y=random(0,height)
  z=random(10,60)
  rect(x,y,z,z)
 fill(random(0,255), random(0,255), random(0,255),100)
 stroke(0);
// stroke(random(150,255), random(150,255), random(150,255))
  

}




