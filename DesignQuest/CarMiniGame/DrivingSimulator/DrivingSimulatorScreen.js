class DrivingSimulatorScreen extends Screen {

    //Inits screen values  
    static testTile;
    static roadManager;
    static speedometer;
    static speedLimit;
    static cop;

    static initializeScreen() {

        //set speed limit
        DrivingSimulatorScreen.speedLimit = new SpeedLimit();

        //set speedometer
        DrivingSimulatorScreen.speedometer = new Speedometer();

        //Set road manager
        DrivingSimulatorScreen.roadManager = new RoadManager();

        //Set cop
        DrivingSimulatorScreen.cop = new Cop(width/2-200, 600);
    }

    static drawScreen() {

        //Background
        background(255);

        //rendering 
        DrivingSimulatorScreen.roadManager.drawTiles();
        DrivingSimulatorScreen.speedometer.drawSpeedometer();
        DrivingSimulatorScreen.speedLimit.drawSpeedlimitBox();
        DrivingSimulatorScreen.cop.drawCop();
        image(chosenCar.drivingSprite, width / 2 + 30, height / 2, 125, 200);
    }

} 