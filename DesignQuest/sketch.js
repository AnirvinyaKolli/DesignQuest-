function preload(){

  //Loading global assets
  blockyFont = loadFont("assets/fonts/DotGothic16-Regular.ttf");

  //TEST CAR 
  testCar = new Car(
    loadImage("assets/images/carMiniGame/drivingGame/greenCarDrivingSprite.png"),
    loadImage("assets/images/carMiniGame/carSelector/greenCarDisplaySprite.png"),
    "Green\nIDEK ANYMORE!!!\nWOOO!" 
  ); 
}

function setup() {

  
  //Set font
  textFont(blockyFont);
  textAlign(CENTER, CENTER);

  //Set game values 
  frameRate(60);
  createCanvas(1600, 900);

  //Print canvas sze 
  console.log(width + ":" + height);

  //Init screens 
  gameScreens.forEach((function (screen) {
    screen.initializeScreen();
  }));
}

function draw() {

  //Draw independent screens 
  gameState.drawScreen();
  handlePointLossMessages();
}

function handlePointLossMessages() {
  pointLossMessages.forEach(m => m.drawMessage());
  pointLossMessages.filter(m => m.checkNeeded());
}