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
var dispHiSore = document.querySelector(".hi-score")
var timerCountEl = document.querySelector("#timer");
var savedName = document.querySelector("saved-player");
var questionDisplay = document.getElementById("question");
var answerDisplay = document.querySelector(".submit-answer")
var gameOverEl = document.querySelector("#end-game")
var score = 0
var timer = document.getElementById("timer");
let timerCount = 100;
var playerName = "";


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
        correct: "c"
    },
    {
        question: "Question three?",
        answers: [
           "a",
           "b",
           "c",
           "d"
        ],
        correct: "c"
    },
    {
        question: "Question four?",
        answers: [
           "a",
           "b",
           "c",
           "d"
        ],
        correct: "c"
    },
    {
        question: "Question five?",
        answers: [
           "a",
           "b",
           "c",
           "d"
        ],
        correct: "c"
    },

];
var questionsNumber = questions.length;


function startGame() {
    newGameButton.addEventListener("click", () => {
        timerCount = 100
        score = 0
        startTimer()
        showQuestion()
        newGameButton.classList.add("hide")
        

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
            questionsNumber--
            if (questionsNumber <= 0) {
                gameOver()
            }
            setTimeout(()=> {
                showQuestion()
            },1000)
            if (createButton.innerText.includes (`${currentQuestion.correct}`) ===true) {
                createButton.classList.add("correctStyle")
                score++

            } else {
                createButton.classList.add("incorrectStyle")
                timerCount -= 10
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
                gameOver()

            }
    },1000)
}
function gameOver() {
    questionDisplay.classList.add("hide")
    answerDisplay.classList.add("hide")
    newGameButton.classList.remove("hide")
    gameOverEl.classList.remove("hide")
}

//create var that stores question lengths as number
//each click of answer button removes 1 from that var
//when it reaches 0, go to gameover
function questionsCountdown(){

    console.log(questionsNumber)

}