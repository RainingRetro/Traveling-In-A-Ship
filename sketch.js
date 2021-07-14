var sea, seaImg
var ship, shipImg1

function preload()
{ 
  seaImg = loadImage("sea.png");
  shipImg1 = loadAnimation("ship-1png", "ship-2.png", "ship-3.png", 
  "ship-4.png");
  
}

function setup()
{
  createCanvas(400,400);

  //create a ship sprite
  ship = createSprite(200,200,50,50);
  ship.addAnimation("swaying", shipImg1);

  //create a sea image
  sea = createSprite(400,400,100,100);
  sea.addImage(seaImg);
}

function draw() 
{
  background(seaImg);

  if(sea.x < 0){
    sea.x = sea.width/2;
  }

  drawSprites();
}