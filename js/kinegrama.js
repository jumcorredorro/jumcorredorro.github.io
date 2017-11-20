function preload() {
  img0=loadImage("assets/b0.gif")
  img1=loadImage("assets/b1.gif")
  img2=loadImage("assets/b2.gif")
  img3=loadImage("assets/b3.gif");
}

function setup() {
  createCanvas(600,600);
}

var contador = -100;
function draw() {
  img0.loadPixels();
  img1.loadPixels();
  img2.loadPixels();
  img3.loadPixels();
  //image(img0, 0, 0);
  loadPixels();
  for (var i = 0; i < 4* img0.height * img0.width; i+=4) {
      // loop over
      if (((i/4)%12)<3)
        aux=img0;
      else if (((i/4)%12)<6)
        aux=img1;
      else if (((i/4)%12)<9)
        aux=img2;
      else
        aux=img3;
      pixels[i] = aux.pixels[i];
      pixels[i+1] = aux.pixels[i+1];
      pixels[i+2] = aux.pixels[i+2];
      pixels[i+3] = aux.pixels[i+3];
  }
  updatePixels();
  contador++;
  for(var j=0;j<1200;j+=12){
    fill(0);
    rect(contador+j,0,8,600);
  }
  if(contador >= 700)
    contador = -100;
}
