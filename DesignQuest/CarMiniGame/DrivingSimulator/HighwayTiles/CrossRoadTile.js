class CrossRoadTile extends HighwayTile {
    constructor() {
        super(loadImage('assets/images/carMiniGame/drivingGame/crossRoadHighwayTile.png'));

        //Sets vars
        this.instruction = "PENGUIN!";
        
        this.timer = 0;
        this.minTimeWaited = 4*60;

        this.canGo = false; 
        this.pedestrian = new Pedestrian();

    }

    checkTile() {
        this.canGo = true; 
    }

    drawTile() {

        if(this.canGo){
            this.timer++;
            console.log(this.timer);
        }
        //Renders road tile
        image(this.img, (width - this.tileWidth) / 2, this.y, this.tileWidth, height / 2 +1);

        this.pedestrian.drawPedestrian(this.y, this.timer, this.minTimeWaited, 0, this.tileWidth);

    }
}