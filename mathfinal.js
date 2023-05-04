function setup() {
	createCanvas(800, 800);
	background('black');
	colorMode(RGB, 255);
	
	// blue lines
	for (let i = 0; i < random(1000,2000); i++) {
	  stroke('pink');
	  fill('black');
	  beginShape();
	  vertex(-800, 800);
	  vertex(random(-800, 800), random(-800, 800));
	  vertex(random(-800, 800), random(-800, 800));
	  vertex(random(-800, 800), random(-800, 800));
	  endShape(CLOSE);
	}
	
	// pink lines
	for (let i = 0; i < random(1000,2000); i++) {
	  stroke('pink');
	  fill('black');
	  strokeWeight(random(2,5));
	  beginShape();
	  vertex(800, -800);
	  vertex(random(-800, 800), random(-800, 800));
	  vertex(random(-800, 800), random(-800, 800));
	  vertex(random(-800, 800), random(-800, 800));
	  endShape(CLOSE);
	}
	
	// green lines
	stroke('white');
	 strokeWeight(random(1,2));
	for (let i = 0; i < random(300, 500); i++) {
	  line(-800, 0, random(-800, 800), random(-800, 800));
	  vertex(800, -800);
	  vertex(random(-800, 800), random(-800, 800));
	  vertex(random(-800, 800), random(-800, 800));
	  vertex(random(-800, 800), random(-800, 800));
	}
	
	// orange circles
	stroke('black');
	for (let i = 0; i < random(4, 10); i++) {
	  fill('black');
	  let size = random(200, 400);
	  ellipse(random(-800, 800), random(-800, 800), size, size);
	  stroke('black');
	 strokeWeight(random(1,2));
	 line(-800, 0, random(-800, 800), random(-800, 800));
	  vertex(800, -800);
	  vertex(random(-800, 800), random(-800, 800));
	  vertex(random(-800, 800), random(-800, 800));
	  vertex(random(-800, 800), random(-800, 800));
	}
	stroke('dark grey');
	strokeWeight(1);
	for (let i = 0; i < random(40, 100); i++) {
	  let size = random(1, 5);
	  ellipse(random(-800, 800), random(-800, 800), size, size);
	}
	
	// blue circles
   
  }
  
  function draw() {
	
  }
  