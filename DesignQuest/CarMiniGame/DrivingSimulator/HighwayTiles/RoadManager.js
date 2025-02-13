class RoadManager {
    constructor() {

        //List of tiles
        this.tiles = [new HighwayTile(), new HighwayTile(), new HighwayTile()];

        //Physics constants 
        this.acceleration = 0.3;
        this.deceleration = 0.2;
        this.friction = 0.1;

        //Max speed
        this.maxSpeed = 21;


        //Cycling vars 
        this.loc = 0;
        this.i = 1;
        this.j = 0;

        //No clue tbh
        this.currentTiles;

        carPos = height / 2;

        this.started = 0; 

        this.timer; 

        this.stop = false; 

    }
    cycleTiles() {

        //Three tile set


        //Moves down based on global speed
        this.j += speed;

        //Checks if list is over


        //Sets three tiles up, middle and down
        this.tiles[0].y = this.loc - carPos;
        this.tiles[1].y = this.loc;
        this.tiles[2].y = this.loc + carPos;

        //Sets cycle location to j
        this.loc = this.j;

        //Renders tiles
        this.tiles.forEach(el => el.drawTile());

        //Checks current tile 
        this.tiles[1].checkTile();

        //Speed limit check
        currentSpeedLimit = this.tiles[1].speedLimit;

        //Shows message
        issueMessage = this.tiles[1].checkSpeed();

        //If tile passes car
        if (this.j > carPos) {

            //Resets j and loc
            this.j = 0;
            this.loc = this.loc - carPos;

            //checks for stop sign
            switch (this.tiles[1].constructor.name) {
                case 'StopSignHighwayTile':
                    if (this.tiles[1].hasStopped == false) {
                        drivingScore -= 10;
                        pointLossMessages.push(new PointLossMessage("Stop Sign Missed: -10", 200, height / 2));
                        DrivingSimulatorScreen.cop.anger += 1;
                    } else {
                        this.tiles[1].hasStopped = false;
                    }
                    break;
                case 'CrossRoadTile':
                    if (this.tiles[1].timer < this.tiles[1].minTimeWaited) {
                        drivingScore -= 30;
                        pointLossMessages.push(new PointLossMessage("Cross Walk Missed -30", 200, height / 2));
                        DrivingSimulatorScreen.cop.anger += 5;
                    }

                    break;
                default:
                    console.log('how did we get here?');
                    break;
            }

            if(!this.stop){
                this.tiles.pop();
                this.tiles.splice(0, 0, this.getNextTile());
            }else{
                this.tiles.pop();
                //this.tiles.splice(0, 0, new EndTile());
            }
            

            DrivingSimulatorScreen.trafficLight.setState("greenLight");
        }

    }


    getNextTile() {
        let outcomes = [new HighwayTile(), new StopSignHighwayTile(), new CrossRoadTile];
        let probabilities = [0.8, 0.1, 0.1];
        let totalWeight = probabilities.reduce((sum, weight) => sum + weight, 0);
        let randomValue = random(totalWeight);

        let cumulativeWeight = 0;
        for (let i = 0; i < probabilities.length; i++) {
            cumulativeWeight += probabilities[i];
            if (randomValue < cumulativeWeight) {
                return outcomes[i];
            }
        }
    }

    drawTiles() {
        //Renders all tiles + other code
        this.cycleTiles();
        if(!this.stop){
            this.controlSpeed();
        }

        if(this.started == 1){
            this.timer = new Timer(240000);
        }else if(this.started > 1){
            console.log(this.timer.timeLeft())
            if(this.timer.isFinished()){
                this.stop = true; 
            }
        }

    }

    controlSpeed() {

        //Acc based on keys
        if (keyIsDown(UP_ARROW) || keyIsDown(87)) { //87 is for W
            speed += this.acceleration;
            this.started ++; 
        }
        if (keyIsDown(DOWN_ARROW) || keyIsDown(83)) { //83 is for S
            speed -= this.deceleration;
        }
        speed -= this.friction;
        speed = constrain(speed, 0, this.maxSpeed);

    }

}