class CarSelectorScreen extends Screen {

    //Next screen button
    static nextButton;

    //Constraints for button
    static buttonHeight = 350;
    static buttonWidth = 200;

    //List of buttons
    static possibleButtons = [];

    //Information box
    static carInfoBox;

    static initializeScreen() {
        //Init next button
        CarSelectorScreen.nextButton = new NextScreenButton(PreDrivingScreen);

        //Init info box 
        CarSelectorScreen.carInfoBox = new CarInfoBox();

        //Init the posible buttons list 
        CarSelectorScreen.possibleButtons = [
            new CarChoiceButton(
                width / 2 - this.buttonWidth / 2,
                height / 2 - this.buttonHeight / 2 - 200,
                CarSelectorScreen.buttonWidth,
                CarSelectorScreen.buttonHeight,
                new Car(
                    loadImage("assets/images/2.png"),
                    loadImage("assets/images/2.png"),
                    "Green\nIDEK ANYMORE!!!\nWOOO!"
                )
            ),
            new CarChoiceButton(
                width / 2 + 200,
                height / 2 - this.buttonHeight / 2 - 200,
                CarSelectorScreen.buttonWidth,
                CarSelectorScreen.buttonHeight,
                new Car(
                    loadImage("assets/images/2.png"),
                    loadImage("assets/images/2.png"),
                    "Blue\nSUPER CAR!!!"
                )
            ),
            new CarChoiceButton(
                width / 2 - 400,
                height / 2 - this.buttonHeight / 2 - 200,
                CarSelectorScreen.buttonWidth,
                CarSelectorScreen.buttonHeight,
                new Car(
                    loadImage("assets/images/2.png"),
                    loadImage("assets/images/2.png"),
                    "Red\nCRASH OUT TIME!!!"
                )
            ),
        ];
    }

    static drawScreen() {
        //Bacground 
        background(220);

        //Draws info box if car chosen 
        if (chosenCar) {
            CarSelectorScreen.carInfoBox.drawBox(chosenCar);
            CarSelectorScreen.nextButton.canGoNext = true; 
        }else{
            CarSelectorScreen.nextButton.canGoNext = false; 
        }

        //Draws the list of buttons 
        CarSelectorScreen.possibleButtons.forEach(function (button) {
            button.drawButton();
        });

        //Draws next button
        CarSelectorScreen.nextButton.drawButton();
        console.log(CarSelectorScreen.nextButton.canGoNext)
    }
}