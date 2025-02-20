class GameSelectionScreen extends Screen {

    //Elements of the screen 
    static gameChoices = [];
    static drivingGameButton;

    static initializeScreen() {
        //Initalize values & elements 
        GameSelectionScreen.gameChoices.push(new NextScreenButton(CarSelectorScreen, true, width/2, height/2));
    }

    static drawScreen() {
        GameSelectionScreen.gameChoices.forEach(g => g.drawButton());
    }
}