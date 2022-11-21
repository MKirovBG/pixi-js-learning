let app;
let player;

window.onload = function () {
	//Create the application
	app = new PIXI.Application({
		//  set values as object with CSS properties
		width: 600,
		height: 600,
		backgroundColor: 0xaaaaaa,
	});

	//add the app to the DOM
	document.body.appendChild(app.view);

	// add image to the application
	player = PIXI.Sprite.from('./images/cat.png');

	// position the image
	player.anchor.set(0.5);
	player.x = app.view.width / 2;
	player.y = app.view.height / 2;

	// stage the image to the APP / update DOM
	app.stage.addChild(player);

	//interaction - Move with mouse
	app.stage.interactive = true;
	// stage the changes with function which is making the movement
	// the stage takes two arguments (name, function)
	app.stage.on('pointermove', movePlayer);
};

// follow mouse function on hover
function movePlayer(e) {
	let position = e.data.global;

	player.x = position.x;
	player.y = position.y;
}
