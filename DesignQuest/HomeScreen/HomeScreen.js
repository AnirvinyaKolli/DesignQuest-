class HomeScreen extends Screen{ 
    static title = "SUSTAINABLE SCHOOL";
    static playButton;

    static initializeScreen(){
        textSize(62);  
        textAlign(CENTER,CENTER);
        HomeScreen.playButton = new PlayButton(width/2-150, height/2-50, 300, 100);
    }

    static drawScreen() {
        background(0,0,220);
        text(HomeScreen.title, width/2, 200);   
        HomeScreen.playButton.drawButton();
    }
}