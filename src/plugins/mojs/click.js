import mojs from 'mo-js'

//click animation
export default function normal() {
	const OPTS = {
		fill: 'none',
		radius: 25,
		strokeWidth: { 50 : 0 },
		scale: { 0: 1 },
		angle: { 'rand(-35, -70)': 0 },
		duration: 500,
		left: 0,
		top: 0,
		easing: 'cubic.out'
	};

	const circle1 = new mojs.Shape({
		...OPTS,
		stroke: 'cyan',
	});

	const circle2 = new mojs.Shape({
		...OPTS,
		radius: { 0 : 15 },
		strokeWidth: { 30: 0 },
		stroke: 'magenta',
		delay: 'rand(75, 150)'
	});

	const mainCircle = new mojs.Shape({
		...OPTS,
		stroke: 'cyan',
	});

	const smallCircles = [];
	const colors = [ 'deeppink', 'magenta', 'yellow', '#00F87F' ]

	for ( let i = 0; i < 5; i++ ) {
		smallCircles.push(new mojs.Shape({
			...OPTS,
			parent: circle1.el,
			radius: { 0 : 15 },
			strokeWidth: { 30: 0 },
			left: '50%',
			top: '50%',
			stroke: colors[ i % colors.length],
			delay: 'rand(0, 350)',
			x: 'rand(-50, 50)',
			y: 'rand(-50, 50)',
			radius: 'rand(3, 10)'
		}))
	}

	document.addEventListener( 'click', function (e) {
		circle1.tune({ x: e.pageX, y: e.pageY  }).replay();
		circle2.tune({ x: e.pageX, y: e.pageY  }).replay();
		for ( let i = 0; i < smallCircles.length; i++ ) {
			smallCircles[i].generate().replay();
		}

	});
}
