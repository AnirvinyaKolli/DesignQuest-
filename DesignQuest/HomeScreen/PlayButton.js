class PlayButton extends Button {
    constructor(x, y, width, height) {

        //Init vars
        super(x, y, width, height);
        this.margin = 10;
    }
    drawButton() {

        //Renders button
        if (this.detectHover()) {
            rect(this.x - this.margin, this.y - this.margin, this.width + this.margin * 2, this.height + this.margin * 2);
        } else {
            rect(this.x, this.y, this.width, this.height);
        }
    }
}