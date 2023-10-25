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
var timer = document.getElementById("timer");
let timerCount = 100;
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
           "1",
           "2",
           "3",
           "4"
        ],
        correct: 2
    },
    {
        question: "Question two?",
        answers: [
           "a",
           "b",
           "c",
           "d"
        ],
        correct: 3
    },

];

function startGame() {
    newGameButton.addEventListener("click", () => {
        startTimer()
        showQuestion()
    })
}
startGame()



function showQuestion() {
    //randomize const questions
    let randomizer = Math.floor(Math.random() * questions.length)
    for (let i = 0; i < questions.length; i++) {
        const currentQuestion = questions[randomizer];
        questionDisplay.textContent = currentQuestion.question;
        answerDisplay.textContent=""
        currentQuestion.answers.forEach((possibleAnswer) => {
        let createButton = document.createElement("button");
        answerDisplay.appendChild(createButton);
        createButton.setAttribute("class","button");
        createButton.addEventListener("click",() => {
            setTimeout(()=> {
                showQuestion()
            },1000)
            if (createButton.innerText.includes (`${currentQuestion.correct}`) ===true) {
                createButton.classList.add("correctStyle")
            } else {
                badAnswer()
            }
        })
        createButton.textContent = `${possibleAnswer}`    
        })
}}

//timer function
function startTimer(){
    let countdown = setInterval(() => {
        timerCount--
        timer.textContent = timerCount;
            if (timerCount <= 0) {
                clearInterval(countdown)
                alert("TIME OUT !");
            }
    },1000)
}

// time penalty for wrong  answer
function penalty(){
    timerCount -= 10
}

function goodAnswer() {
    createButton.setAttribute("class","correctStyle")
    endScore++
}

function badAnswer() {

}


    function clearButtons() {                                   
        while (answerDisplay.firstChild) {
            answerDisplay.removeChild(answerDisplay.firstChild)
        }
    }
    
