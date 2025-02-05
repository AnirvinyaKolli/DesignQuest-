function preload(){

  //Loading global assets
  blockyFont = loadFont("assets/fonts/DotGothic16-Regular.ttf");

}

function setup() {

  //Set font
  textFont(blockyFont);
  textAlign(CENTER, CENTER);

  //Set game values 
  frameRate(60);
  createCanvas(windowWidth, windowHeight);

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