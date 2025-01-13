class CarSelectorScreen {
    static buttonHeight = 350;
    static buttonWidth = 200;
    static possibleButtons = []; 
  
    static initializeItems() {
        console.log(width+":"+height)
        CarSelectorScreen.possibleButtons = [
            new CarChoiceButton(
                width / 2 - this.buttonWidth/2,
                height / 2 - this.buttonHeight/2 -200,
                CarSelectorScreen.buttonWidth,
                CarSelectorScreen.buttonHeight,
                new Car(
                    loadImage("assets/images/2.png"),
                    loadImage("assets/images/2.png"),
                    "Green"
                )
            ),
            new CarChoiceButton(
                width / 2 + 200,
                height / 2 - this.buttonHeight/2 -200,
                CarSelectorScreen.buttonWidth,
                CarSelectorScreen.buttonHeight,
                new Car(
                    loadImage("assets/images/2.png"),
                    loadImage("assets/images/2.png"),
                    "Blue"
                )
            ),
            new CarChoiceButton(
                width / 2 - 400,
                height / 2 - this.buttonHeight/2 -200,
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