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
        question: "What does Object Oriented Programming means?",
        A: "A programming paradigm that involves objects and datasets",
        B: "An application that uses physical objects",
        C: "A website that displays pictures of objects",
        D: "An object that is used to write programs",
        answer: "A programming paradigm that involves objects and datasets"
    },
    {
        question: "What is 'git' ?",
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

// Start Quiz
function StartQuiz() {
    StartQuizButton.classList.add("hidden");
    ShowHighScore.classList.add("hidden");
    SubmitAnswerForm.classList.remove("hidden");
    NextQuestionButton.classList.add("btn");
    GenerateQuestion(qIndex);
}

// Generate new function
function GenerateQuestion(qIndex) {
    
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
        for (var checkedAnswer of AnswerForm) {
            if (checkedAnswer.checked) {
                UserAnswer = checkedAnswer.value;
                break;
            }
        }
                
        SubmitAnswerForm.classList.add("hidden");
        ShowCorrectAnswer.classList.remove("hidden");
        NextQuestionButton.classList.remove("hidden");
        NextQuestionButton.classList.add("btn")
                
                
        if (UserAnswer == CorrectAnswer) {
            ShowCorrectAnswer.classList.add("AnswerCorrect");
            ShowCorrectAnswer.innerText = "That is correct! The answer is " + questions[qIndex].answer
            UserScore++
            console.log(UserAnswer)
        } else {
            ShowCorrectAnswer.classList.add("AnswerIncorrect");
            ShowCorrectAnswer.innerText = 'That is incorrect! The answer is not "' + UserAnswer +  '". The correct answer is "' + questions[qIndex].answer + '".'
        }
        checkedAnswer.checked = false;
    }
}

// Navigate to next question
function NextQuestion() {
    if (qIndex < questions.length) {
        qIndex++
        GenerateQuestion(qIndex);
    } else {
        alert("End game!! Your score was: " + UserScore)
    }
    ShowCorrectAnswer.classList.remove("AnswerIncorrect")
    ShowCorrectAnswer.classList.remove("AnswerCorrect")
    ShowCorrectAnswer.classList.add("hidden");
    NextQuestionButton.classList.add("hidden");
    SubmitAnswerForm.classList.remove("hidden");
}

// Cancel the quiz and start over
function CancelQuiz() {
    alert("Hello world! This does not do anything yet.")
    // SubmitAnswerForm.classList.add("hidden");
}

// End Quiz
function EndQuiz() {
    StartQuizButton.classList.remove("hidden");
    ShowHighScore.classList.remove("hidden");
    EndQuizButton.classList.remove("hidden");
    EndQuizButton.classList.add("btn")
    ShowCorrectAnswer.classList.add("hidden");
    NextQuestionButton.classList.add("hidden");
}