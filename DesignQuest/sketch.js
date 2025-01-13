function setup() {
  createCanvas(windowWidth, windowHeight);
  CarSelectorScreen.initializeItems();
}

function draw() {
  switch (gameStates){
    case "CarSelector": 
      CarSelectorScreen.drawScreen();
      break;
    case "HomeScreen":
      HomeScreen.drawScreen();
  }
}
