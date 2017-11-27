function setup(){
  createCanvas(720, 480);
  strokeWeight(2);
  ellipseMode(RADIUS);}

  function draw(){
    background(204);

    // Neck
    stroke(102); // Set stroke to gray
    line(266, 257, 266, 162); // Left
    line(276,257,276,162); // Middle
    line(286,257,286,162);// Right 
    // Antennae
    line(276,155,246,112);// Small
    line(276,155,306,56);// Tall
    line(276,155,342,170);// Medium
    // Body
    noStroke();// Disable stroke
    fill(102);// Set fill to gray
    ellipse(264,377,33,33);// Antigravity orb
    fill(0);// Set fill to black
    rect(219,257,90,120);// Main body
    fill(102);// Set fill to gray
    rect(219,274,90,6);// Gray stripe
  }
