class StopSignHighwayTile extends HighwayTile{
    constructor(){
        super(loadImage("assets/images/stopSignTile.jpeg"));
        this.instruction = "Stop!";
        this.hasStopped = false; 

    }

    checkTile(){
        if(speed == 0){
            console.log("WaterBottle");
            this.hasStopped = true;
        }
    }
}