/// GENERATE HEADER ///
var header = document.createElement("h1");
header.setAttribute("style", "color: white; background-color: blue; text-align: center; padding: 30px;");
header.textContent = "Code Quiz";
document.body.appendChild(header);

/// GENERATE START QUIZ BUTTON ///
var StartQuizButton = document.createElement("button");
// Instead of setting the style attribute here, I set the class attribute to be "btn".
// That way we can write our CSS in the styles.css file and use features like hover.
StartQuizButton.setAttribute("class", "btn");
StartQuizButton.textContent = "Start the quiz!";
document.body.appendChild(StartQuizButton);

/// GENERATE FOOTER ///
var footer = document.createElement("footer");
footer.setAttribute("style", "color: white; background-color: blue; text-align: center; padding: 30px");
footer.textContent = "© 2020 Vincent McGargill";
document.body.appendChild(footer);


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