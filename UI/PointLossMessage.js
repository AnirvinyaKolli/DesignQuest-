class PointLossMessage {
    constructor(message, x, y) {

        //Init values
        this.message = message;
        this.x = x;
        this.y = y;
        this.alphaValue = 255;
    }

    drawMessage() {

        //Fading up and render 
        this.y -= 1;
        this.alphaValue -= 1;

        push();
        textSize(25);
        fill(255, 0, 0, this.alphaValue);
        noStroke();

        text(this.message, this.x, this.y);
        pop();
    }

    checkNeeded() {
        return this.alphaValue > 0;
    }
}