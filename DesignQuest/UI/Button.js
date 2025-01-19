class Button {
    constructor(x, y, buttonWidth, buttonHeight, margin = 5) {

        //Init values 
        this.x = x;
        this.y = y;
        this.buttonWidth = buttonWidth;
        this.buttonHeight = buttonHeight;
        this.canClick = true;
        this.margin = margin;
        this.mouseWasPressed = false;
    }

    detectHover() {

        //Check for mouse hovering 
        if (mouseX > this.x && mouseX < this.x + this.buttonWidth && mouseY > this.y && mouseY < this.y + this.buttonHeight) {
            return true;
        } else {
            return false;
        }

    }
    detectClick() {

        //Check for click 
        let clicked = false;

        if (this.detectHover()) {
            if (mouseIsPressed && this.canClick && !this.mouseWasPressed) {
                this.canClick = false;
                clicked = true;

            }
        }

        if (!mouseIsPressed) {
            this.mouseWasPressed = false;
            this.canClick = true;
        } else {
            this.mouseWasPressed = true;
        }

        return clicked;
    }


    drawButton() {

        //Render (meant to be overriden)
        rect(this.x, this.y, this.buttonWidth, this.buttonHeight);
    }
}