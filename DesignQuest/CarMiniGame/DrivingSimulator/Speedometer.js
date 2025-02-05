class Speedometer {
    constructor() {

        //Init vars
        this.x = width / 2 - 450;
        this.y = height - 220;
        this.boxWidth = 200;
        this.boxHeight = 200;
        this.needle = loadImage("assets/images/carMiniGame/drivingGame/speedometerNeedle.png");
        this.dial = loadImage("assets/images/carMiniGame/drivingGame/speedometerDial.png");
        this.needleHeight = this.boxHeight/2
    }
    drawSpeedometer() {


        //Render container
        fill(0);
        rect(this.x, this.y, this.boxWidth, this.boxHeight);
        image(this.dial, this.x, this.y, this.boxWidth, this.boxHeight);

        
        
        
        
        fill(255);

        //Render speedometer 
        
        push();
        angleMode(DEGREES);
        translate(this.x+this.boxWidth/2, this.y+this.boxHeight/2);
        rotate(map(speed, 0 , 21  , -123 , 123));
        imageMode(CENTER);
        image(this.needle, 0, 0-this.needleHeight/2+16, this.boxWidth/2, this.boxHeight/2)
        imageMode(CORNER);
        pop();

        push();
        textSize(25);
        stroke(0);
        fill(0);
        if(speed > currentSpeedLimit){
            fill(255,0,0);
        }
        text(round(speed * 3) + " MPH", this.x + this.boxWidth / 2, this.y + this.boxHeight / 2 + 45);
        pop();
    }
}