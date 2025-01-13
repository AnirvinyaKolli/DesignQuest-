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
        rect(boxX, boxY, boxWidth, boxHeight);
        text(car.name, boxX + 50, boxY + 50);
    }
}