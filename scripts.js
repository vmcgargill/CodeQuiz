// Get all of the HTML elements by their IDs
const StartQuizButton = document.getElementById("StartQuizButton");
const ShowHighScore = document.getElementById("ShowHighScore");
const SubmitAnswerForm = document.getElementById("SubmitAnswerForm");
const QuizQuestion = document.getElementById("QuizQuestion");
const AnswerForm = document.querySelectorAll('input[name="AnswerForm"]');
const A = document.getElementById("A");
const LA = document.getElementById("LA");
const B = document.getElementById("B");
const LB = document.getElementById("LB");
const C = document.getElementById("C");
const LC = document.getElementById("LC");
const D = document.getElementById("D");
const LD = document.getElementById("LD");
const SubmitAnswerButton = document.getElementById("SubmitAnswerButton");
const CancelQuizButton = document.getElementById("CancelQuizButton");
const ShowCorrectAnswer = document.getElementById("ShowCorrectAnswer");
const NextQuestionButton = document.getElementById("NextQuestionButton");
const timer = document.getElementById("timer");
const ShowScore = document.getElementById("ShowScore");
const EndQuizButton = document.getElementById("EndQuizButton");

// Set Global Variables
var UserHighScore = 0;
var UserScore = 0;
var qIndex = 0;
let UserAnswer;

// Create array of questions and answers
let questions = [
    {
        question: "What is HTML?",
        A: "Hypertext Markup Language",
        B: "A styling language",
        C: "A microsoft word document",
        D: "A website",
        answer: "Hypertext Markup Language" 
    },
    {
        question: "What is JavaScript?",
        A: "Hyper text transfer protocal",
        B: "A programming language",
        C: "A computer application",
        D: "An addressbook for the internet",
        answer: "A programming language"
    },
    {
        question: "What is CSS?",
        A: "An internet web browser",
        B: "A control system",
        C: "Casscading Style Sheet",
        D: "A software program",
        answer: "Casscading Style Sheet"
    },
    {
        question: "What is an API?",
        A: "A programming language",
        B: "A database",
        C: "Application Programming Interface",
        D: "HTML navigation bar",
        answer: "Application Programming Interface"
    },
    {
        question: "What is Python?",
        A: "A Snake",
        B: "High-level programming language",
        C: "The language that Lord Voldemort speaks",
        D: "A type of web browser",
        answer: "High-level programming language"
    },
    {
        question: "What is JSON?",
        A: "A method that HTML gets CSS",
        B: "A JavaScript function",
        C: "JavaScript Object Notation",
        D: "My friend named Jason",
        answer: "JavaScript Object Notation"
    },
    {
        question: "What does Object Oriented Programming mean?",
        A: "A programming paradigm that involves objects and datasets",
        B: "An application that uses physical objects",
        C: "A website that displays pictures of objects",
        D: "An object that is used to write programs",
        answer: "A programming paradigm that involves objects and datasets"
    },
    {
        question: "What is git?",
        A: "The word 'get' but mispelled",
        B: "A programming language",
        C: "Distributed version control system that tracks changes",
        D: "Web application",
        answer: "Distributed version control system that tracks changes"
    },
    {
        question: "What is MySQL?",
        A: "An acronym for my squirrel",
        B: "HTML framework",
        C: "CSS framework",
        D: "Open source relational database system",
        answer: "Open source relational database system"
    },
    {
        question: "How do you run JavaScript code outside of browsers such as FireFox or Google Chrome?",
        A: "By using Java",
        B: "Switch web browsers",
        C: "By using runtime environments such as node.js",
        D: "By running a function outside of object oriented programming",
        answer: "By using runtime environments such as node.js"
    }
]

var QuestionTimer = 10;
var timerInterval

function setTime() {
  timerInterval = setInterval(function() {
    QuestionTimer--;
    timer.textContent = QuestionTimer + " seconds left to answer.";

    if(QuestionTimer === 0) {
      clearInterval(timerInterval);
      alert("You ran out of time!");
      timer.textContent = ""
    }

  }, 1000);
}

