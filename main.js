img = "";
rightwristX = 0;
rightWristY = 0;


function preload()
{
  img = loadImage("https://s3-whjr-curriculum-uploads.whjr.online/b0b2ac92-8068-42fe-9749-3b5e6d3784cf.png");
}

function setup() {
  createCanvas(650, 400);
}

function draw() {
  background("#D3D3D3");
  image(img,paddleX, paddleY, 40,70);
}


