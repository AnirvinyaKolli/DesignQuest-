class Pedestrian{
    constructor(){
        this.pedestrianWidth = 175; 
        this.pedestrianHeight = 175;
        this.sprite;
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

    drawPedestrian(y, timer, timerLimit, initX, tileWidth){
        image(this.sprite, initX-this.pedestrianWidth+map(timer, 0, timerLimit, 0, (width + tileWidth)/2), y-40, this.pedestrianWidth, this.pedestrianHeight);
    }
}