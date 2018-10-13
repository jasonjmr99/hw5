function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  for (var i = 10; i <= 390; i = i + 10) {
    line(i, 200, 200, i);
  }
}

// got stuck on this,but came up with something else ?
