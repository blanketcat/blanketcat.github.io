

	var radius = 15;
	var width_interval = 3 * radius;
	var height_interval = (radius)*Math.sqrt(3) / 2;
	var first_pass = true;
	var pass = 0;
	var gate = 0;

	function setup() {
		var canvas = createCanvas(document.body.clientWidth, document.body.clientHeight, WEBGL);
		canvas.parent('background-container');
		var width = window.width;
		var height = window.height;
		console.log(width, height);
	}

	function draw() {
		if (first_pass===true) {
			background('rgba(128,128,128,0.005)');
			
			for (let h = 0; h < height; h += height_interval) {
				gate = (gate + 1) % 2
				for (let i = 0; i < (width + width_interval); i += width_interval) {
					push();
					if (gate === 1) {
						translate(i, h);
						rotate(0);
						rotateX(pass % width);
						rotateY(i/pass);
						rotateZ(i/10/pass);
					} else {
						translate(i + radius, h);
						rotate(90);
					}
					color('rgba(64,64,64,0.95)')
					fill('rgba(196,196,196,0.5)')
					polygon(0, 0, radius, 6);
					pop();
				}
			}
			first_pass=false
			// pass += 1;
		}
		

		// push();
		// translate(90, (60*Math.sqrt(3)/2));
		// polygon(0, 0, 60, 6);
		// pop();

	}

	function polygon(x, y, radius, npoints) {
		let angle = TWO_PI / npoints;
		beginShape();
		for (let a = 0; a < TWO_PI; a += angle) {
			let sx = x + cos(a) * radius;
			let sy = y + sin(a) * radius;
			vertex(sx, sy);
		}
		endShape(CLOSE);
	}

	function polygonField(r, xStagger, yStagger, nGon) {
		console.log('polygonField');
	}
