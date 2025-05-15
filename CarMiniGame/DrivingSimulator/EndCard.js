class EndCard {
    constructor(x, y, score, copAnger) {
        this.gX = x;
        this.gY = y;
        this.gS = score;
        this.gC = copAnger;
        this.scaleFactor = 3; // Increased size by 3x
    }

    drawEndCard() {
        let x = this.gX;
        let y = this.gY;
        let score = this.gS;
        let copAnger = this.gC;
        let s = this.scaleFactor;

        push();
            fill(0,0,0,128);
            rect(0,0,width,height);
        pop();

        push();
            translate(x, y);

            scale(s); // Scale up everything by 3x

            // Background panel 
            fill(20, 20, 30, 220);
            stroke(0, 255, 150);
            strokeWeight(3 / s); 
            rect(-100, -60, 200, 120, 10);

            // Score Display 
            fill(255);
            noStroke();
            textSize(16 / s);
            textAlign(CENTER, CENTER);
            text("Score: " + score, 0, -30);

            // Cop Anger Meter 
            textSize(14 / s);
            text("Cop Anger", 0, 10);

            let meterWidth = 160;
            let meterHeight = 10;
            let angerFill = map(copAnger, 0, 100, 0, meterWidth);

            stroke(255);
            noFill();
            rect(-meterWidth / 2, 25, meterWidth, meterHeight, 5 / s);

            noStroke();
            fill(255, 0, 0);
            rect(-meterWidth / 2, 25, angerFill, meterHeight, 5 / s);
        pop();
    }
}