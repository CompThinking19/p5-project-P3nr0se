//Greetings! This software is intended to be used as a very basic paint tool.

var erasing = false


function setup() {
//Basic Canvas Set Up
  createCanvas(400, 400);
  strokeWeight(5);
//This creates a slider that can be used to adjust the color of the drawing tool.
  colorMode(HSB, 255);
  slider = createSlider(0, 255, 127);
}

function draw() {
//Defining the tool that is used to draw
  stroke(slider.value(), 255, 255);
  if (mouseIsPressed === true && erasing === false) {
    line(mouseX, mouseY, pmouseX, pmouseY);
  }
//Making an eraser tool
 if (mouseIsPressed === true && erasing === true) {
   stroke(255, 255, 255)
   line(mouseX, mouseY, pmouseX, pmouseY);
  }
}
