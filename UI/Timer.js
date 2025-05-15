class Timer {
    constructor(duration) {
      this.duration = duration; 
      this.startTime = millis();
      this.finished = false;
    }
  
    reset() {
      this.startTime = millis();
      this.finished = false;
    }
  
    timeLeft() {
      let elapsed = millis() - this.startTime;
      let remaining = max(0, this.duration - elapsed);
      if (remaining === 0) {
        this.finished = true;
    }
      return remaining.toFixed(1);
    }
  
    isFinished() {
      return this.finished;
    }
  }