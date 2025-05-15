class PreDrivingScreen extends Screen {

    //Next Button
    static nextButton;

    //Inits screen values 
    static checkList = [];
    static checkListLabels = [];

    static initializeScreen() {

        //Next button definition
        PreDrivingScreen.nextButton = new NextScreenButton(DrivingSimulatorScreen);

        //List of labels
        PreDrivingScreen.checkListLabels = [
            "Seatbelt",
            "Wipers", 
            "Defrost"
        ];
        
        //List of check boxes
        const labelLen= PreDrivingScreen.checkListLabels.length;
        const buttonDist = 50;
        for(let i = 0; i<labelLen; i++){
            PreDrivingScreen.checkList.push(new CheckBox(PreDrivingScreen.checkListLabels[i],width/2, height/2-labelLen/2*buttonDist+buttonDist*i));
        }

    }
 
    static drawScreen() {
        background(155);

        //Draw next button
        PreDrivingScreen.nextButton.drawButton();

        //Draw each check box
        PreDrivingScreen.checkList.forEach(element => {
            element.drawButton();
        });

        
        if (PreDrivingScreen.checkList.some(instance => !instance.checked)) {
            PreDrivingScreen.nextButton.canGoNext = false;
        }else{
            console.log("DAŴ");
            PreDrivingScreen.nextButton.canGoNext = true;
        }
        
        
        
    }

}