class Car {
    constructor(drivingSprite, showCaseSprite, name) {
        //Driving Section
        this.drivingSprite = drivingSprite;

        //Showcase section
        this.showCaseSprite = showCaseSprite;
        this.name = name;
    }
    getName() {

        //Return name
        return this.name;
    }
}