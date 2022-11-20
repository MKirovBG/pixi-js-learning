const Application = PIXI.Application; // class to create a new PixiJS application.

const app = new Application({
	width: 800, // give width
	height: 600, // give hight
	transparent: false, // transparency 0
	antialias: true, // antialias
});

app.renderer.backgroundColor = 0x23395d; // change the background

app.renderer.resize(window.innerWidth, window.innerHeight); // give the app max width and hight

app.renderer.view.style.position = 'absolute'; // position the app absolute

document.body.appendChild(app.view); // update the DOM

const Graphics = PIXI.Graphics; // PIXI.Graphics is a draw method

/*
The Graphics class is primarily used to render primitive shapes such as lines, circles and rectangles to the display, and to color and fill them. However, you can also use a Graphics object to build a list of primitives to use as a mask, or as a complex hitArea.
*/

const rectangle = new Graphics();

rectangle
	.beginFill(0xaaa33bb)
	.lineStyle(4, 0xffa00, 1)
	.drawRect(200, 200, 100, 120)
	.endFill();

app.stage.addChild(rectangle);
