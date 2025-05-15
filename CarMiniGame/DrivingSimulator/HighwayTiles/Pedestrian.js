class Pedestrian{
    constructor(){
        this.pedestrianWidth = 175; 
        this.pedestrianHeight = 175;
        this.sprite;
        this.initX = width/2-240;
        this.endX = width/2+200;
        let value = random(1,4);
        switch(round(value)){
            case 1:
                this.sprite = loadImage("assets/images/carMiniGame/drivingGame/oldLadyPedestrain.png");
                break;
            case 2:
                this.sprite = loadImage("assets/images/carMiniGame/drivingGame/oldLadyPedestrain.png");
                break;
            case 3:
                this.sprite = loadImage("assets/images/carMiniGame/drivingGame/oldLadyPedestrain.png");
                break;
            case 4:
                this.sprite = loadImage("assets/images/carMiniGame/drivingGame/oldLadyPedestrain.png");
                break;
        }
    }

    drawPedestrian(y, timer, endTimer){
        let xPos = map(timer, 0, endTimer, this.initX, this.endX);
        console.log(xPos);
        push();
        imageMode(CENTER);
        image(this.sprite, xPos, y+50, this.pedestrianWidth, this.pedestrianHeight);
        pop();
    }
}