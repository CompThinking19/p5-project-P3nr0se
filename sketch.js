function setup() {
  createCanvas(400, 400);
  strokeWeight(5);
}

function draw() {
  stroke(0);
  if (mouseIsPressed === true) {
    line(mouseX, mouseY, pmouseX, pmouseY);
  }
  stroke(175, 100, 220)
      line(mouseX, mouseY, pmouseX, pmouseY);
  }
}
