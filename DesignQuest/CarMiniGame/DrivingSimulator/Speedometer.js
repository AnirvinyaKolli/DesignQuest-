class Speedometer {
    constructor() {

        //Init vars
        this.x = width / 2 - 450;
        this.y = height - 220;
        this.boxWidth = 200;
        this.boxHeight = 200;
        this.speedFactor = speed;
        this.needle = loadImage("assets/images/carMiniGame/drivingGame/speedometerNeedle.png");
        this.dial = loadImage("assets/images/carMiniGame/drivingGame/speedometerDial.png");

    }
    drawSpeedometer() {

        //Speedometer set display 
        this.speedFactor = speed * 12;

        //Render container
        fill(0);
        rect(this.x, this.y, this.boxWidth, this.boxHeight);
        image(this.dial, this.x, this.y, this.boxWidth, this.boxHeight);
        image(this.needle, this.x+this.boxWidth/4, this.y, this.boxWidth/2, this.boxHeight/2)
        fill(255);

        //Render speedometer 
        textAlign(CENTER, CENTER);
        textSize(30);
        fill(200, 55, 55);
        noStroke();
        rect(this.x + 25, this.y + 30, this.speedFactor, 30, 10, 10, 10, 10);
        stroke(0);
        fill(0);
        text(round(speed * 3) + " MPH", this.x + this.boxWidth / 2, this.y + this.boxHeight / 2 + 20);
        fill(255);

    }
}