class Cop {
    constructor(){
        this.x = width / 2 + 250;
        this.y = height / 2 - 450;
        this.copWidth = 350; 
        this.copHeight = 400; 
        this.copStates = new Map();
            this.copStates.set("Normal", loadImage('assets/images/carMiniGame/drivingGame/copHappy.png'));
            this.copStates.set("Angry", loadImage('assets/images/carMiniGame/drivingGame/copAngry.png'));
            this.copStates.set("Agitated", loadImage('assets/images/carMiniGame/drivingGame/copNormal.png'));
        this.cState = "Normal";
        this.anger = 0; 
    }

    drawCop(){
        image(this.copStates.get(this.cState), this.x,this.y, this.copWidth, this.copHeight);
        this.handleCopAnger();
    }
    setState(state){
        if(state == "Normal" || state == "Angry" || state == "Agitated"){
            this.cState = state;
        }
    }
    handleCopAnger(){
        if(this.anger<10){
            this.cState = "Normal";
        }else if(this.anger <30){
            this.cState = "Agitated";
        }else{
            this.cState = "Angry";
        }
    }
}