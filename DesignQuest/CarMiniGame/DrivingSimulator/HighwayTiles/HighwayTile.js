class HighwayTile {
    constructor(img = loadImage("assets/images/testTileTexture.jpeg")) {

        //Width of tile 
        this.tileWidth = 400;

        //Sets asset 
        this.img = img;

        //Y-value 
        this.y = 0;

        //Speed limit
        this.speedLimit = 10;

        //Driving instruction 
        this.instruction = "Keep Driving";

    }
    drawTile() {

        //Renders road tile
        image(this.img, (width - this.tileWidth) / 2, this.y, this.tileWidth, height / 2);

    }
    checkSpeed() {

        //Checks speed limit
        if (speed > this.speedLimit) {

            //Lowers rate of point loss, i.e every 40 frames
            if (frameCount % 60 == 0) {

                //Lower driving score
                drivingScore -= 0.1;
                pointLossMessages.push(new PointLossMessage("Too Fast: -0.1", 200, height / 2));
            }
            return "Too Fast!";

        }

        return "You're doing great!";
    }

    checkTile() {
        //Null method
        return null;
    }
}