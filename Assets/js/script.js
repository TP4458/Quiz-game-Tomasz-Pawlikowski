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
var questionPlace = document.getElementsByTagName("h2")
var nextQuestion
var score
var timer;
var timerCount
var saveScore
var victory = false;
var timeOut = false;
var endScore;
var playerName = "";

var answer;
var correctAnswer;
var questions = [
    {
        question: "Question one?",
        answer: ["2,4,6,8"],
        correct: 2
    },
    {
        question: "Question two?",
        answer: ["3,5,7,9"],
        correct: 1
    },
    {
        question: "Question three?",
        answer: ["a,b,c,d"],
        correct: 0
    },
    {
        question: "Question four?",
        answer: ["x,y,z,cat"],
        correct: 3
    },
];


//click start button
function newGame(questionNumber) {
    victory = false;
    timeOut = false;
    timerCount = 100;
    score = 0
    questionPlace.textContent(questions[questionNumber].question);
    
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
newGameButton.addEventListener("click", newGame)