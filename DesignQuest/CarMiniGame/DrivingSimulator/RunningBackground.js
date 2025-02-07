class RunningBackground{
    
    constructor(){
        this.bg = loadImage('assets/images/backgrounds/scrollingDrivingBackground.png'); 
        this.y = 0;
    }

    drawBackground(){ 
        
        this.y += speed; // Move up
        

        image(this.bg, 0,this.y, width, height);
        image(this.bg, 0,this.y - height, width, height+2);
        if(this.y > height){
            this.y = this.y-height;
        }
    }
}
