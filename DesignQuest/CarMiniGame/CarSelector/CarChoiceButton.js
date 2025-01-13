class CarChoiceButton extends Button{
    constructor(x, y, width, height, car) {
        super(x,y,width,height);
        this.hovering = false; 
        this.margin = 20;
        this.chosen = false;
        this.car = car;
        this.carSelectedButton = loadImage("assets/images/CarChoiceButtonSelected.png");
        this.buttonImage = loadImage("assets/images/CarChoiceButton.png");
        this.currentImage = this.buttonImage;

    }
    
    drawButton(){
        if(this.detectHover()){
            image(this.car.showCaseSprite,this.x-this.margin, this.y-this.margin, this.width+this.margin*2, this.height+this.margin*2);
            image(this.currentImage,this.x-this.margin, this.y-this.margin, this.width+this.margin*2, this.height+this.margin*2);
        }else{
            image(this.car.showCaseSprite,this.x, this.y, this.width, this.height);
            image(this.currentImage,this.x, this.y, this.width, this.height);
        }
        
        this.handleSelection();
    }

    handleSelection(){
        if(this.chosen || !someCarSelected){
            if(this.detectClick()){
                if(!this.chosen){
                    someCarSelected = true; 
                    chosenCar = this.car; 
                    this.currentImage = this.carSelectedButton;
                }else{
                    someCarSelected = false;
                    chosenCar = undefined; 
                    this.currentImage = this.buttonImage;

                }
                this.chosen = !this.chosen; 
            }
        }
    }
}