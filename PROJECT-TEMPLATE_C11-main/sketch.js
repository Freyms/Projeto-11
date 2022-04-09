var ship1,sea,cloud;
function preload(){
seaImg = ("sea.png");
shipImg1 = loadAnimation("ship-1.png");
}

function setup(){
  createCanvas(400,400);
  sea = createSprite(100,100,100,100);
  ship1 = createSprite(50,50,10,10);
  sea.addImage(seaImg);
}

function draw() {
  background("blue");
    drawSprites();

 
}
