var questions = {
    1: {'type': 'multiple', 'question': 'What is the parent class for beers?','answer': 'Barley', 'options': ['Barley', 'Wheat', 'Marijuana']},
    2: {'type': 'multiple', 'question': 'What does Antibeermorphism mean?','answer': 'Don`t touch my beer!', 'options': ['Buy me a beer!', 'Go to the toilet!', 'Don`t touch my beer!']},
    3: {'type': 'multiple', 'question': 'Override Beer ToString()','answer': 'I love beer!', 'options': ['My precious!', 'I love beer!', 'Did you go to the toilet?']},
    4: {'type': 'multiple', 'question': 'Most popular method for drinking beer?','answer': 'From the bottle!', 'options': ['From the bottle!', 'Mixed with vodka!', 'I think i have to go to the toilet...']},
    5: {'type': 'multiple', 'question': 'Got back from the toilet, any beers left?','answer': 'Yes', 'options': ['Yes', 'No', 'Only Non-Alcoholic']},
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
