class HighwayTile{
    constructor(img = loadImage("assets/images/testTileTexture.jpeg")){
        this.tileWidth = 400;
        this.img = img; 
        this.y = 0; 
        this.speedLimit = 10;
        this.instruction = "Keep Driving";

    }
    drawTile(){
        image(this.img, (width-this.tileWidth)/2, this.y, this.tileWidth, height/2);
    }
    checkSpeed(){
        if(speed> this.speedLimit){
            if(frameCount%40 == 0){
                drivingScore -=0.1;
                pointLossMessages.push(new PointLossMessage("Too Fast: -0.1", 200, height/2));
            }
            return "Too Fast!";
        }
        return "You're doing great!";
    }
    checkTile(){
        return null;
    }
}