// Start Quiz
function StartQuiz() {
    StartQuizButton.classList.add("hidden");
    ShowHighScore.classList.add("hidden");
    SubmitAnswerForm.classList.remove("hidden");
    GenerateQuestion(qIndex);
}

// Generate new function
function GenerateQuestion(qIndex) {
    timer.classList.remove("hidden");
    timer.classList.add("timer");
    setTime();
    QuizQuestion.innerHTML = questions[qIndex].question;
    A.value = questions[qIndex].A;
    LA.innerHTML = questions[qIndex].A;
    B.value = questions[qIndex].B;
    LB.innerHTML = questions[qIndex].B;
    C.value = questions[qIndex].C;
    LC.innerHTML = questions[qIndex].C;
    D.value = questions[qIndex].D;
    LD.innerHTML = questions[qIndex].D;

    let CorrectAnswer = questions[qIndex].answer

        
    SubmitAnswerButton.onclick = function CheckAnswer() {
        timer.textContent = ""
        clearInterval(timerInterval);
        // timer.textContent = "Time is up!"
        timer.classList.add("hidden");
        for (var checkedAnswer of AnswerForm) {
            if (checkedAnswer.checked) {
                UserAnswer = checkedAnswer.value;
                break;
            }
        }
        
        SubmitAnswerForm.classList.add("hidden");
        ShowCorrectAnswer.classList.remove("hidden");
        checkedAnswer.checked = false;
                
        if (UserAnswer == CorrectAnswer) {
            ShowCorrectAnswer.classList.add("AnswerCorrect");
            ShowCorrectAnswer.innerText = "That is correct! The answer is " + questions[qIndex].answer
            UserScore++
        } 
        else {
            ShowCorrectAnswer.classList.add("AnswerIncorrect");
            ShowCorrectAnswer.innerText = 'That is incorrect! The answer is not "' + UserAnswer +  
            '". The correct answer is "' + questions[qIndex].answer + '".'
        }

        if (qIndex + 1 < questions.length) {
            NextQuestionButton.classList.remove("hidden");
            NextQuestionButton.classList.add("btn");
        } else {
            NextQuestionButton.classList.add("hidden");
            EndQuizButton.classList.remove("hidden");
            EndQuizButton.classList.add("btn");
        }
    }
}

// Navigate to next question
function NextQuestion() {
    QuestionTimer = 10;
    ShowCorrectAnswer.classList.remove("AnswerIncorrect")
    ShowCorrectAnswer.classList.remove("AnswerCorrect")
    ShowCorrectAnswer.classList.add("hidden");
    NextQuestionButton.classList.add("hidden");
    SubmitAnswerForm.classList.remove("hidden");

    if (qIndex < questions.length) {
        qIndex++
    }
    
    GenerateQuestion(qIndex);
}

// Cancel the quiz and start over
function CancelQuiz() {
    // alert("Hello world! This does not do anything yet.")
    SubmitAnswerForm.classList.add("hidden");
    EndQuiz()
}

// End Quiz
function EndQuiz() {
    StartQuizButton.classList.remove("hidden");
    EndQuizButton.classList.remove("hidden");
    EndQuizButton.classList.add("btn")
    ShowCorrectAnswer.classList.add("hidden");
    ShowCorrectAnswer.classList.remove("AnswerIncorrect")
    ShowCorrectAnswer.classList.remove("AnswerCorrect")
    NextQuestionButton.classList.add("hidden");
    EndQuizButton.classList.add("hidden");
    alert("End of the quiz. Your final score was: " + UserScore + " / " + questions.length);
    
    if (UserScore >= UserHighScore) {
        UserHighScore = UserScore;
    }
    ShowHighScore.innerHTML = "Your high score is: " + UserHighScore + " / " + questions.length
    ShowHighScore.classList.remove("hidden");
    ShowHighScore.classList.add("ShowHighScore");
    UpdateCache();
}

// Clears cache so the quiz will start over if the press the start quiz button and resets the user score to 0 so it does not loop
function UpdateCache() {
    UserScore = 0;
    qIndex = 0;
}