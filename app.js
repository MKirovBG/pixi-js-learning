let app;
let player;
let keys = {};
let titleDiv;
let backgroundView;

window.onload = function () {
	//Create the application
	app = new PIXI.Application({
		//  set values as object with CSS properties
		width: 1200,
		height: 650,
		backgroundColor: 0xaaaaaa,
	});

	//add the app to the DOM
	document.body.appendChild(app.view);

	// add image to the application
	player = PIXI.Sprite.from('./images/cat.png');
	backgroundView = PIXI.Sprite.from('./images/forest-background-vector.webp');

	// position the player
	player.anchor.set(0.5);
	player.x = 70; // starting X
	player.y = 520; // starting Y

	// Background Image
	backgroundView.y = backgroundView.y - 30; // position background

	//make the background image move when chareter moves x && make the image infinite !!!!

	// stage the image to the APP / update DOM
	app.stage.addChild(backgroundView);
	app.stage.addChild(player);

	// Keyboar event handler
	window.addEventListener('keydown', keysDown);
	window.addEventListener('keyup', keysUp);

	//add Ticker

	app.ticker.add(gameLoop);

	titleDiv = document.querySelector('#title'); // add title
	titleDiv.innerHTML = '<h1>Test Window</h1>'; // update Dom
};

function keysDown(e) {
	keys[e.keyCode] = true; // function when button on keyboard is pressed down
}

function keysUp(e) {
	keys[e.keyCode] = false; // function when button on keyboard is re-leased
}

function jump(playerY) {
	// jump function
	while (playerY <= 520) {
		return (player.y += 10); // reset player to default 520 by adding 10 as speed
	}
}

function gameLoop(e) {
	// main game loop

	// w s a d
	// 87 83 65 68

	if (keys['65']) {
		player.x -= 5; // moving Left - A
	}
	if (keys['68']) {
		player.x += 5; // moving Right - D
	}

	if (keys['87']) {
		if (player.y > 400) {
			// set range 520 -> 400
			player.y -= 15; //  Jump - W
			if (player.y == 400) {
				// if y == 400 call jump()
				jump(player.y);
			}
		}
	}

	if (keys['87'] == false) {
		// when W is released call the reset function
		// after Jump run jump() to reset to default
		jump(player.y);
	}

	if (keys['83'] && keys['68']) {
		player.x += 10; // slide right - D + S
	}
	if (keys['83'] && keys['65']) {
		player.x -= 10; // slide left - A + S
	}

	// if (keys['32']) { // disabling Spacebar movement
	// 	player.y -= 15; // Jump / Slide ???
	// }
}
