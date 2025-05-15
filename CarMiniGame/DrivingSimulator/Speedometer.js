class Speedometer {
    constructor() {

        //Init vars
        this.x = width / 2 + 425;
        this.y = height-125;
        this.boxWidth = 200;
        this.boxHeight = 200;
        this.needle = loadImage("assets/images/carMiniGame/drivingGame/speedometerNeedle.png");
        this.dial = loadImage("assets/images/carMiniGame/drivingGame/speedometerDial.png");
        // this.dialGlass = loadImage("assets/images/carMiniGame/drivingGame/speedometerGlass.png");
        // this.dialGlare = loadImage("assets/images/carMiniGame/drivingGame/speedometerGlare.png");
        this.needleHeight = this.boxHeight-30;
        this.needleWidth = this.boxWidth-30;

        this.needleMaxAngle = 125;
    }
    drawSpeedometer() {



        //Render speedometer 
        push();
            angleMode(DEGREES);
            imageMode(CENTER);
            image(this.dial, this.x, this.y, this.boxWidth, this.boxHeight);
            translate(this.x, this.y);
            rotate(map(speed, 0 , 21  , -this.needleMaxAngle , this.needleMaxAngle));
            image(this.needle, 0, 0, this.needleWidth, this.needleHeight);
        pop();

        // push();
        //     imageMode(CENTER);
        //     tint(255,255,255, 100); 
        //     image(this.dialGlare, this.x, this.y, this.boxWidth, this.boxHeight);
        // pop();


        push();
            textSize(25);
            stroke(0);
            fill(0,255,0);
            if(speed > currentSpeedLimit){
                fill(255,0,0);
            }
            text(round(speed * 3) + " MPH", this.x, this.y+this.boxHeight/2-40);
        pop();
    }
}