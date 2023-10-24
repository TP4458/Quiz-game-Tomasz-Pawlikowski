// GIVEN I am taking a code quiz
// WHEN I click the start button
// THEN a timer starts and I am presented with a question
// WHEN I answer a question
// THEN I am presented with another question
// WHEN I answer a question incorrectly
// THEN time is subtracted from the clock
// WHEN all questions are answered or the timer reaches 0
// THEN the game is over
// WHEN the game is over
// THEN I can save my initials and my score
// ```

var newGameButton = document.querySelector("#new-game");
var dispScore = document.querySelector(".score")
var timerCountEl = document.querySelector("#timer");
var hiScore = document.querySelector("#hi-score");
var savedName = document.querySelector("saved-player");
var questionDisplay = document.getElementById("question");
var answerDisplay = document.querySelector(".submit-answer")
var score
var timer;
var timerCount
var saveScore
var victory = false;
var timeOut = false;
var endScore;
var playerName = "";
let questionNumber
var correctAnswer;
let randomQuestion
``
const questions = [
    {
        question: "Question one?",
        answers: [
            {text: "a", correct: false},
            {text: "b", correct: true},
            {text: "c", correct: false},
            {text: "d", correct: false}
        ]
    },
    {
        question: "Question two?",
        answers: [
            {text: "1", correct: false},
            {text: "2", correct: true},
            {text: "3", correct: false},
            {text: "4", correct: false}
        ]
    },
    {
        question: "Question three?",
        answers: [
            {text: "5", correct: false},
            {text: "6", correct: true},
            {text: "7", correct: false},
            {text: "8", correct: false}
        ]
    },
    {
        question: "Question four?",
        answers: [
            {text: "9", correct: false},
            {text: "8", correct: true},
            {text: "7", correct: false},
            {text: "6", correct: false}
        ]
    },
];
clearButtons()
//click start button
function newGame() {
    victory = false;
    timeOut = false;
    timerCount = 10000;
    score = 0;
    randomQuestion = questions.sort(() =>Math.random() -.5)
    questionNumber = [0];
    nextQuestion()
}

function nextQuestion() {

    clearButtons();
    showQuestion(randomQuestion[questionNumber]);
}

function showQuestion(question) {
    var currentQuestion = (questions[questionNumber].question);
    questionDisplay.innerText=currentQuestion;

    question.answers.forEach(answer => {
        const button = document.createElement("button");
        button.textContent = answer.text;
        button.classList.add("button");
        if(answer.correct) {
            button.dataset.correct = answer.correct //sets "corrext" data attribute to the button
        }
        button.addEventListener("click", selectAnswer)
        answerDisplay.appendChild(button);  
        
    })
}

function selectAnswer(a){
    const selButton = a.target    ;          //.target returns the HTML element that triggered an event.
     const correct = selButton.dataset.correct; //check if it has a "coreect" parameter as set in showQuestion function
     setStatusClass(document.body, correct)
     Array.from(selectAnswer.children).forEach (button => {
        setStatusClass(button, button.dataset.correct);
     })

    function setStatusClass(element, correct) {
        clearStatusClass(element)
        if (correct) {
          element.classList.add('correct')
     } else {
          element.classList.add('wrong')
     }
    }

}
    //on click, a question appears with 4 possible answers
    //at the same time, timer appears and starts counting down. this is a timer for the ENTIRE game not just a question.
function startTimer(){
    timer = setInterval(function(){
        timerCount--
        timerCountEl.textContent = timerCount;
        if (timerCount === 0) {
            alert("TIME OUT !");
            endGame();
        }
    })
}


//click on the answer
    //if correct, add +100 score, move to next question
    //if incorrect, reduce timer, allow another guess.

//if all questions are answered within time limit:
function endGame(){
//function saveScore(){
    var storedScore = localStorage.getItem("score")
    if (storedScore === null) {
        endScore = 0;
    } else {
        storedScore = endScore;        
    }
endScore.textContent = endScore;


//function savePlayer(){
    whie (playerName ==""); {
        playerName = prompt("Enter player name");
    }
    savedName = localStorage.getItem("playerName", playerName)
}

    //display congratulations
    //display score
    //save score with the initials (localStorage)
    //optional: add remaining time to score

//if timer reaches 0 before all questions are answered: 
    //display TIME OUT!
    //display score
    //save score with the initials


    //new game button event listener
    function clearButtons() {                                   
        while (answerDisplay.firstChild) {
            answerDisplay.removeChild(answerDisplay.firstChild)
        }
    }
    
newGameButton.addEventListener("click", newGame)