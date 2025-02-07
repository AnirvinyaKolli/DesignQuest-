class Cop {
    constructor(x = 0, y = 0){
        this.x = x;
        this.y = y;
        this.copWidth = 100; 
        this.copHeight = 400; 
        this.copStates = new Map();
            this.copStates.set("Normal", loadImage('assets/images/2.png'));
            this.copStates.set("Angry", loadImage('assets/images/favicon.png'));
            this.copStates.set("Agitated", loadImage('assets/images/2.png'));
        this.cState = "Normal";
    }

    drawCop(){
        image(this.copStates.get(cState), this.x,this.y,this.copWidth,this.copHeight);
    }
    setState(state){
        if(state == "Normal" || state == "Angry" || state == "Agitated"){
            this.cState = state;
        }
    }
}