function setup() {
  createCanvas (640, 480)
  }
 
  
function draw() {
    if (mouseIsPressed) {
    fill (150,75,110, 175);}
        else {
    fill (110,75,125,155);}
    translate(580, 200);
    noStroke();
    for (var i = 0; i < 10; i ++) {
      ellipse(mouseX, mouseY, 20, 80);
      rotate(PI/5);}
    }