class RoadManager{
    constructor(tiles){
        this.tiles = tiles; 
        this.acceleration = 0.2;
        this.deceleration = 0.1;
        this.friction = 0.05; 
        this.maxSpeed = 21;
        this.loc = 0; 
        this.i = 1; 
        this.j = 0;
        this.currentTiles;

    }
    cycleTiles(){
        this.j += speed;
        if(this.i< this.tiles.length-1){
            this.tiles[this.i+1].y = this.loc-height/2;
            this.tiles[this.i].y = this.loc;
            this.tiles[this.i-1].y = this.loc+height/2;

            this.loc = this.j; 

            this.tiles[this.i+1].drawTile();
            this.tiles[this.i].drawTile();  
            this.tiles[this.i-1].drawTile();      

            this.tiles[this.i].checkTile();
            
            currentSpeedLimit = this.tiles[this.i].speedLimit;
            issueMessage = this.tiles[this.i].checkSpeed();
        
            if(this.j>height/2){
                this.j = 0;
                this.loc = this.loc-height/2; 
                if(this.tiles[this.i].hasStopped != undefined){
                    console.log(this.tiles[this.i].constructor.name);
                    console.log(this.tiles[this.i].hasStopped);
                    if(this.tiles[this.i].hasStopped == false){
                        drivingScore-=10;
                        pointLossMessages.push(new PointLossMessage("Stop Sign Missed: -10", 200, height/2));
                    }else{
                        this.tiles[this.i].hasStopped = false;
                    }
                }else{
                    console.log("good");
                }
                
                this.i++;
            }
           
        }else{
            this.i = 1;
        }
    }
    drawTiles(){ 
        this.cycleTiles();
        this.controlSpeed();
        this.drawAccelerationControls();
    }

    controlSpeed(){

        if (keyIsDown(UP_ARROW) || keyIsDown(87)) { //87 is for W
            speed += this.acceleration;
        }
        if (keyIsDown(DOWN_ARROW)|| keyIsDown(83)) { //83 is for S
            speed -= this.deceleration;
        }
        speed -= this.friction;
        speed = constrain(speed, 0, this.maxSpeed);
        
    }
    drawAccelerationControls(){
        rect(width/2+this.tiles[0].tileWidth/2+75, height*2/3+30, 150, height*1/3-50);
        rect(width/2+this.tiles[0].tileWidth/2+250, height*2/3+30, 150, height*1/3-50);
    }
        
}