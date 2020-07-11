// Get all of the HTML elements by their IDs
const StartQuizButton = document.getElementById("StartQuizButton");
const ShowHighScore = document.getElementById("ShowHighScore");
const SubmitAnswerForm = document.getElementById("SubmitAnswerForm");
const QuizQuestion = document.getElementById("QuizQuestion");
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


function StartQuiz() {
    // Hide the Start Quiz Button and show the Submit Answer Form
    StartQuizButton.classList.add("hidden");
    ShowHighScore.classList.add("hidden");
    SubmitAnswerForm.classList.remove("hidden");
}

function SubmitAnswer() {
    // 
    SubmitAnswerForm.classList.add("hidden");
    StartQuizButton.classList.remove("hidden");
    ShowHighScore.classList.remove("hidden");
}

function ShowAnswer() {

}



/// GENERATE HEADER ///
// var header = document.getElementById("quizHeader");
// header.setAttribute("style", "color: white; background-color: blue; text-align: center; padding: 30px;");
// header.textContent = "Code Quiz";

// /// GENERATE FOOTER ///
// var footer = document.getElementById("quizFooter");
// footer.setAttribute("style", "color: white; background-color: blue; text-align: center; padding: 30px");
// footer.textContent = "© 2020 Vincent McGargill";


// /// GENERATE QUESTION FUNCTION ///
// function GenerateQuestions() {
    
//     // Update attributes for quizFormDiv
//     QuizFormDiv.setAttribute("class", "quizForm");
    
//     // Generate Question Header
//     var QuestionHeader = document.createElement("h1");
//     QuestionHeader.textContent = "What is my favorite food?";
//     QuizFormDiv.appendChild(QuestionHeader);
    
//     // Generate Radio Asnwer Form
//     var answerForm = document.createElement("form");
//     answerForm.setAttribute("id", "answerForm");
//     answerForm.setAttribute("action", "submitAnswer");
//     QuizFormDiv.appendChild(answerForm);
    
//     // Create First Answer Choice
//     var answer1 = document.createElement("input");
//     answer1.setAttribute("type", "radio");
//     answer1.setAttribute("name", "food");
//     answer1.setAttribute("value", "pizza");
//     answer1.setAttribute("id", "a1");
//     var answer1label = document.createElement("label")
//     answer1label.setAttribute("for", "a1")
//     answer1label.innerHTML = "Pizza"
//     answerForm.appendChild(answer1);
//     answerForm.appendChild(answer1label);
//     lineBreak = document.createElement("br");
//     answerForm.appendChild(lineBreak);
    
//     // Create Second Answer Choice
//     var answer2 = document.createElement("input");
//     answer2.setAttribute("type", "radio");
//     answer2.setAttribute("name", "food");
//     answer2.setAttribute("value", "steak");
//     answer2.setAttribute("id", "a2");
//     var answer2label = document.createElement("label")
//     answer2label.setAttribute("for", "a2")
//     answer2label.innerHTML = "Steak"
//     answerForm.appendChild(answer2);
//     answerForm.appendChild(answer2label);
//     lineBreak = document.createElement("br");
//     answerForm.appendChild(lineBreak);
    
//     // Create Third Answer Choice
//     var answer3 = document.createElement("input");
//     answer3.setAttribute("type", "radio");
//     answer3.setAttribute("name", "food");
//     answer3.setAttribute("value", "hamburger");
//     answer3.setAttribute("id", "a3");
//     var answer3label = document.createElement("label")
//     answer3label.setAttribute("for", "a3")
//     answer3label.innerHTML = "Hamburger"
//     answerForm.appendChild(answer3);
//     answerForm.appendChild(answer3label);
//     lineBreak = document.createElement("br");
//     answerForm.appendChild(lineBreak);
    
//     // Create Fourth Answer Choice
//     var answer4 = document.createElement("input");
//     answer4.setAttribute("type", "radio");
//     answer4.setAttribute("name", "food");
//     answer4.setAttribute("value", "salad");
//     answer4.setAttribute("id", "a4");
//     var answer4label = document.createElement("label")
//     answer4label.setAttribute("for", "a4")
//     answer4label.innerHTML = "Salad"
//     answerForm.appendChild(answer4);
//     answerForm.appendChild(answer4label);
//     lineBreak = document.createElement("br");
//     answerForm.appendChild(lineBreak);
    
//     function test() {
//         alert("Hello world!")
//     }
    
//     // Create Answer Button
//     const SubmitAnswerbutton = document.createElement("button");
//     SubmitAnswerbutton.setAttribute("class", "btn");
//     SubmitAnswerbutton.setAttribute("id", "submitAnswerBtn");
//     SubmitAnswerbutton.textContent = "Submit Answer";
//     answerForm.appendChild(SubmitAnswerbutton);
//     var submitAnswerBtn = getElementById("submitAnswerBtn");
//     submitAnswerBtn.addEventListener('click', test);

    
    
//     // Create Cancel Button
//     var cancelGamebtn = document.createElement("button");
//     cancelGamebtn.setAttribute("class", "btn");
//     cancelGamebtn.setAttribute("id", "cancelGameBtn");
//     cancelGamebtn.textContent = "Cancel Game";
//     answerForm.appendChild(cancelGamebtn);            
// }


// /// START QUIZ ///
// function StartQuiz() {
    
//     // Hide the start button
//     StartQuizButton.style.display = "none";
    
//     // Create for loop that selects a pool of random questions and answers.
//     // TODO: This has not been done yet!
    
//     // Run generate question formula
//     GenerateQuestions()
// }
