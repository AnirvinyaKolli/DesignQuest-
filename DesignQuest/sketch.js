function setup() {

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