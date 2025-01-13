class DrivingSimulatorScreen extends Screen{
    static testTile;
    static roadManager;
    static speedometer;
    static speedLimit;

    static initializeScreen() {
        highwayTiles = [ 
            new StopSignHighwayTile(),
            new HighwayTile(),
            new StopSignHighwayTile(),
            new HighwayTile(),
            new HighwayTile(),
            new StopSignHighwayTile(),
            new HighwayTile(),
            new StopSignHighwayTile(),
            new HighwayTile(),
            new HighwayTile(),
            new StopSignHighwayTile(),
            new HighwayTile(),
            new StopSignHighwayTile(),
            new HighwayTile(),
            new HighwayTile(),
            new StopSignHighwayTile(),
            new HighwayTile(),
            new StopSignHighwayTile(),
            new HighwayTile(),
            new HighwayTile()
        ];
        DrivingSimulatorScreen.speedLimit = new SpeedLimit();
        DrivingSimulatorScreen.speedometer = new Speedometer();
        DrivingSimulatorScreen.roadManager = new RoadManager(highwayTiles);
    }
  
    static drawScreen() {
        background(255);
        DrivingSimulatorScreen.roadManager.drawTiles();
        DrivingSimulatorScreen.speedometer.drawSpeedometer();
        DrivingSimulatorScreen.speedLimit.drawSpeedlimitBox();
        rect( width/2+30, height/2, 100,200);
    }

} 