function setup() {
	createCanvas(800, 800);
	background(35,46,209);
	colorMode(RGB, 255);
	
	// blue lines
	for (let i = 0; i < random(3, 10); i++) {
	  stroke(137, 210, 220);
	  fill(137, 210, 220);
	  beginShape();
	  vertex(-800, 800);
	  vertex(random(-800, 800), random(-800, 800));
	  vertex(random(-800, 800), random(-800, 800));
	  vertex(random(-800, 800), random(-800, 800));
	  endShape(CLOSE);
	}
	
	// pink lines
	for (let i = 0; i < random(3, 20); i++) {
	  stroke(243, 116, 174);
	  fill(243, 116, 174);
	  strokeWeight(random(5, 10));
	  beginShape();
	  vertex(800, -800);
	  vertex(random(-800, 800), random(-800, 800));
	  vertex(random(-800, 800), random(-800, 800));
	  vertex(random(-800, 800), random(-800, 800));
	  endShape(CLOSE);
	}
	
	// green lines
	stroke(194, 232, 18);
	for (let i = 0; i < random(50, 100); i++) {
	  line(-800, 0, random(-800, 800), random(-800, 800));
	}
	
	// orange circles
	noStroke();
	for (let i = 0; i < random(5, 10); i++) {
	  fill(252, 159, 91);
	  let size = random(100, 200);
	  ellipse(random(-800, 800), random(-800, 800), size, size);
	}
	stroke(252, 159, 91);
	strokeWeight(1);
	for (let i = 0; i < random(40, 100); i++) {
	  let size = random(1, 5);
	  ellipse(random(-800, 800), random(-800, 800), size, size);
	}
	
	// blue circles
	stroke(35, 46, 209);
	for (let i = 0; i < random(2, 6); i++) {
	  fill(35, 46, 209);
	  let size = random(100, 200);
	  ellipse(random(-800, 800), random(-800, 800), size, size);
	}
  }
  
  function draw() {
	
  }