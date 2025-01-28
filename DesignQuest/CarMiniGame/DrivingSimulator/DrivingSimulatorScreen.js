class DrivingSimulatorScreen extends Screen {

    //Inits screen values  
    static testTile;
    static roadManager;
    static speedometer;
    static speedLimit;

    static initializeScreen() {

        //Tile list 
        highwayTiles = [
            new StopSignHighwayTile(),
            new HighwayTile(),
            new HighwayTile(),
            new HighwayTile(),
            new StopSignHighwayTile(),
            new HighwayTile(),
            new HighwayTile(),
            new HighwayTile(),
            new HighwayTile(),
            new StopSignHighwayTile(),
            new HighwayTile(),
            new CrossRoadTile(),
            new CrossRoadTile(),           
            new StopSignHighwayTile(),
            new HighwayTile(),
            new HighwayTile()
        ];

        //set speed limit
        DrivingSimulatorScreen.speedLimit = new SpeedLimit();

        //set speedometer
        DrivingSimulatorScreen.speedometer = new Speedometer();

        //Set road manager
        DrivingSimulatorScreen.roadManager = new RoadManager(highwayTiles);
    }

    static drawScreen() {

        //Background
        background(255);

        //rendering 
        DrivingSimulatorScreen.roadManager.drawTiles();
        DrivingSimulatorScreen.speedometer.drawSpeedometer();
        DrivingSimulatorScreen.speedLimit.drawSpeedlimitBox();
        image(chosenCar.drivingSprite, width / 2 + 30, height / 2, 125, 200);
    }

} 