class CarChoiceButton extends Button{
    constructor(x, y, width, height, car) {
        super(x,y,width,height);
        this.hovering = false; 
        this.margin = 20;
        this.chosen = false;
        this.car = car;
        this.buttonImage = loadImage("assets/images/CarChoiceButton.png");
        this.currentImage = this.buttonImage;

    }
    
    drawButton(){
        if(this.detectHover()){
            fill(255);
            rect(this.x-this.margin, this.y-this.margin, this.width+this.margin*2, this.height+this.margin*2);
            image(this.buttonImage,this.x, this.y, this.width, this.height);
        }else{
            if(this.chosen){
                fill(255, 0, 0);
                rect(this.x-this.margin, this.y-this.margin, this.width+this.margin*2, this.height+this.margin*2);
                image(this.currentImage,this.x, this.y, this.width, this.height);
            }else{
                image(this.currentImage,this.x, this.y, this.width, this.height);
            }
        }
        
        if(this.chosen || !someCarSelected){
            if(this.detectClick()){
                if(!this.chosen){
                    someCarSelected = true;
                    chosenCar = this.car; 
                }else{
                    someCarSelected = false;
                    chosenCar = undefined; 
                }
                this.chosen = !this.chosen; 
            }
            if(chosenCar != undefined){
                console.log(chosenCar.getName());
            }
        }
    }
}