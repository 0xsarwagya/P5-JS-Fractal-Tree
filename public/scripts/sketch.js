let angle;
let length;
let start;

function setup() {
  createCanvas(600, 600);
  angle = radians(30);
  length = height / 4;
  start = createVector(width / 2, height);
}

function draw() {
  background(51);
  stroke(255);
  translate(start.x, start.y);

  angle = map(mouseX, 0, width, radians(-90), radians(90));
  branch(length);
}

function branch(len) {
  line(0, 0, 0, -len);
  translate(0, -len);

  if (len > 4) {
    push();
    rotate(angle);
    branch(len * 0.67);
    pop();

    push();
    rotate(-angle);
    branch(len * 0.67);
    pop();
  }
}
