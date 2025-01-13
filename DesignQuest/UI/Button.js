class Button {
    constructor(x, y, width, height) {

        //Init values 
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.canClick = true;
        this.mouseWasPressed = false;
    }

    detectHover() {

        //Check for mouse hovering 
        if (mouseX > this.x && mouseX < this.x + this.width && mouseY > this.y && mouseY < this.y + this.height) {
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
                console.log("clicked");
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
        rect(this.x, this.y, this.width, this.height);
    }
}