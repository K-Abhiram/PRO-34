//Create variables here
var dogImg, happyDog;
var hfoodS, hfoodStock;
var hdog;
var database; 

function preload()
{
  dogImg = loadImage("images/dogImg.png");
  happyDog = loadImage("images/dogImg1.png");
}

function setup() {

  database = firebase.database();
  createCanvas(800, 500);

  hdog = createSprite(250,250,20,20);
  hdog.addImage(dogImg);

  hfoodStock = database.ref("food");
  hfoodStock.on("value",readStock);
  
  
  
}


function draw() {  

  background(46, 139, 87);

  if(keyWentDown(UP_ARROW)){
    writeStock(hfoodS);
    hdog.addImage(happyDog);
  }

  drawSprites();
  //add styles here
  textSize(10);
  fill ("red");
  stroke (10);
  text(foodStock,100,50);
}

function readStock(data){
  foodS = data.val();
}

function writeStock(x){
  database.ref("/").update({
    food : x,
  })
}

