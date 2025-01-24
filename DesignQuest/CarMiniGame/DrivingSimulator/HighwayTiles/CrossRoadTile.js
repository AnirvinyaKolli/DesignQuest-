class CrossRoadTile extends HighwayTile {
    constructor() {
        super(loadImage('assets/images/carMiniGame/drivingGame/crossRoadHighwayTile.png'));

        //Sets vars
        this.instruction = "PENGUIN!";
        
        this.timer = 0;
        this.minTimeWaited = 20*60;

        this.pedestrian = new Pedestrian();

    }

    checkTile() {
        this.timer++;
        
    }
}