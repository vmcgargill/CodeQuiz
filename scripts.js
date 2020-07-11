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

var UserHighScore = 0;

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
        A: "A hyper text transfer protocal",
        B: "A programming language",
        C: "A computer application",
        D: "An addressbook for the internet",
        answer: "A programming language"
    },
    {
        question: "What is CSS?",
        A: "An internet web browser",
        B: "A Central Styling System",
        C: "Casscading Style Sheet",
        D: "A software program",
        answer: "Casscading Style Sheet"
    },
    {
        question: "What is an API?",
        A: "A programming language",
        B: "A database",
        C: "An Application Programming Interface",
        D: "A HTML navigation bar",
        answer: "An Application Programming Interface"
    },
    {
        question: "What is Python?",
        A: "A Snake",
        B: "A high-level programming language",
        C: "The language that Lord Voldemort speaks",
        D: "A tyoe of web browser",
        answer: "A high-level programming language"
    },
    {
        question: "What is JSON?",
        A: "A method that HTML gets CSS",
        B: "A JavaScript function",
        C: "A JavaScript Object Notation",
        D: "My friend Jason",
        answer: "A JavaScript Object Notation"
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
        C: "A distributed version control system that tracks changes",
        D: "A web application",
        answer: "A distributed version control system that tracks changes"
    },
    {
        question: "What is MySQL?",
        A: "An acronym for my squirrel",
        B: "A HTML framework",
        C: "A CSS framework",
        D: "A open source relational database system",
        answer: "A open source relational database system"
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


var CurrentQuestion = 0;
var UserScore = 0;
var correctAnswers = 0;
let UserAnswer;


// This for loop works
// for (var qIndex = 0; qIndex < questions.length; qIndex++) {
//     CurrentQuestion = Math.floor(Math.random() * questions.length); 

//     // console.log(CurrentQuestion);
//     ShowHighScore.innerHTML = CurrentQuestion;
// }



// Start Quiz
function StartQuiz() {

    StartQuizButton.classList.add("hidden");
    ShowHighScore.classList.add("hidden");
    GenerateQuestion()
}


function GenerateQuestion() {
    SubmitAnswerForm.classList.remove("hidden");
    for (var qIndex = 0; qIndex < questions.length; qIndex++) {
        var QI = Math.floor(Math.random() * qIndex); 

        QuizQuestion.innerHTML = questions[QI].question;
        A.value = questions[QI].A;
        LA.innerHTML = questions[QI].A;
        B.value = questions[QI].B;
        LB.innerHTML = questions[QI].B;
        C.value = questions[QI].C;
        LC.innerHTML = questions[QI].C;
        D.value = questions[QI].D;
        LD.innerHTML = questions[QI].D;
        
        let CorrectAnswer = questions[QI].answer
        // let UserAnser;
        
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
                ShowCorrectAnswer.innerText = "That is correct! The answer is " + questions[QI].answer
                UserScore += 1
                console.log(UserAnswer)
            } else {
                ShowCorrectAnswer.classList.add("AnswerIncorrect");
                ShowCorrectAnswer.innerText = 'That is incorrect! The answer is not "' + UserAnswer +  '". The correct answer is "' + questions[QI].answer + '".'
            }
            checkedAnswer.checked = false;
        }
    }
}


function NextQuestion() {
    ShowCorrectAnswer.classList.add("hidden");
    NextQuestionButton.classList.add("hidden");
    SubmitAnswerForm.classList.remove("hidden");
    ShowCorrectAnswer.classList.remove("AnswerIncorrect")
    GenerateQuestion();
}




function CancelQuiz() {
    SubmitAnswerForm.classList.add("hidden");
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