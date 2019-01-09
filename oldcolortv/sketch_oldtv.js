var capture;
var nx = 72;
var ny = 48;
var tile;
var index;
var colour;
var greyscale;
var trans;
var mode = 0;
var count = 0;
var framecount = 0;

function preload(){
	capture = createCapture(VIDEO);
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  colorMode(RGB);
  clear();
	noStroke();
  frameRate(24);
  capture.size(2*nx, 2*ny);
  capture.hide();
  background(0);
  capture.loadPixels();

  if(windowWidth/nx < windowHeight/ny){
    tile = windowWidth/nx;
	}
	else{
		tile = windowHeight/ny;
	}
  trans = (windowWidth-nx*tile)*0.5;
  console.log(nx, ny, tile, trans);
}

function draw() {
  background(0);
  framecount = framecount + 0.25;
  for(var i = 0; i < nx; i++){
    for(var j = 0; j < ny; j++){
      colorMode(RGB);
      colour = color(capture.get(i, j));
      greyscale = round(red(colour)*0.222+green(colour)*0.707+blue(colour)*0.071);
      rectMode(CORNER);
      rect(tile*i+trans, tile*(j), tile/3, tile);
      fill(red(colour), 0, 0);
      rect(tile*i+trans+tile/3, tile*(j), tile/3, tile);
      fill(0, green(colour), 0);
      rect(tile*i+trans+(2*tile/3), tile*(j), tile/3, tile);
      fill(0, 0, blue(colour));
    }
  }
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}
