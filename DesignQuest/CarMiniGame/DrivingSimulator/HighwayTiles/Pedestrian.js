class Pedestrian{
    constructor(){
        this.pedestrianWidth = 100; 
        this.pedestrianHeight = 100;
        let value = random(1,4);
        switch(round(value)){
            case 1:
                console.log("1");
                break;
            case 2:
                console.log("2");
                break;
            case 3:
                console.log("3");
                break;
            case 4:
                console.log("4");
                break;
        }
    }

    drawPedestrian(y, timer, initX){
        
    }
}