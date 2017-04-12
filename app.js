function populate() {
    if (quiz.isEnded()){
        showScores();
    }
    else {
        var element = document.getElementById("question");
        element.innerHTML = quiz.getQuestionIndex().text;

        var choices = quiz.getQuestionIndex().choices;
        for (var i = 0; i< choices.length; i++){
            var element = document.getElementById("choice" + i);
            element.innerHTML = choices[i];
            guess("btn" + i, choices[i]);
        }

        showProgress();
    }
};

function guess(id, guess) {
    var button = document.getElementById(id);
    button.onclick = function () {
        quiz.guess(guess);
        populate();
    }
};

function showProgress() {
    var currentQuestionNumber = quiz.questionIndex + 1;
    var element = document.getElementById("progress");
    element.innerHTML = "Вопрос " + currentQuestionNumber + " из " + quiz.questions.length;
}

function showScores() {
    var gameOverHtml = "<h1>Результат</h1>";
        gameOverHtml += "<h2 id='score'> Всего баллов: " + quiz.score + "</h2>";
        var element = document.getElementById("quiz");
        element.innerHTML = gameOverHtml;
};

var questions = [
    new Question("Какой тег отвечает за стилизацию элементов в HTML?", ["body", "html", "style", "head"], "style"),
    new Question("Какой тег отвечает за стилизацию элементов в HTML?", ["body", "html", "style", "head"], "style"),
    new Question("Какой тег отвечает за стилизацию элементов в HTML?", ["body", "html", "style", "head"], "style"),
    new Question("Какой тег отвечает за стилизацию элементов в HTML?", ["body", "html", "style", "head"], "style"),
    new Question("Какой тег отвечает за стилизацию элементов в HTML?", ["body", "html", "style", "head"], "style"),
    new Question("Какой тег отвечает за стилизацию элементов в HTML?", ["body", "html", "style", "head"], "style"),
    new Question("Какой тег отвечает за стилизацию элементов в HTML?", ["body", "html", "style", "head"], "style"),
    new Question("Какой тег отвечает за стилизацию элементов в HTML?", ["body", "html", "style", "head"], "style"),
    new Question("Какой тег отвечает за стилизацию элементов в HTML?", ["body", "html", "style", "head"], "style"),
    new Question("Какой тег отвечает за стилизацию элементов в HTML?", ["body", "html", "style", "head"], "style"),
    new Question("Какой тег отвечает за стилизацию элементов в HTML?", ["body", "html", "style", "head"], "style"),
    new Question("Какой тег отвечает за стилизацию элементов в HTML?", ["body", "html", "style", "head"], "style"),
    new Question("Какой тег отвечает за стилизацию элементов в HTML?", ["body", "html", "style", "head"], "style"),
    new Question("Какой тег отвечает за стилизацию элементов в HTML?", ["body", "html", "style", "head"], "style"),
    new Question("Какой тег отвечает за стилизацию элементов в HTML?", ["body", "html", "style", "head"], "style"),
    new Question("Какой тег отвечает за стилизацию элементов в HTML?", ["body", "html", "style", "head"], "style"),
    new Question("Какой тег отвечает за стилизацию элементов в HTML?", ["body", "html", "style", "head"], "style"),
    new Question("Какой тег отвечает за стилизацию элементов в HTML?", ["body", "html", "style", "head"], "style"),
    new Question("Какой тег отвечает за стилизацию элементов в HTML?", ["body", "html", "style", "head"], "style"),
    new Question("Какой тег отвечает за стилизацию элементов в HTML?", ["body", "html", "style", "head"], "style")
];

var quiz = new Quiz(questions);

populate();