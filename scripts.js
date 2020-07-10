/// GENERATE HEADER ///
var header = document.getElementById("quizHeader");
header.setAttribute("style", "color: white; background-color: blue; text-align: center; padding: 30px;");
header.textContent = "Code Quiz";


/// GENERATE START QUIZ BUTTON ///
// Instead of setting the style attribute here, I set the class attribute to be "btn".
var QuizFormDiv = document.getElementById("quizFormDiv");
var StartQuizButton = document.createElement("button");
StartQuizButton.setAttribute("class", "btn");
StartQuizButton.setAttribute("id", "starQuizBtn");
StartQuizButton.textContent = "Start the quiz";
QuizFormDiv.appendChild(StartQuizButton);


/// GENERATE FOOTER ///
var footer = document.getElementById("quizFooter");
footer.setAttribute("style", "color: white; background-color: blue; text-align: center; padding: 30px");
footer.textContent = "© 2020 Vincent McGargill";


/// GENERATE QUESTION FUNCTION ///
function GenerateQuestions() {

    // Update attributes for quizFormDiv
    QuizFormDiv.setAttribute("class", "quizForm");
    
    // Generate Question Header
    var QuestionHeader = document.createElement("h1");
    QuestionHeader.textContent = "What is my favorite food?";
    QuizFormDiv.appendChild(QuestionHeader);

    // Generate Radio Asnwer Form
    var answerForm = document.createElement("form");
    answerForm.setAttribute("id", "answerForm");
    answerForm.setAttribute("action", "submitAnswer");
    QuizFormDiv.appendChild(answerForm);
    
    // Create First Answer Choice
    var answer1 = document.createElement("input");
    answer1.setAttribute("type", "radio");
    answer1.setAttribute("name", "food");
    answer1.setAttribute("value", "pizza");
    answer1.setAttribute("id", "a1");
    var answer1label = document.createElement("label")
    answer1label.setAttribute("for", "a1")
    answer1label.innerHTML = "Pizza"
    answerForm.appendChild(answer1);
    answerForm.appendChild(answer1label);
    lineBreak = document.createElement("br");
    answerForm.appendChild(lineBreak);

    // Create Second Answer Choice
    var answer2 = document.createElement("input");
    answer2.setAttribute("type", "radio");
    answer2.setAttribute("name", "food");
    answer2.setAttribute("value", "steak");
    answer2.setAttribute("id", "a2");
    var answer2label = document.createElement("label")
    answer2label.setAttribute("for", "a2")
    answer2label.innerHTML = "Steak"
    answerForm.appendChild(answer2);
    answerForm.appendChild(answer2label);
    lineBreak = document.createElement("br");
    answerForm.appendChild(lineBreak);
    
    // Create Third Answer Choice
    var answer3 = document.createElement("input");
    answer3.setAttribute("type", "radio");
    answer3.setAttribute("name", "food");
    answer3.setAttribute("value", "hamburger");
    answer3.setAttribute("id", "a3");
    var answer3label = document.createElement("label")
    answer3label.setAttribute("for", "a3")
    answer3label.innerHTML = "Hamburger"
    answerForm.appendChild(answer3);
    answerForm.appendChild(answer3label);
    lineBreak = document.createElement("br");
    answerForm.appendChild(lineBreak);
    
    // Create Fourth Answer Choice
    var answer4 = document.createElement("input");
    answer4.setAttribute("type", "radio");
    answer4.setAttribute("name", "food");
    answer4.setAttribute("value", "salad");
    answer4.setAttribute("id", "a4");
    var answer4label = document.createElement("label")
    answer4label.setAttribute("for", "a4")
    answer4label.innerHTML = "Salad"
    answerForm.appendChild(answer4);
    answerForm.appendChild(answer4label);
    lineBreak = document.createElement("br");
    answerForm.appendChild(lineBreak);

    // Create Answer Button
    var submitAnswerbtn = document.createElement("button");
    submitAnswerbtn.setAttribute("class", "btn");
    submitAnswerbtn.setAttribute("id", "submitAnswerBtn");
    submitAnswerbtn.textContent = "Submit Answer";
    answerForm.appendChild(submitAnswerbtn);

    // Create Cancel Button
    var cancelGamebtn = document.createElement("button");
    cancelGamebtn.setAttribute("class", "btn");
    cancelGamebtn.setAttribute("id", "cancelGameBtn");
    cancelGamebtn.textContent = "Cancel Game";
    answerForm.appendChild(cancelGamebtn);
}


/// START QUIZ ///
var starQuizBtn = document.querySelector("#starQuizBtn");
function StartQuiz() {

    // Hide the start button
    starQuizBtn.style.display = "none";

    // Create for loop that selects a pool of random questions and answers.
    // TODO: This has not been done yet!

    // Run generate question formula
    GenerateQuestions()
}
/// EVENT LISTENER THAT LISTENS FOR STARTQUIZ BUTTON CLICK ///
starQuizBtn.addEventListener("click", StartQuiz);
