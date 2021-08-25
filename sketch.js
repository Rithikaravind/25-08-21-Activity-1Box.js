
var box1;
var box2;
function setup() {
  createCanvas(600, 400);
  box1 = new Box(150,200,25,25);
  box2 = new Box(200,100,50,75);
}

function draw() {
  background(200);
  box1.show();
  box2.changewidth(10);
  box2.show();

}

