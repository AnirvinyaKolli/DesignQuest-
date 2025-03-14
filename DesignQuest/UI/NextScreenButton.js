class NextScreenButton extends Button {
            
    constructor(nextScreen, canGoNext = false, x = width - 250, y = height - 200) {
        super(x, y, 200, 200);

        //The screen it swaps to when clicked. 
        this.nextScreen = nextScreen;

        //Condition to check wether it is ok to proceed. 
        this.canGoNext = canGoNext;

        this.img = loadImage("assets/images/nextArrow.png");
    }

    drawButton() {

        //If is time to show
        if (this.canGoNext) {

            //Expansion when hover 
            push();
                imageMode(CENTER);
                if(this.detectHover){
                    image(this.img, this.x+this.buttonWidth/2, this.y+this.buttonHeight/2, this.buttonWidth, this.buttonHeight);
                }else{
                    image(this.img, this.x, this.y, this.buttonWidth, this.buttonHeight);
                }
            pop();
            //Goes to next screen when pressed. 
            if (this.detectClick()) {
                gameState = this.nextScreen;
            }

        }
    }

}