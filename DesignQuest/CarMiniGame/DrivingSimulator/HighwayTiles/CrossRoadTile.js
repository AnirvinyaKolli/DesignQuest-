class CrossRoadTile extends HighwayTile {
    constructor() {
        super(loadImage("assets/images/carMiniGame/drivingGame/stopSignHighwayTile.png"));

        //Sets vars
        this.instruction = "PENGUIN!";
        this.hasPaused = false;
        this.timer = 0;
        this.crossed = 3*60;

    }

    checkTile() {
        this.timer++;
        
    }
}