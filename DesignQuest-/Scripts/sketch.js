let thing;
function setup() {
	new Canvas(500, 500);
	displayMode('centered');
	thing = new Test(width/2, height/2, 100,100);
}

function draw() {
	background('blue')
	thing.update();
}
