class NextScreenButton extends Button {

    constructor(nextScreen = HomeScreen, canGoNext= false, x = width-255, y = height-100) {
        super(x, y, 200, 50);

        //The screen it swaps to when clicked. 
        this.nextScreen = nextScreen;

        //Condition to check wether it is ok to proceed. 
        this.canGoNext = canGoNext;
    }

    drawButton(){

        //If is time to show
        if(this.canGoNext){

            //Expansion when hover 
            fill(255);
            if (this.detectHover()) {
                textSize(23);
                rect(this.x - this.margin, this.y - this.margin, this.buttonWidth + this.margin * 2, this.buttonHeight + this.margin * 2);
            } else {
                textSize(21);
                rect(this.x, this.y, this.buttonWidth, this.buttonHeight);
            }
            fill(0);
            text("NextButton", this.x+this.buttonWidth/2, this.y+this.buttonHeight/2-5 )
            fill(255);
            //Goes to next screen when pressed. 
            if(this.detectClick()){
                gameState = this.nextScreen; 
            }

        }
    }

}