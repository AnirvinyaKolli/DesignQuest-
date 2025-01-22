class CarSelectorScreen extends Screen {

    //Next screen button
    static nextButton;

    //Constraints for button
    static buttonHeight = 175;
    static buttonWidth = 100;

    //List of buttons
    static possibleButtons = [];

    //Information box
    static carInfoBox;

    static initializeScreen() {
        
        //Init next button
        CarSelectorScreen.nextButton = new NextScreenButton(PreDrivingScreen);

        //Init info box 
        CarSelectorScreen.carInfoBox = new CarInfoBox();

        //Get positions for the buttons
        const locs = CarSelectorScreen.getButtonSpacing(3);
    
    
        //Init the posible buttons list 
        CarSelectorScreen.possibleButtons = [
            new CarChoiceButton(
                locs[0],
                height / 2 - this.buttonHeight / 2 - 200,
                CarSelectorScreen.buttonWidth,
                CarSelectorScreen.buttonHeight,
                new Car(
                    loadImage("assets/images/carMiniGame/drivingGame/greenCarDrivingSprite.png"),
                    loadImage("assets/images/carMiniGame/carSelector/greenCarDisplaySprite.png"),
                    "Green\nIDEK ANYMORE!!!\nWOOO!"
                )
            ),
            new CarChoiceButton(
                locs[1],
                height / 2 - this.buttonHeight / 2 - 200,
                CarSelectorScreen.buttonWidth,
                CarSelectorScreen.buttonHeight,
                new Car(
                    loadImage("assets/images/carMiniGame/drivingGame/blueCarDrivingSprite.png"),
                    loadImage("assets/images/carMiniGame/carSelector/blueCarDisplaySprite.png"),
                    "Blue\nSUPER CAR!!!"
                )
            ),
            new CarChoiceButton(
                locs[2],
                height / 2 - this.buttonHeight / 2 - 200,
                CarSelectorScreen.buttonWidth,
                CarSelectorScreen.buttonHeight,
                new Car(
                    loadImage("assets/images/carMiniGame/drivingGame/redCarDrivingSprite.png"),
                    loadImage("assets/images/carMiniGame/carSelector/redCarDisplaySprite.png"),
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
    }

    static getButtonSpacing(buttonAmount){

        const buttonWidth = CarSelectorScreen.buttonWidth; 
        const spacing = 50; 
        const totalButtonWidth = buttonAmount * buttonWidth + (buttonAmount - 1) * spacing;
        const startX = (width - totalButtonWidth) / 2;

        let locs = [];
        for (let index = 0; index < buttonAmount; index++) {
            locs.push(startX + index * (buttonWidth + spacing));
        }

        return locs;
    }
}