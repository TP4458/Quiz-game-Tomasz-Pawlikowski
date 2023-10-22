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

var startButton = document.querySelector(".start-button");
var newGameButton = document.querySelector(".new-game-button");
var timer
var timerCountEl = document.querySelector(".timer-count");
var victory = false;
var timeOut = false;
var score = document.querySelector(".score")
var endScore;
var playerName = ""
var question
var answer
var correctAnswer


//click start button
    //on click, a question appears with 4 possible answers
    //at the same time, timer appears and starts counting down. this is a timer for the ENTIRE game not just a question.

//click on the answer
    //if correct, add score, move to next question
    //if incorrect, reduce timer, allow another guess.

//if all questions are answered within time limit:
    //display congratulations
    //display score
    //save score with the initials (localStorage)
    //optional: add remaining time to score

//if timer reaches 0 before all questions are answered: 
    //display TIME OUT!
    //display score
    //save score with the initials

function getScore() {
    var storedScore = localStorage.getItem("score")
    if (storedScore === null) {
        endScore = 0;
    } else {
        storedScore = endScore;        
    }
endScore.textContent = endScore;
}



