class CheckBox extends Button {

    constructor(label = "NOT SURE", x = 0, y = 0, width = 20, height = 20) {
        super(x, y, width, height);

        //Checked value
        this.checked = false;
        this.label = label;

        //Assets 
        this.checkedImage = loadImage("assets/images/carMiniGame/preDrivingChecks/checkedBox.png");
        this.uncheckedImage = loadImage("assets/images/carMiniGame/preDrivingChecks/uncheckedBox.png");

    }

    drawButton() {


        //Switches value of check based on click
        if (this.detectClick()) {
            this.checked = !this.checked;
        }

        //Temp render
        push();
        textSize(23);
        fill(0);
        text(this.label, this.x + this.buttonWidth + textWidth(this.label) / 2 + 5, this.y + 2);
        pop();
        
        if (this.checked) {
            image(this.checkedImage, this.x, this.y, this.buttonWidth, this.buttonHeight);
        } else {
            image(this.uncheckedImage, this.x, this.y, this.buttonWidth, this.buttonHeight);
        }

    }
}