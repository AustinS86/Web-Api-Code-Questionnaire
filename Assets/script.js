var startBtn = document.getElementById("startBtn");
var time = 75;
var timeLeft = true;
var timeStart = false;
var timer = document.getElementById("timer");
var mainscreen = document.getElementById("main-screen");
var questionList = document.getElementById("question-list");
var choices0 = document.getElementById("choices0");
var choices1 = document.getElementById("choices1");
var choices2 = document.getElementById("choices2");
var choices3 = document.getElementById("choices3");
var correctAnswer = document.getElementById("correctanswer");
var highScores = [];
var output = "";
var score = 0;
var i = 0;


var TimerInterval = setInterval(setTimer, 1000);
function TimerInterval() {
    if (timeStart)
        time--;
    if (time <= 0) {
        end_questionnaire();
        time = 0;
    }
    document.getElementById("time-left").innerHTML = time;
}

var questions = [

    {
        question: "The condition in an if / else statement is enclosed within ____.",
        choices:["0) quotes", "1) curly brackets", "2) parentheses", "3) square brackets"],
        correctanswer: "parentheses"
    },

    {
        question: "Commonly used data types DO NOT include:",
        choices: ["0) strings", "1) booleans", "2) alerts", "3) numbers"],
        correctanswer: "alerts",
    },
    {
        question: "Arrays in Javascript can be used to store___",
        choices:"0) numbers & strings, 1) other arrays,2) booleans, 3) all of the above",
        correctanswer: "all of the above",
    },

    {
        question: "What HTML tag would you put the JS <scripted> tag under?",
        choices:["0) <head>, 1) <body>, 2) <footer>, 3) <meta>"],
        correctanswer: "<body>"
    },

    {
        question: "String values must be enclosed within ____ when being assigned to variables",
        choices: ["0) commas", "1) curly brackets", "2) quotes", "3) parentheses"],
        correctanswer: "quotes"
    },

]

startBtn.addEventListener("click", function() {
    questionnaire.style.display = "block";
    main-screen.style.display ="none";
    timer.style.display= "block";
    document.getElementById("score-total").style.display= "block";
    document.getElementById("score").innerHTML = score;
    setCountdownTimer();
    setQuizQuestions();
    timeStart= true;
});

function setQuestionnairequestions() {
    questionList.textContent = questions[i].question;
    choices0.textContent = questions[i].choices[0]; 
    choices1.textContent = questions[i].choices[1]; 
    choices2.textContent = questions[i].choices[2]; 
    choices3.textContent = questions[i].choices[3]; 
    };