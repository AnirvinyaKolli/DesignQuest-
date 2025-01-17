class PreDrivingScreen extends Screen {

    //Inits screen values 
    static checkList = [];

    static initializeScreen() {

        //List of check boxes
        PreDrivingScreen.checkList = [
            new CheckBox("seatbelt", 300, height / 2),
            new CheckBox("seatbelt", 500, height / 2),

        ];
    }

    static drawScreen() {
        background(155);

        //Draw each check box
        PreDrivingScreen.checkList.forEach(element => {
            element.drawButton();
        });

    }

}