function setup() {
  createCanvas (640, 480)
  }

function draw() {
    if (mouseIsPressed) {
    fill (0,255,0);}
        else {
    fill (255,0,0);}
rect (mouseX, mouseY, 50,50)
      if (mouseIsPressed){
          rotate (pi/4);}
}