class CarChoiceButton extends Button{
    constructor(x, y, width, height, img) {
        super(x,y,width,height);
        this.img = img;
        this.hovering = false; 
        this.margin = 20;
        this.chosen = false;
    }
    
    drawButton(){
        if(this.detectHover()){
            rect(this.x-this.margin, this.y-this.margin, this.width+this.margin*2, this.height+this.margin*2);
            image(this.img,this.x, this.y, this.width, this.height);
        }else{
            image(this.img,this.x, this.y, this.width, this.height);
        }
        
        if(this.chosen || !someCarSelected){
            if(this.detectClick()){
                if(!this.chosen){
                    someCarSelected = true;
                }else{
                    someCarSelected = false;
                }
                this.chosen = !this.chosen; 
            }
        }
    }
}