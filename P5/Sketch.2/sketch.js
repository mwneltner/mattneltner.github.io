  var a = 1;
  var b = 1;
  var mode = 0;
  var recta = 0;
  var rectb = 0;
  var xpos = 0;
  var ypos = 0;
  var rgb;
   
  function setup(){
      createCanvas(1600,900);
      background(0);
      noFill();
      strokeWeight(1);
      rectMode(CORNERS);
  }
   
  function draw(){
   
      if (a > 2*width && a > 2*height){
          noLoop();
      }
   
      if (mode == 0){
          xpos -= ((b-a) / 2);
      }
   
      else if (mode == 1){
          ypos -= (b-a) / 2;
      }
   
      else if (mode == 2){
          xpos += (b-a) / 2;
      }
   
      else {
          ypos += (b-a) / 2;
      }
   
      rgb = getRGB();
      stroke(rgb[0], rgb[1], rgb[2]);
   
      translate(width / 2 + xpos, height / 2 + ypos);
      arc( 0 , 0 , b, b, mode* (PI / 2), (mode * PI / 2) + PI/2, PIE);
   
      temp = a;
      a = b;
      b = b + temp;
   
      mode+=1;
      mode%=4;
  }
   
  function getRGB(){
      var end = 0;
      while (end == 0){
          var r = random([0,127,255]);
          var g = random([0,127,255]);
          var b = random([0,127,255]);
   
          if (r+g+b > 0){end = 1;} 
      }
      return [r,g,b];
  }
