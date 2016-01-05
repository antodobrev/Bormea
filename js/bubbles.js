moveBackground = function() {
	var y = 0;
	var x = 5;
	var movingDown = true;
	var element = document.getElementById('main');
	setInterval(function(){
		y -= 1;
		if (movingDown) {
			x -= 0.5;
		} else {
			x += 0.5;
		}
		if (x == -6) {
			movingDown = false;
		};
		if (x == 6) {
			movingDown = true;
		};
		element.style.backgroundPosition = x + 'px ' + y + 'px';
		console.log(x);
	}, 30);
}

moveBackground();