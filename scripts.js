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
        question: "What is my favorite food?",
        A: "Pizza",
        B: "Steak",
        C: "Hamburger",
        D: "Salad",
        answer: "A" 
    },
    {
        question: "What is JavaScript?",
        A: "A hyper text transfer",
        B: "A programming language",
        C: "A computer application",
        D: "An addressbook for the internet",
        answer: "B"
    },
    {
        question: "How old are you?",
        A: "1",
        B: "2",
        C: "3",
        D: "4",
        answer: "D"
    }
]


var CurrentQuestion = 0;
var UserScore = 0;
var correctAnswers = 0;
let UserAnser;


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
        QI = Math.floor(Math.random() * questions.length); 

        QuizQuestion.innerHTML = questions[QI].question;
        LA.innerHTML = questions[QI].A;
        LB.innerHTML = questions[QI].B;
        LC.innerHTML = questions[QI].C;
        LD.innerHTML = questions[QI].D;
        
        let CorrectAnswer = questions[QI].answer
        let UserAnser;

        SubmitAnswerButton.onclick = function CheckAnswer() {
            for (var checkedAnswer of AnswerForm) {
                if (checkedAnswer.checked) {
                    UserAnser = checkedAnswer.value;
                    break;
                }
            }
                
            SubmitAnswerForm.classList.add("hidden");
            ShowCorrectAnswer.classList.remove("hidden");
            NextQuestionButton.classList.remove("hidden");
            NextQuestionButton.classList.add("btn")
                
                
            if (UserAnser == CorrectAnswer) {
                ShowCorrectAnswer.classList.add("AnswerCorrect");
                ShowCorrectAnswer.innerText = "That is correct! The answer is " + questions[QI].CorrectAnswer
                UserScore += 1
            } else {
                ShowCorrectAnswer.classList.add("AnswerIncorrect");
                ShowCorrectAnswer.innerText = "That is incorrect! The answer is " + questions[QI].CorrectAnswer
            }
        }
    } 
}


function NextQuestion() {
    ShowCorrectAnswer.classList.add("hidden");
    NextQuestionButton.classList.add("hidden");
    SubmitAnswerForm.classList.remove("hidden");
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