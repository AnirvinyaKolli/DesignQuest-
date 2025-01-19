class CheckBox extends Button {

    constructor(label = "NOT SURE", x = 0, y = 0, width = 20, height = 20) {
        super(x, y, width, height);

        //Checked value
        this.checked = false;
        this.label = label;

    }

    drawButton() {

        
        //Switches value of check based on click
        if (this.detectClick()) {
            this.checked = !this.checked;
        }

        //Temp render
        textSize(23);
        fill(0);
        text(this.label, this.x + this.buttonWidth + textWidth(this.label) / 2 + 5, this.y + 2);
        fill(255);
        if (this.checked) {
            fill(0, 255, 0);
        }

        rect(this.x, this.y, this.buttonWidth, this.buttonHeight);
        fill(255);
    }

}