class TrafficLight{
    constructor(){
        this.x = 0; 
        this.y = 0; 
        this.lightWidth = 200;
        this.lightHeight = 200;  
        this.states = new Map();
            this.states.set('redLight', loadImage("assets/images/carMiniGame/drivingGame/trafficRedLight.png"));
            this.states.set('greenLight', loadImage("assets/images/carMiniGame/drivingGame/trafficGreenLight.png"));
            this.states.set('stopSign', loadImage("assets/images/carMiniGame/drivingGame/stopSign.png"));

        this.cState = "greenLight";
    }
    drawLight(){
        image(this.states.get(this.cState), this.x,this.y,this.lightWidth,this.lightHeight);
    }
    setState(state){
        if(state == "greenLight" || state == "redLight" || state == "stopSign"){
            this.cState = state;
        }
    }
}