//Font assets
let blockyFont;


//Game Screens 
let gameScreens = [HomeScreen, CarSelectorScreen, DrivingSimulatorScreen, PreDrivingScreen];
let gameState = HomeScreen;

let pointLossMessages = [];
//For Transport section

//For Car Selector UI. 
let someCarSelected = false;
let chosenCar;

//For Driving Game Section
let currentSpeedLimit;
let speed = 0;
let highwayTiles = [];
let issueMessage = "You're Doing Great!";
let drivingScore = 200;