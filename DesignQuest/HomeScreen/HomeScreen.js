class HomeScreen { 
    static drawScreen() {
        const title = "SUSTAINABLE SCHOOL";
        const playButton = new PlayButton(width/2-150, height/2-50, 300, 100);
        background(0,0,220);
        textSize(62);  
        textAlign(CENTER,CENTER);
        text(title, width/2, 200);   
        playButton.drawButton();
    }
}