class CarInfoBox {
    drawBox(car) {
        //Renders information about chosen car 

        textSize(21);

        //Set box variables
        const boxHeight = height / 3;
        const boxWidth = width;
        const boxX = 0;
        const boxY = height * 2 / 3;

        //Renders information
        fill(255);
        rect(boxX, boxY, boxWidth, boxHeight);
        fill(0);
        text(car.name, boxWidth/2, boxY + 50);
        fill(255);
    }
}