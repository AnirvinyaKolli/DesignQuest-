class CarSelectorScreen {
    static buttonHeight = 200;
    static buttonWidth = 100;
    static possibleButtons = []; 
  
    static initializeButtons() {
        console.log(width+":"+height)
        CarSelectorScreen.possibleButtons = [
            new CarChoiceButton(
                width / 2 - 50,
                height / 2 - 50,
                CarSelectorScreen.buttonWidth,
                CarSelectorScreen.buttonHeight,
                loadImage("favicon.png")
            ),
            new CarChoiceButton(
                width / 2 + 100,
                height / 2 - 50,
                CarSelectorScreen.buttonWidth,
                CarSelectorScreen.buttonHeight,
                loadImage("favicon.png")
            ),
            new CarChoiceButton(
                width / 2 - 200,
                height / 2 - 50,
                CarSelectorScreen.buttonWidth,
                CarSelectorScreen.buttonHeight,
                loadImage("favicon.png")
            ),
        ];
    }
  
    static drawScreen() {
      background(220);
      CarSelectorScreen.possibleButtons.forEach(function (button) {
        button.drawButton();
        
      });
    }
  }