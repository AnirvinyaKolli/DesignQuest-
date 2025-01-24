class CrossRoadTile extends HighwayTile {
    constructor() {
        super(loadImage("assets/images/carMiniGame/drivingGame/stopSignHighwayTile.png"));

        //Sets vars
        this.instruction = "PENGUIN!";
        
        this.timer = 0;
        this.minTimeWaited = 3*60;

    }

    checkTile() {
        this.timer++;
    }
}