function setup() {
  frameRate(60);
  createCanvas(windowWidth, windowHeight);
  gameScreens.forEach((function (screen){
    screen.initializeScreen();
  }));
}

function draw() {
  gameState.drawScreen();
  pointLossMessages.forEach(m => m.drawMessage()); 
  pointLossMessages.filter(m => m.checkNeeded());
}
