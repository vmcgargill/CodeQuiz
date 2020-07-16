/// Constant HTML Elements ///
const StartQuizButton = document.getElementById("StartQuizButton");
const ShowHighScore = document.getElementById("ShowHighScore");
const ShowScoreBoard = document.getElementById("ShowScoreBoard");
const ScoreBoard = document.getElementById('ScoreBoard');
const SubmitAnswerForm = document.getElementById("SubmitAnswerForm");
const FillInQuestion = document.getElementById("FillInQuestion");
const FillInBlank = document.getElementById("FillInBlank");
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
const FillInBlankForm = document.getElementById("FillInBlankForm");
const MultipleChoiceForm = document.getElementById("MultipleChoiceForm");
const CancelQuizButton = document.getElementById("CancelQuizButton");
const ShowCorrectAnswer = document.getElementById("ShowCorrectAnswer");
const NextQuestionButton = document.getElementById("NextQuestionButton");
const Timer = document.getElementById("Timer");
const ProgressBar = document.getElementById("ProgressBar");
const Progress = document.getElementById("Progress");
const ShowScore = document.getElementById("ShowScore");
const ClearHighScoreBtn = document.getElementById("ClearHighScoreBtn");
const EndQuizButton = document.getElementById("EndQuizButton");

/// Global Variables ///
var UserScore = 0;
var qIndex = 0;
let UserAnswer;
var timerInterval;

/// Set Quiz Time ///
var QuestionTimer = 15;

/// Question Timer ///
function setTime() {
  timerInterval = setInterval(function() {
    QuestionTimer--;
    
    if (QuestionTimer < 15) {
        Progress.style.width = QuestionTimer * 6.67 + '%';
        Timer.textContent = QuestionTimer + " seconds left to answer.";
    } 
    if (QuestionTimer === 0) {
        clearInterval(timerInterval);
        alert("You ran out of time to answer the question!");
        UserAnswer = "null";
        SubmitAnswerButton.onclick();
    } 
  }, 1500);
}

/// Start Quiz ///
function StartQuiz() {

    // Randomly shuffles questions
    for(let i = questions.length - 1; i > 0; i--){
        const questionsshuffled = Math.floor(Math.random() * i)
        const tempquestions = questions[i]
        questions[i] = questions[questionsshuffled]
        questions[questionsshuffled] = tempquestions
    }

    StartQuizButton.classList.add("hidden");
    ClearHighScoreBtn.classList.add("hidden");
    ShowHighScore.classList.add("hidden");
    ShowScoreBoard.classList.add("hidden");
    CancelQuizButton.classList.remove("hidden");
    CancelQuizButton.classList.add("btn");
    GenerateQuestion(qIndex);
}

/// Generate Question ///
function GenerateQuestion(qIndex) {
    
    setTime();
    SubmitAnswerForm.classList.remove("hidden");
    
    if (questions[qIndex].fillin === true) {
        FillInQuestion.innerHTML = questions[qIndex].question;
        FillInBlank.setAttribute("maxlength", questions[qIndex].answer.length)
        FillInBlankForm.classList.remove("hidden");
    } else {
        QuizQuestion.innerHTML = questions[qIndex].question;
        A.value = questions[qIndex].A;
        LA.innerHTML = questions[qIndex].A;
        B.value = questions[qIndex].B;
        LB.innerHTML = questions[qIndex].B;
        C.value = questions[qIndex].C;
        LC.innerHTML = questions[qIndex].C;
        D.value = questions[qIndex].D;
        LD.innerHTML = questions[qIndex].D;
        MultipleChoiceForm.classList.remove("hidden");
    }

    /// Check Answer ///
    let CorrectAnswer = questions[qIndex].answer
    SubmitAnswerButton.onclick = function CheckAnswer() {
        Timer.textContent = "15 seconds left to answer."
        clearInterval(timerInterval);

        for (var checkedAnswer of AnswerForm) {
            if (checkedAnswer.checked) {
                UserAnswer = checkedAnswer.value;
                break;
            } else if (questions[qIndex].fillin === true) {
                UserAnswer = FillInBlank.value;
            } else {
                UserAnswer = "null";
            }
        }
        
        SubmitAnswerForm.classList.add("hidden");
        FillInBlankForm.classList.add("hidden");
        MultipleChoiceForm.classList.add("hidden");
        ShowCorrectAnswer.classList.remove("hidden");
        checkedAnswer.checked = false;
        FillInBlank.value = "";
        
        // If statements that show the correct answer
        if (QuestionTimer == 0 && UserAnswer == CorrectAnswer) {
            ShowCorrectAnswer.classList.add("AnswerCorrect");
            ShowCorrectAnswer.innerText = "You ran out of time! But the correct answer is entered and still counts. The correct answer is: " 
            + questions[qIndex].answer
            UserScore++
        } else if (UserAnswer == CorrectAnswer) {
            ShowCorrectAnswer.classList.add("AnswerCorrect");
            ShowCorrectAnswer.innerText = "That is correct! The answer is: " + questions[qIndex].answer
            UserScore++
        }
        else if (UserAnswer == "null") {
            ShowCorrectAnswer.classList.add("AnswerIncorrect");
            ShowCorrectAnswer.innerText = 'Sorry but the question was marked wrong because there was no answer selected. The correct answer is: "' 
            + questions[qIndex].answer + '".'
        } else {
            ShowCorrectAnswer.classList.add("AnswerIncorrect");
            ShowCorrectAnswer.innerText = 'That is incorrect! The answer is not: "' + UserAnswer +  
            '". The correct answer is "' + questions[qIndex].answer + '".'
        }
        
        // If statement that either shows the next and cancel button or shows the end quiz button
        // We have to add 1 to qIndex because the array starts at 0 and questions.length starts at 1
        if (qIndex + 1 < questions.length) {
            NextQuestionButton.classList.remove("hidden");
            NextQuestionButton.classList.add("btn");
        } else {
            CancelQuizButton.classList.add("hidden");
            EndQuizButton.classList.remove("hidden");
            EndQuizButton.classList.add("btn");
        }
    }
}

