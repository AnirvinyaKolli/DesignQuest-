class NextScreenButton extends Button {

    constructor(nextScreen = HomeScreen, canGoNext= false) {
        super(width-100, height-100, 200, 50);

        //The screen it swaps to when clicked. 
        this.nextScreen = nextScreen;

        //Condition to check wether it is ok to proceed. 
        this.canGoNext = canGoNext;
    }

    drawButton(){

        //If is time to show
        if(this.canGoNext){

            //Expansion when hover 
            if (this.detectHover()) {
                rect(this.x - this.margin, this.y - this.margin, this.buttonWidth + this.margin * 2, this.buttonHeight + this.margin * 2);
            } else {
                rect(this.x, this.y, this.buttonWidth, this.buttonHeight);
            }

            //Goes to next screen when pressed. 
            if(this.detectClick()){
                gameState = this.nextScreen; 
            }

        }
    }

}