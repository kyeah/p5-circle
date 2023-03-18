let font;

function preload() {
  font = loadFont("IBMPlexMono-Bold.otf");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(0);
  fill(255);
  circle(width/2, height/2, 100 + mouseX)
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}