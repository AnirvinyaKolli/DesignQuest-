class HomeScreen extends Screen {

    //Elements of the screen
    static title = "Safe Driving!";
    static playButton;

    static initializeScreen() {

        //Initalize values & elements 
        textSize(62);
        textAlign(CENTER, CENTER);
        HomeScreen.playButton = new NextScreenButton(CarSelectorScreen, true);
    }

    static drawScreen() {

        //render screen
        background(0, 0, 220);
        push();
        textSize(62);
        fill(255);
        stroke(0);
        text(HomeScreen.title, width / 2, 200);
        pop();
        HomeScreen.playButton.drawButton();
    }
}