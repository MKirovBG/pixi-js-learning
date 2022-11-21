let app;
let player;
let keys = {};
let keysDiv;

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
	// app.stage.interactive = true;

	/* stage the changes with function which is making the movement
	 the stage takes two arguments (name, function)*/

	// app.stage.on('pointermove', movePlayer);

	// Keyboar event handler
	window.addEventListener('keydown', keysDown);
	window.addEventListener('keyup', keysUp);

	//add Ticker

	app.ticker.add(gameLoop);

	keysDiv = document.querySelector('#keys');
};

// w s a d
// 87 83 65 68

function keysDown(e) {
	keys[e.keyCode] = true;
}

function keysUp(e) {
	keys[e.keyCode] = false;
}

function gameLoop(e) {
	keysDiv.innerHTML = JSON.stringify(keys);

	if (keys['87']) {
		player.y -= 5;
	}
	if (keys['83']) {
		player.y += 5;
	}
	if (keys['65']) {
		player.x -= 5;
	}
	if (keys['68']) {
		player.x += 5;
	}
}

// follow mouse function on hover

/*
function movePlayer(e) {
	let position = e.data.global;

	player.x = position.x;
	player.y = position.y;
}
*/
