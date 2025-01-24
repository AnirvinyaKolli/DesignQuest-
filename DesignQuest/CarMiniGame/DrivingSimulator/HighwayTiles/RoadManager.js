class RoadManager {
    constructor(tiles) {

        //List of tiles
        this.tiles = tiles;

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

        carPos = height/2;

    }
    cycleTiles() {

        //Moves down based on global speed
        this.j += speed;

        //Checks if list is over
        if (this.i < this.tiles.length - 1) {

            //Sets three tiles up, middle and down
            this.tiles[this.i + 1].y = this.loc - carPos;
            this.tiles[this.i].y = this.loc;
            this.tiles[this.i - 1].y = this.loc + carPos;

            //Sets cycle location to j
            this.loc = this.j;

            //Renders tiles
            this.tiles[this.i + 1].drawTile();
            this.tiles[this.i].drawTile();
            this.tiles[this.i - 1].drawTile();

            //Checks current tile 
            this.tiles[this.i].checkTile();

            //Speed limit check
            currentSpeedLimit = this.tiles[this.i].speedLimit;

            //Shows message
            issueMessage = this.tiles[this.i].checkSpeed();

            //If tile passes car
            if (this.j > carPos) {

                //Resets j and loc
                this.j = 0;
                this.loc = this.loc -carPos;

                //checks for stop sign
                switch(this.tiles[this.i].constructor.name){
                    case 'StopSignHighwayTile':
                        if (this.tiles[this.i].hasStopped == false) {
                            drivingScore -= 10;
                            pointLossMessages.push(new PointLossMessage("Stop Sign Missed: -10", 200, height / 2));
                        } else {
                            this.tiles[this.i].hasStopped = false;
                        }
                        break;
                    case 'CrossRoadTile':
                        if (this.tiles[this.i].timer < this.tiles[this.i].minTimeWaited) {
                            drivingScore -= 30;
                            pointLossMessages.push(new PointLossMessage("Cross Walk Missed -30", 200, height / 2));
                        } else {
                            this.tiles[this.i].timer = 0;
                        }
                        break;
                    default:
                        console.log('how did we get here?');
                        break;
                }
                
                //Inc i
                this.i++;
            }

            //Test list reset
        } else {
            this.i = 1;
        }
    }

    drawTiles() {

        //Renders all tiles + other code
        this.cycleTiles();
        this.controlSpeed();
        this.drawAccelerationControls();
    }

    controlSpeed() {

        //Acc based on keys
        if (keyIsDown(UP_ARROW) || keyIsDown(87)) { //87 is for W
            speed += this.acceleration;
        }
        if (keyIsDown(DOWN_ARROW) || keyIsDown(83)) { //83 is for S
            speed -= this.deceleration;
        }
        speed -= this.friction;
        speed = constrain(speed, 0, this.maxSpeed);

    }
    drawAccelerationControls() {

        //Draws controls
        rect(width / 2 + this.tiles[0].tileWidth / 2 + 75, height * 2 / 3 + 30, 150, height * 1 / 3 - 50);
        rect(width / 2 + this.tiles[0].tileWidth / 2 + 250, height * 2 / 3 + 30, 150, height * 1 / 3 - 50);

    }

}