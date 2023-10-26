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
var saveDataBtn = document.getElementById("send-score-btn")
var questionDisplay = document.getElementById("question");
var answerDisplay = document.querySelector(".submit-answer")
var gameOverEl = document.querySelector("#end-game")
var dispSavedScore = document.getElementById("saved-score")
var dispPlayer = document.getElementById("saved-player")
var score;
var timer = document.getElementById("timer");
let timerCount = 100;
var playerName = "";


const questions = [
    {
        question: "Which data type can be defines as true or false? ",
        answers: [
           "String",
           "Boolean",
           "Integer",
           "Object"
        ],
        correct: "Bool"
    },
    {
        question: "Which keyword referes to the object from which it was called?",
        answers: [
           "Take",
           "That",
           "This",
           "There"
        ],
        correct: "This"
    },
    {
        question: "Which symbol is used for comments in Javascript?",
        answers: [
           "//",
           "\\\\",
           "||",
           "-_-"
        ],
        correct: "//"
    },
    {
        question: "Which of these is not a looping structure in Javascript?",
        answers: [
           "For",
           "While",
           "Do-while",
           "Whilst"
        ],
        correct: "While"
    },
    {
        question: "Who developed Javascript language?",
        answers: [
           "Netscape",
           "Microsoft",
           "Elon Musk",
           "John McAffe"
        ],
        correct: "Net"
    },

];
var questionsNumber = questions.length;
SaveInfo()
function startGame() {
    newGameButton.addEventListener("click", () => {
        timerCount = 100
        score = 0
        startTimer()
        
        showQuestion()
        newGameButton.classList.add("hide")
        questionDisplay.classList.remove("hide")
        answerDisplay.classList.remove("hide")
        timerCountEl.classList.remove("hide")
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
            setTimeout(()=> {
                showQuestion()
            },500)
            if (createButton.innerText.includes (`${currentQuestion.correct}`) ===true) {
                score++
                createButton.classList.add("correctStyle")
                questions.splice(randomizer,1)
                

            } else {
                createButton.classList.add("incorrectStyle")
                timerCount -= 10
            }
            if (questionsNumber <= 0) {
                gameOver()
            }

        })

        createButton.textContent = `${possibleAnswer}`   
        return score
        })

}}

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
dispScore.textContent = score;
function gameOver() {
    dispScore.textContent = score;
    timerCountEl.classList.add("hide")
    questionDisplay.classList.add("hide")
    answerDisplay.classList.add("hide")
    // newGameButton.classList.remove("hide")
    gameOverEl.classList.remove("hide")
}


saveDataBtn.addEventListener("click", (form) => {
    var playerName = document.getElementById("player-name")
    form.preventDefault();    
    localStorage.setItem("Player name:", playerName.value)
    localStorage.setItem("Saved score:", score)
    SaveInfo()
}
)

function SaveInfo (){
    var savedScore = localStorage.getItem("Saved score:");
    var savedPlayer = localStorage.getItem("Player name:");
    dispSavedScore.textContent = savedScore;
    dispPlayer.textContent = savedPlayer;
}

