function setup() {
  createCanvas(400, 400);
}

function draw() {
    background(255);
    noFill();
    
  for (var i=30; i<400; i+=10) {
    ellipse(width/2, height/2, i, i);
}
    
}
