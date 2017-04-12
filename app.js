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
    new Question("Какой тег отвечает за заголовки и подключение стилей?", ["body", "html", "style", "head"], "head"),
    new Question("Какой тег отвечает за версию документа?", ["body", "html", "style", "head"], "html"),
    new Question("Какой тег используется для написания обычного текста?", ["body", "html", "p", "pp"], "p"),
    new Question("Какой тег отображает текст в виде верхнего индекса?", ["sup", "sub", "em", "under"], "sup"),
    new Question("Какой тег обозначает выделенный текст?", ["mark", "sub", "quote", "utf"], "mark"),
    new Question("Какой тег предназначен для выделения длинных цитат?", ["cite", "blockquote", "q", "text"], "blockquote"),
    new Question("Какой тег добавляет строки в таблицу?", ["table", "tr", "td", "th"], "tr"),
    new Question("Какой тег обозначает ячейку внутри строки?", ["tr", "td", "hr", "table"], "td"),
    new Question("Чтобы выровнять текст, какое свойство нужно написать в CSS?", ["text-align", "center", "text-center", "margin"], "text-align"),
    new Question("Какой тег обозначает ссылку?", ["a", "href", "f", "link"], "a"),
    new Question("Какой тег используется для добавления всплывающей подсказки для ссылки?", ["title", "cite", "content", "href"], "title"),
    new Question("Какой тег используется для поля ввода?", ["input", "output", "press", "button"], "input"),
    new Question("Какой тип нужно написать в тег, чтобы получилась кнопка?", ["submit", "button", "press", "input"], "submit"),
    new Question("С помощью какого тега можно сделать надпись на кнопке?", ["text", "value", "font", "input"], "value"),
    new Question("С помощью какого тега можно сделать отметку галочкой?", ["checkbox", "submit", "ol", "check"], "checkbox"),
    new Question("С помощью какого тега создаётся раскрывающийся список?", ["list", "select", "id", "type"], "select"),
    new Question("Как тег делает поле-переключатель с точкой?", ["radio", "checked", "value", "change"], "radio"),
    new Question("Каким тегом задаются варианты ответов для списка?", ["option", "name", "radio", "variant"], "option"),
    new Question("Каким тегом можно сделать скрытое поле?", ["magic", "hidden", "hide", "option"], "hidden"),
    new Question("С помощью какого тега можно задать цвет фона страницы?", ["background", "color", "background-color", "bg"], "background-color")
];

var quiz = new Quiz(questions);

populate();