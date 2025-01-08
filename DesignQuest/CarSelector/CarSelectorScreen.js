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
                new Car(
                    loadImage("assets/images/2.png"),
                    loadImage("assets/images/2.png"),
                    "Green"
                )
            ),
            new CarChoiceButton(
                width / 2 + 100,
                height / 2 - 50,
                CarSelectorScreen.buttonWidth,
                CarSelectorScreen.buttonHeight,
                new Car(
                    loadImage("assets/images/2.png"),
                    loadImage("assets/images/2.png"),
                    "Blue"
                )
            ),
            new CarChoiceButton(
                width / 2 - 200,
                height / 2 - 50,
                CarSelectorScreen.buttonWidth,
                CarSelectorScreen.buttonHeight,
                new Car(
                    loadImage("assets/images/2.png"),
                    loadImage("assets/images/2.png"),
                    "Red"
                )
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