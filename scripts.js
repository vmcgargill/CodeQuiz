/// GENERATE HEADER ///
var header = document.getElementById("quizHeader");
header.setAttribute("style", "color: white; background-color: blue; text-align: center; padding: 30px;");
header.textContent = "Code Quiz";

/// GENERATE START QUIZ BUTTON ///
// Instead of setting the style attribute here, I set the class attribute to be "btn".
var StartQuizButton = document.createElement("button");
StartQuizButton.setAttribute("class", "btn");
StartQuizButton.setAttribute("id", "starQuizBtn");
StartQuizButton.textContent = "Start the quiz!";
document.getElementById("quizFormDiv").appendChild(StartQuizButton);

/// GENERATE FOOTER ///
var footer = document.getElementById("quizFooter");
footer.setAttribute("style", "color: white; background-color: blue; text-align: center; padding: 30px");
footer.textContent = "© 2020 Vincent McGargill";


/// START QUIZ ///
var starQuizBtn = document.querySelector("#starQuizBtn");
function StartQuiz() {

    // Hide the start button
    starQuizBtn.style.display = "none";

    // Create a QuizFormDiv.
    var QuizFormDiv = document.getElementById("quizFormDiv");
    QuizFormDiv.setAttribute("class", "quizForm")
    QuizFormDiv.textContent = "Hello world again!!!"
    

    // Show button again when quiz is complete.
    // starQuizBtn.style.display = "block";
}
/// EVENT LISTENER THAT LISTENS FOR STARTQUIZ BUTTON CLICK ///
starQuizBtn.addEventListener("click", StartQuiz);


// /// EXTRA STUFF FOR TESTING ///
// var QuestionHeader = document.createElement("h1");
// QuestionHeader.setAttribute("style", "text-align: center;");
// QuestionHeader.textContent = "What is my favorite food?";
// document.body.appendChild(QuestionHeader);

// var answerForm = document.createElement("form");
// answerForm.setAttribute("id", "answerForm");
// answerForm.setAttribute("action", "selectAnswer");
// document.body.appendChild(answerForm);

// var answer1 = document.createElement("input");
// answer1.setAttribute("type", "radio");
// answer1.setAttribute("name", "food");
// answer1.setAttribute("value", "pizza");
// answer1.textContent = "Pizza";
// document.getElementById("answerForm").appendChild(answer1);

// var answer2 = document.createElement("input");
// answer2.setAttribute("type", "radio");
// answer2.setAttribute("name", "food");
// answer2.setAttribute("value", "hamburgers");
// answer2.textContent = "Pizza";
// document.getElementById("answerForm").appendChild(answer2);