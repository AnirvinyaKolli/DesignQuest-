class Pedestrian{
    constructor(){
        this.pedestrianWidth = 50; 
        this.pedestrianHeight = 50;
        let value = random(1,4);
        switch(round(value)){
            case 1:
                console.log("1");
                break;
            case 2:
                console.log("2");
                break;
            case 3:
                console.log("3");
                break;
            case 4:
                console.log("4");
                break;
        }
    }

    drawPedestrian(y, timer, timerLimit, initX, tileWidth){
        rect(initX-this.pedestrianWidth+map(timer, 0, timerLimit, 0, (width + tileWidth)/2), y+30, this.pedestrianWidth, this.pedestrianHeight);
    }
}