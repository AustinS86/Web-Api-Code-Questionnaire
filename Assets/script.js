//My var that will be used throughout the JS
var startBtn = document.getElementById("startBtn");
var time = 60;
var timeLeft = true;
var timeStart = false;
var countdownTimer = document.getElementById("countdownTimer");
var mainscreen = document.getElementById("main-screen");
var questionList = document.getElementById("question-list");
var choices0 = document.getElementById("choices0");
var choices1 = document.getElementById("choices1");
var choices2 = document.getElementById("choices2");
var choices3 = document.getElementById("choices3");
var correctAnswer = document.getElementById("correctanswer");
var submitBtn = document.getElementById('submit-name');
var highScores = [];
var output = "";
var score = 0;
var i = 0;

//
var countdownTimerInterval = setInterval(setcountdownTimer, 1000);
function setcountdownTimer() {
    if (timeStart)
        time--;
    if (time <= 0) {
        end_questions();
        time = 0;
    }
    document.getElementById("time-left").innerHTML = time;
}
// The questions that will be asked during the test
var questions = [

    {
        question: "The condition in an if / else statement is enclosed within ____.",
        choices: [" quotes", "curly brackets", " parentheses", " square brackets"],
        correctAnswer: 2
    },

    {
        question: "Commonly used data types DO NOT include:",
        choices: [" strings", " booleans", " alerts", " numbers"],
        correctAnswer: 2
    },
    {
        question: "Arrays in Javascript can be used to store___",
        choices: [" numbers & strings",  "other arrays", "booleans",  "all of the above"],
        correctAnswer: 3
    },

    {
        question: "What HTML tag would you put the JS <scripted> tag under?",
        choices: [" <head>",  "<body>",  "<footer>",  "<meta>"],
        correctAnswer: 1
    },

    {
        question: "String values must be enclosed within ____ when being assigned to variables",
        choices: [" commas", "curly brackets", " quotes", " parentheses"],
        correctAnswer: 2
    },

]
//Starts the questions as soon as you press start
startBtn.addEventListener("click", function(){
    questionnaire.style.display = "block";
    countdownTimer.style.display = "block";
    document.getElementById("score-total").style.display = "block";
    document.getElementById("score").innerHTML = score;
    setcountdownTimer();
    setQuestionnairequestions();
    timeStart = true;
});

function setQuestionnairequestions() {
    questionList.textContent = questions[i].question;
    choices0.textContent = questions[i].choices[0];
    choices1.textContent = questions[i].choices[1];
    choices2.textContent = questions[i].choices[2];
    choices3.textContent = questions[i].choices[3];
};
// The events that will take place and will choose if it was a wrong answer or a correct one.
choices0.addEventListener("click", function (event) {
    event.stopPropagation();
    correctAnswer = questions[i].correctAnswer;
    console.log("correctAnswer" + correctAnswer);

    if (0 === correctAnswer) {
        document.getElementById("Answer").innerHTML = "Correct! Next question.";
        setTimeout(function () {
            document.getElementById("Answer").innerHTML = "";
        },
            1000
        );
        score++;
        document.getElementById("final-score").innerHTML = score;

    } else {
        timeLeft -= 10;
        document.getElementById("Answer").innerHTML = "Wrong! Next Question.";
        setTimeout(function () {
            document.getElementById("Answer").innerHTML = "";
        },
            1000
        );
    }
    if (i >= questions.length - 1) {
        end_questions();
    } else {
        i++
        setQuestionnairequestions();
    };
});

choices1.addEventListener("click", function (event) {
    event.stopPropagation();
    correctAnswer = questions[i].correctAnswer;
    console.log("correctAnswer" + correctAnswer);

    if (1 === correctAnswer) {
        document.getElementById("Answer").innerHTML = "Correct! Next question.";
        setTimeout(function () {
            document.getElementById("Answer").innerHTML = "";
        },
            1000
        );
        score++;
        document.getElementById("final-score").innerHTML = score;

    } else {
        timeLeft -= 10;
        document.getElementById("Answer").innerHTML = "Wrong! Next Question.";
        setTimeout(function () {
            document.getElementById("Answer").innerHTML = "";
        },
            1000
        );
    }
    if (i >= questions.length - 1) {
        end_questions();
    } else {
        i++
        setQuestionnairequestions();
    };
});

choices2.addEventListener("click", function (event) {
    event.stopPropagation();
    correctAnswer = questions[i].correctAnswer;
    console.log("correctAnswer" + correctAnswer);

    if (2 === correctAnswer) {
        document.getElementById("Answer").innerHTML = "Correct! Next question.";
        setTimeout(function () {
            document.getElementById("Answer").innerHTML = "";
        },
            1000
        );
        score++;
        document.getElementById("final-score").innerHTML = score;

    } else {
        timeLeft -= 10;
        document.getElementById("Answer").innerHTML = "Wrong! Next Question.";
        setTimeout(function () {
            document.getElementById("Answer").innerHTML = "";
        },
            1000
        );
    }
    if (i >= questions.length - 1) {
        end_questions();
    } else {
        i++
        setQuestionnairequestions();
    };
});

choices3.addEventListener("click", function (event) {
    event.stopPropagation();
    correctAnswer = questions[i].correctAnswer;
    console.log("correctAnswer" + correctAnswer);

    if (3 === correctAnswer) {
        document.getElementById("Answer").innerHTML = "Correct! Next question.";
        setTimeout(function () {
            document.getElementById("Answer").innerHTML = "";
        },
            1000
        );
        score++;
        document.getElementById("final-score").innerHTML = score;

    } else {
        timeLeft -= 10;
        document.getElementById("Answer").innerHTML = "Wrong! Next Question.";
        setTimeout(function () {
            document.getElementById("Answer").innerHTML = "";
        },
            1000
        );
    }
    if (i >= questions.length - 1) {
        end_questions();
    } else {
        i++
        setQuestionnairequestions();
    };
});

function end_questions() {
    document.getElementById("end").style.display = "block";
    document.getElementById("questionnaire").style.display = "none";
    document.getElementById("countdownTimer").style.display = "none";
    document.getElementById("score-total").style.display = "none";
    document.getElementById("Answer").innerHTML = "";
    document.getElementById("final-score").innerHTML = score;
}

submitBtn.addEventListener('click', function() {
    console.log("Submitted Score")
   
    
    
    // grab the currently stored data
    let currentData = localStorage.getItem('highscores');
    console.log(currentData);
    console.log(typeof currentData);  
    
    // convert to JS obj
    let jsCurrent = JSON.parse(currentData)
    console.log(jsCurrent);
    console.log(typeof jsCurrent);
    
    
    var newScore = {
        name: document.getElementById("name").value,
        score: score
    }
    jsCurrent.push(newScore);
    // verify that we have JS OBJ data
    console.log("Scores:", jsCurrent);
    


    

    // update localStorage
    localStorage.setItem('highscores', JSON.stringify(jsCurrent))

})

function submit_score() {
    
}

document.getElementById("questionnaire").style.display = "none";
document.getElementById("end").style.display = "none";
document.getElementById("view-high-scores").style.display = "block";

output = "";
for (let i = 0; i < highScores.length; i++) {
    output = output + "" + highScores[i];
}
document.getElementById("high-scores").innerHTML = output;
clear();


function clear_sc() {
    highScores = [];
}

function clear() {
    time = 60;
    timeLeft = true;
    timeStart - false;
    i = 0
    score = 0;
}

// Lets you grab the stored data
var storedData = localStorage.getItem('highscores');

if(!storedData) {
    localStorage.setItem('highscores', "[]");
}
