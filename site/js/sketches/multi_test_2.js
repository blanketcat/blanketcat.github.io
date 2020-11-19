// var height = document.body.clientHeight;

const backgroundSketch = ( p ) => {

	let x = 100; 
	let y = 100;

	p.setup = function() {
		p.createCanvas(document.getElementById('intro-space').offsetWidth, document.getElementById('intro').offsetHeight);
	};

	p.draw = function() {
		// p.background('rgba(0,0,0,0.5)');
		
		p.rect(x,y,50,50);
	};
};

const backgroundSketchTwo = ( p1 ) => {
	console.log(document);
	let radius = 18;
	let width_interval = 3 * radius;
	let height_interval = (radius)*Math.sqrt(3) / 2;
	let first_pass = true;
	let pass = 0;
	let gate = 0;
	let chance = 0.01

	p1.setup = function() {
		p1.createCanvas(
			document.body.clientWidth,
			document.body.clientHeight
		);
	}

	p1.draw = function() {
		let height = document.body.clientHeight
		let width = document.body.clientWidth
		if (first_pass===true) {
			// p1.background('rgba(0,0,0,0.5)');
			p1.clear();
			
			for (let h = 0; h < height; h += height_interval) {
				gate = (gate + 1) % 2
				for (let i = 0; i < (width + width_interval); i += width_interval) {
					p1.push();
					if (gate === 1) {
						p1.translate(i, h);
					} else {
						p1.translate(i + width_interval/2, h);
						// p1.translate(i + pass % width_interval, h);
					}
						p1.color('rgba(228,228,228,0)')
						p1.fill('rgba(0,0,0,0.5)')
					if (Math.random() > chance) {
						p1.polygon_noise(0, 0, radius, 6, 0.1866);
					}
						p1.polygon(0, 0, radius, 6);
						p1.fill('rgba(196,196,196,0.15)')
						p1.pop();
				}
				pass += width_interval/60
			// p1.background('rgba(0,0,0,0.0075)');
			}
			// pass += 0.1
			first_pass=false
		}
	}

	p1.polygon = function(x, y, radius, npoints) {
		let angle = p1.TWO_PI / npoints;
		p1.beginShape();
		for (let a = 0; a < p1.TWO_PI; a += angle) {
			let sx = x + p1.cos(a) * radius;
			let sy = y + p1.sin(a) * radius;
			p1.vertex(sx, sy);
		}
		p1.endShape(p1.CLOSE);
	}

	p1.polygon_noise = function(x, y, radius, npoints, chance) {
		let angle = p1.TWO_PI / npoints;
		p1.beginShape();
		for (let a = 0; a < p1.TWO_PI; a += angle) {
			let sx = x + p1.cos(a) * radius;
			let sy = y + p1.sin(a) * radius;
			if (Math.random() > chance) {
				p1.vertex(sx, sy);
			}
		}
		p1.endShape(p1.CLOSE);
	}
}

const headerSketch = ( p2 ) => {

}

let backgroundp5 = new p5(backgroundSketchTwo, 'background-container');
// let introspace = new p5(backgroundSketch, 'intro-space');
