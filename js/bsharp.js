var questions = {
	1: {'type': 'multiple', 'question': 'What is the most popular beer style worldwide?','answer': 'Lager', 'options': ['Ale', 'Lager', 'Guiness']},
	2: {'type': 'multiple', 'question': 'Stolichno produces a dark beer of which style?','answer': 'Bock', 'options': ['Weiss', 'Stout', 'Bock']},
	3: {'type': 'multiple', 'question': 'Nakov\'s favourite sound check word?','answer': 'Bira', 'options': ['Rakia', 'Bira', 'Proba']},
	4: {'type': 'multiple', 'question': 'The Lager style name comes from the type of yeast in use?','answer': 'True', 'options': ['True', 'False']},
	5: {'type': 'multiple', 'question': 'Which beer style is most popular in Belgium?','answer': 'Ale', 'options': ['Ale', 'Lager', 'Dubbel']},
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
	board.innerHTML = questions[currentQuestion]['question'];
	board.setAttribute('questionID', currentQuestion);
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
	if (answer==correctAnswer) {
		alert('Success');
	} else {
		alert('oh, no');
	}
}

displayQuestion();