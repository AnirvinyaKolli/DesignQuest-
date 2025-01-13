class PointLossMessage {
    constructor(message, x, y) {
        this.message = message;
        this.x = x; 
        this.y = y; 
        this.alphaValue = 255; 
    }

    drawMessage() {
        this.y -= 1; 
        this.alphaValue -= 1;

        textSize(25);
        fill(255, 0, 0, this.alphaValue);
        noStroke();

        text(this.message, this.x, this.y);

        fill(255);
        stroke(0);
    }

    checkNeeded() {
        return this.alphaValue > 0;
    }
}