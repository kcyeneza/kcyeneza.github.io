var i = 0;
var colorsPalette;

function setup() {
    colorsPalette = [color(146, 167, 202,30),
            color(186, 196, 219,30),
            color(118, 135, 172,30),
            color(76, 41, 81,30),
            color(144, 62, 92,30),
            color(178, 93, 119,30),
            color(215, 118, 136,30),
            color(246, 156, 164,30),];
  var width = 500;
  var height = 500;
  var canvas = createCanvas(width, height);

  canvas.parent('p5canvas');
  // createCanvas(800, 800);
  background(0,0);
  ellipseMode(CENTER);

}

function draw() {
  // rotate(20);
  fill(colorsPalette[floor(random(8))],100);
  stroke(colorsPalette[floor(random(8))],255);
  strokeWeight(0.5);
  arc(width/2,height/2,linesdata[i].outerRadius*2,linesdata[i].outerRadius*2,
      linesdata[i].startAngle,linesdata[i].endAngle,PIE)
  if(i<linesdata.length-1){
    i++;
  } else {
    noLoop();
  }

}




