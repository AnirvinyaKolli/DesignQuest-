class CarInfoBox {
    drawBox(car){
        textSize(21);
        const boxHeight = height/3;
        const boxWidth = width;
        const boxX = 0; 
        const boxY = height*2/3;
        rect(boxX,boxY, boxWidth, boxHeight);
        text(car.name, boxX+50, boxY+50);
    }
}