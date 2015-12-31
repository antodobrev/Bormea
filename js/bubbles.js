moveBackground = function() {
	var y = 0;
	var element = document.getElementById('main');
	setInterval(function(){
		y -= 1;
		element.style.backgroundPosition = '0 ' + y + 'px';
	}, 30);
}

moveBackground();