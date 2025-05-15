class InfoBox{
    constructor(){

        this.x = width / 2 + 250;
        this.y = height / 2-50; 
        this.boxWidth = 400;
        this.data = [];
        this.infoFiles = [
            "CarMiniGame/DrivingSimulator/InfoMessages/one.txt",
            "CarMiniGame/DrivingSimulator/InfoMessages/two.txt",
            "CarMiniGame/DrivingSimulator/InfoMessages/three.txt",
            "CarMiniGame/DrivingSimulator/InfoMessages/four.txt",
            "CarMiniGame/DrivingSimulator/InfoMessages/five.txt",
            "CarMiniGame/DrivingSimulator/InfoMessages/six.txt",
            "CarMiniGame/DrivingSimulator/InfoMessages/seven.txt",
            "CarMiniGame/DrivingSimulator/InfoMessages/eight.txt",
            "CarMiniGame/DrivingSimulator/InfoMessages/nine.txt",
            "CarMiniGame/DrivingSimulator/InfoMessages/ten.txt",
        ];

        this.infoFiles.forEach((path) => {
            fetch(path)
                .then(response => response.text())
                .then(text => {
                    this.data.push(text);
                })
                .catch(err => console.error("Error loading file:", err));
        })        

        this.timer = new Timer(10000);
        this.cf = 0; 
    }

    drawBox(){
        push();
            fill(255)
            textAlign(LEFT, TOP);
            textSize(20);
            text(this.data[this.cf], this.x, this.y, this.boxWidth, 200);
        pop();
        if(this.timer.isFinished()){
            this.getNewMessage();
            this.timer.reset();
        }
    }

    getNewMessage(){ 
        this.cf = round(random(0, this.data.length));
    }
}