/// Next Question ///
function NextQuestion() {
    QuestionTimer = 15;
    ShowCorrectAnswer.classList.remove("AnswerIncorrect")
    ShowCorrectAnswer.classList.remove("AnswerCorrect")
    ShowCorrectAnswer.classList.add("hidden");
    NextQuestionButton.classList.add("hidden");
    Progress.style.width = 100 + "%";

    // Generate new question
    if (qIndex < questions.length) {
        qIndex++
        GenerateQuestion(qIndex);
    }
}

/// Cancel Quiz ///
function CancelQuiz() {
    SubmitAnswerForm.classList.add("hidden");
    MultipleChoiceForm.classList.add("hidden");
    FillInBlankForm.classList.add("hidden");
    CancelQuizButton.classList.add("hidden");
    clearInterval(timerInterval);
    EndQuiz();
}

/// End Quiz ///
function EndQuiz() {
    EndQuizButton.classList.add("hidden");
    ShowCorrectAnswer.classList.add("hidden");
    ShowCorrectAnswer.classList.remove("AnswerCorrect")
    ShowCorrectAnswer.classList.remove("AnswerIncorrect")
    NextQuestionButton.classList.add("hidden");
    StartQuizButton.classList.remove("hidden");
    
    var UserName = prompt("End of the quiz. Your final score was: " + UserScore + " / " + questions.length +
    ". Your score percentage was: " + Math.floor(UserScore / questions.length * 100) + "%. " +
    "Please enter your name to record the score: ");

    var QuizDate = new Date();
    var dd = String(QuizDate.getDate()).padStart(2, '0');
    var mm = String(QuizDate.getMonth() + 1).padStart(2, '0');
    var yyyy = QuizDate.getFullYear();
    QuizDate = mm + '/' + dd + '/' + yyyy;

    var UserScoreRecord = UserName + ": " + JSON.stringify(UserScore) + "/" + questions.length + " - " +
    JSON.stringify(UserScore / questions.length * 100) + "% - " + QuizDate;

    var ScoreBoardRecord = JSON.parse(localStorage.getItem("ScoreBoardRecord"));

    if (ScoreBoardRecord === null) {
        var NewScoreBoard = [];
        NewScoreBoard.push(UserScoreRecord);
        localStorage.setItem("ScoreBoardRecord", JSON.stringify(NewScoreBoard));
    } else {
        ScoreBoardRecord.push(UserScoreRecord);
        localStorage.setItem("ScoreBoardRecord", JSON.stringify(ScoreBoardRecord));
    }
    

    var UserHighScore = localStorage.getItem("UserHighScore");
    if (UserScore >= UserHighScore) {
        var UpdateUserHighScore = UserScore;
        localStorage.setItem("UserHighScore", UpdateUserHighScore);
        localStorage.setItem("HighestScoreName", UserName);
    }

    UserScore = 0;
    qIndex = 0;
    QuestionTimer = 15;
    Timer.textContent = "15 seconds left to answer."
    Progress.style.width = 100 + "%";
    GetHighScores();
}

/// Get High Score ///
function GetHighScores() {
    var StoredUserHighScore = localStorage.getItem("UserHighScore");
    var StoredUser = localStorage.getItem('HighestScoreName');
    var ScoreBoardRecord = JSON.parse(localStorage.getItem("ScoreBoardRecord"));
    if (StoredUserHighScore !== null)  {
        ShowHighScore.innerHTML = "Highest Score: " + StoredUserHighScore + " / " + questions.length + 
        "<br> Highest Score Percentage: " + Math.floor(StoredUserHighScore / questions.length * 100) + "% <br>" +
        "Name: " + StoredUser;
        ScoreBoard.innerHTML = "";
        
        // Loop that renders li for each score recorded
        for (var i = 0; i < ScoreBoardRecord.length; i++) {
            var ShowScoreBoardRecord = ScoreBoardRecord[i];
        
            var li = document.createElement("li");
            li.textContent = ShowScoreBoardRecord;
            ScoreBoard.appendChild(li);
          }

        ShowHighScore.classList.remove("hidden");
        ShowScoreBoard.classList.remove("hidden");
        ClearHighScoreBtn.classList.remove("hidden");
        ClearHighScoreBtn.classList.add("btn");
    }
}

GetHighScores();

/// Clear High Score ///
function ClearHighScore() {

    var ConfirmClearHighScore = confirm("Are you sure you want to permenantly erase your entire score history?");

    if (ConfirmClearHighScore === true) {
        localStorage.removeItem("UserHighScore");
        localStorage.removeItem("ScoreBoardRecord");
        localStorage.removeItem("HighestScoreName");
        ShowHighScore.classList.add("hidden");
        ClearHighScoreBtn.classList.add("hidden");
        ShowScoreBoard.classList.add("hidden");
    }
}