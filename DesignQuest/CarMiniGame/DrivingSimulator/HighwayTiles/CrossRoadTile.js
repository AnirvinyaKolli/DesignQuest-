class CrossRoadTile extends HighwayTile {
    constructor() {
        super(loadImage('assets/images/carMiniGame/drivingGame/crossRoadHighwayTile.png'));

        //Sets vars
        this.instruction = "PENGUIN!";
        
        this.timer = 0;
        this.minTimeWaited = 4*60;

        this.canGo = false; 
        this.pedestrian = new Pedestrian();
        this.lightState = "greenLight";
    }

    checkTile() {
        this.canGo = true; 
    }

    drawTile() {

        DrivingSimulatorScreen.trafficLight.setState(this.lightState);
        if(this.canGo){
            this.timer++;
        }

        if(this.timer>this.minTimeWaited){
            this.lightState = "greenLight";
        }
        if(this.timer<this.minTimeWaited && this.canGo){
            this.lightState = "redLight";
        }

        //Renders road tiles
        image(this.img, (width - this.tileWidth) / 2, this.y, this.tileWidth, height / 2 +1);

        this.pedestrian.drawPedestrian(this.y, this.timer, this.minTimeWaited);

    }
}