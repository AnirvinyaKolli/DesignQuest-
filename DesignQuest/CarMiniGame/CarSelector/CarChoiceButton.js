class CarChoiceButton extends Button {
    constructor(x, y, width, height, car) {
        super(x, y, width, height,20);

        //Checks if cursor is hovering over
        this.hovering = false;        

        //Check wether some Car has chosen 
        this.chosen = false;

        //Sets given car 
        this.car = car;

        //Loads and set images 
        this.carSelectedButton = loadImage("assets/images/carMiniGame/carSelector/CarChoiceButtonSelected.png");
        this.buttonImage = loadImage("assets/images/carMiniGame/carSelector/CarChoiceButton.png");
        this.currentImage = this.buttonImage;

    }

    drawButton() {

        if (this.detectHover()) {

            //Draws expanded button when hovering 
            image(this.car.showCaseSprite, this.x - this.margin, this.y - this.margin, this.buttonWidth + this.margin * 2, this.buttonHeight + this.margin * 2);
            image(this.currentImage, this.x - this.margin, this.y - this.margin, this.buttonWidth + this.margin * 2, this.buttonHeight + this.margin * 2);

        } else {

            //Draws button when not hovering
            image(this.car.showCaseSprite, this.x, this.y, this.buttonWidth, this.buttonHeight);
            image(this.currentImage, this.x, this.y, this.buttonWidth, this.buttonHeight);

        }

        this.handleSelection();
    }

    handleSelection() {
        if (this.chosen || !someCarSelected) {
            if (this.detectClick()) {
                if (!this.chosen) {

                    //Sets global car value
                    someCarSelected = true;
                    chosenCar = this.car;
                    this.currentImage = this.carSelectedButton;

                } else {

                    //Un-sets global car value
                    someCarSelected = false;
                    chosenCar = undefined;
                    this.currentImage = this.buttonImage;

                }

                //Flips chosen value
                this.chosen = !this.chosen;
            }
        }
    }
}