class PlayButton extends Button{
    constructor(x, y, width, height) {
        super(x,y,width,height);
        this.margin = 10;
    }
    drawButton(){
        if(this.detectHover()){
            console.log("DW");
            rect(this.x-this.margin, this.y-this.margin, this.width+this.margin*2, this.height+this.margin*2);
        }else{
            rect(this.x, this.y, this.width, this.height);
        }
    }
}