class StopSignHighwayTile extends HighwayTile {
    constructor() {
        super(loadImage("assets/images/carMiniGame/drivingGame/stopSignHighwayTile.png"));

        //Sets vars
        this.instruction = "Stop!";
        this.hasStopped = false;

    }

    checkTile() {

        //Checks for speed
        if (speed == 0) {
            this.hasStopped = true;
        }
    }
}