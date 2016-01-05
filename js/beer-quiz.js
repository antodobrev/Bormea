var questions = {
	1: {'type': 'multiple', 'question': 'What was the most difficult part of the Advanced C# Course?','answer': 'Regex', 'options': ['Strings', 'Regex', 'Dictionaries']},
	2: {'type': 'multiple', 'question': '10','answer': '2', 'options': ['2', '1', '12']},
	3: {'type': 'open', 'question': 'Nakov\'s first name','answer': 'Svetlin', 'options': []},
	4: {'type': 'multiple', 'question': '11','answer': 3, 'options': ['2', 'Nakov', '3']},
	5: {'type': 'open', 'question': 'What is printed in the console?<br>var foo = function foo() {<br>   console.log(foo === foo);<br>};<br>foo();','answer': 'true', 'options': []},
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
		beer.style.background = "url(./images/beer-sprite-transparent.png) no-repeat";
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