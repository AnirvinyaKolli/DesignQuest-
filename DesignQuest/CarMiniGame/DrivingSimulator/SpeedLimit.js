class SpeedLimit {
    constructor() {

        //Init vars
        this.x = width / 2 + 250;
        this.y = height / 2 - 400;
        this.boxWidth = 400;
        this.boxHeight = 200;
    }
    drawSpeedlimitBox() {

        //Renders speed limit box
        rect(this.x, this.y, this.boxWidth, this.boxHeight);
        textAlign(CENTER, CENTER);
        textSize(30);
        fill(0);
        text(issueMessage, this.x + this.boxWidth / 2, this.y + this.boxHeight / 2 - 20);
        textSize(20);
        text("Speed Limit: " + round(currentSpeedLimit * 3) + " MPH", this.x + this.boxWidth / 2, this.y + this.boxHeight / 2 + 30);
        fill(255);
    }
} 