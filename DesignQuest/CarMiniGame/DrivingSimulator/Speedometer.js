class Speedometer{
    constructor(){
        this.x = width/2-550;
        this.y = height-220; 
        this.boxWidth = 300;
        this.boxHeight = 200;
        this.speedFactor = speed;
    }
    drawSpeedometer(){
        this.speedFactor = speed*12;

        rect(this.x,this.y,this.boxWidth, this.boxHeight);

        textAlign(CENTER,CENTER);
        textSize(30);
        fill(200,55,55);
        noStroke();
        rect(this.x+25,this.y+30, this.speedFactor, 30, 10,10,10,10);
        stroke(0);
        fill(0);
        text(round(speed*3) + " MPH", this.x+this.boxWidth/2, this.y+this.boxHeight/2+20);
        fill(255);
        
    }
}