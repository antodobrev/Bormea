var questions = {
	1: {'type': 'multiple', 'question': 'What is the average alcohol % in lager beers?','answer': '5%', 'options': ['3%', '10%', '5%']},
	2: {'type': 'multiple', 'question': 'Hops and hemp belong to the same botanical family.','answer': 'True', 'options': ['True', 'False']},
	3: {'type': 'multiple', 'question': 'Lager beers have always light color.', 'answer': 'False', 'options': ['True', 'False']},
	4: {'type': 'multiple', 'question': 'Ales are served colder than lagers.','answer': 'False', 'options': ['True', 'False']},
	5: {'type': 'multiple', 'question': 'What is typical for lager beer properties:','answer': 'Its bitterness', 'options': ['Its bitterness', 'Its aroma']},
}
var currentQuestion = 1;

displayQuestion = function() {
	console.log(currentQuestion);
	var board = document.getElementById('board');
	var nextQuestionType = questions[currentQuestion]['type'];
	if (nextQuestionType == 'multiple') {
		document.getElementById("multiple-form").style.display = "block";
		document.getElementById("open-form").style.display = "none";

		var choices = questions[currentQuestion]['options'];
		document.getElementById("multiple-form-options").innerHTML = "";
		choices.forEach(function(choice) {
			document.getElementById("multiple-form-options").innerHTML += '<p><input type="radio" name="answer" value=\''  + choice + '\'/>' + choice + '</p>';
		})
	} else {
		document.getElementById("open-form").style.display = "block";
		document.getElementById("multiple-form").style.display = "none";

	}
	document.getElementById('question-text').innerHTML = questions[currentQuestion]['question'];
	board.setAttribute('questionID', currentQuestion);
	var nextBeer = document.getElementById('beer-' + currentQuestion);
	nextBeer.setAttribute("active", "active");
}
checkAnswer = function() {
	var board = document.getElementById('board');
	var answer = document.getElementById('user-input').value;
	displaySuccessMessage(answer);
}

checkMultipleAnswer = function() {
	var radios = document.getElementsByName('answer');
	var answer = "";
	for (var i = 0, length = radios.length; i < length; i++) {
		if (radios[i].checked) {
			answer = radios[i].value;
			break;
		}
	}
	displaySuccessMessage(answer);
}

displaySuccessMessage = function(answer) {
	var correctAnswer = questions[board.getAttribute('questionID')]['answer'];
	var beer = document.getElementById('beer-' + currentQuestion);
	if (answer==correctAnswer) {
		//alert('Success');
		clearMessage();
		board.innerHTML = board.innerHTML + "<p class=\"cor-answer\"> Correct!</p>";
		beer.style.background = "url(../images/beer-sprite-transparent.png) no-repeat";
	} else {
		//alert('oh, no');
		clearMessage();
		board.innerHTML = board.innerHTML + "<p class=\"incorrect-answer\"> Wrong!</p>";
	}
	beer.removeAttribute("active");
}

function clearMessage () {
	var correctAnwerDiv = document.getElementsByClassName('cor-answer')[0];
	if (correctAnwerDiv) {
		correctAnwerDiv.parentNode.removeChild(correctAnwerDiv);
	};
	var incorrectAnwerDiv = document.getElementsByClassName('incorrect-answer')[0];
	if (incorrectAnwerDiv) {
		incorrectAnwerDiv.parentNode.removeChild(incorrectAnwerDiv);
	};
}

displayQuestion();