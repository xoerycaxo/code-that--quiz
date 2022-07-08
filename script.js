//Create variables to store the quiz questions

//Use mouse-click events to start the quiz

//Write for loops to cycle through quiz questions

//Use key-press events to receive user input in the form of answers to quiz questions

//Create a time limit for the game using time functions

//Write conditional statements to determine wrong and right answers

//Use client-side storage to store high scores

//Use GitHub Pages to publish the page to the web 
 //References//
let timeLeft = document.querySelector(".time-left");
let quizContainer = document.getElementById("container");
let nextBtn = document.getElementById("next-button");
let countOfQuestion = document.querySelector(".number-of-question");
let displayContainer = document.getElementById("display-container");
let scoreContainer = document.querySelector(".score-container");
let restart = document.getElementById("restart");
let userScore = document.getElementById("user-score");
let startScreen = document.querySelector(".start-screen");
let startButton = document.getElementById("start-button");
let questionCount;
let scoreCount = 0;
let count = 15;
let countdown;
const TimerEl = document.getElementById("Timer");

//Questions and Options array//

const quizArray = [
  {
    id: "1",
    question:"Commonly used data types DO NOT include:", options:["strings","booleans","alerts","numbers"], correct:"alerts"
  },
  {
    id: "2",
 question:"The condition in an if/else statement is enclosed within ________." ,
 options:["quotes","curly brackets","parenthesis","square brackets"], correct:"curly brackets"
},
{
    id: "3",
 question:"Arrays in JavaScript can be used to store ____________." ,
 options:["numbers and strings","other arrays","booleans","all of the above"], correct:"all of the above",
},
{
    id: "4",
 question:"A very useful tool used during development and debugging for printing content to the debugger is:" ,
 options:["javascript","terminal/bash","for loops","console.log"], correct:"console.log",
},
];

//Restart Quiz//
restart.addEventListener("click", () => {
  initial();
  displayContainer.classList.remove("hide");
  scoreContainer.classList.add("hide");
});

//Next Button//
nextBtn.addEventListener(
  "click",
  (displayNext = () => {

    //increment questionCount//
    questionCount += 1;

    //if last question//
    if (questionCount == quizArray.length) {

      //hide question container and display score//
      displayContainer.classList.add("hide");
      scoreContainer.classList.remove("hide");

      //user score//
      userScore.innerHTML =
        "Your score is " + scoreCount + " out of " + questionCount;
    } else {

      //display questionCount//
      countOfQuestion.innerHTML =
        questionCount + 1 + " of " + quizArray.length + " Question";

      //display quiz//
      quizDisplay(questionCount);
      count = 15;
      clearInterval(countdown);
      timerDisplay();
    }
  })
);

//Timer//
const timerDisplay = () => {
  countdown = setInterval(() => {
    count--;
    timeLeft.innerHTML = `${count}s`;
    if (count == 0) {
      clearInterval(countdown);
      displayNext();
    }
  }, 1000);
};

// Display quiz //
const quizDisplay = (questionCount) => {
  let quizCards = document.querySelectorAll(".container-mid");

  // Hide other cards //
  quizCards.forEach((card) => {
    card.classList.add("hide");
  });
  // display current question card //
  quizCards[questionCount].classList.remove("hide");
};

//Quiz Creation//
function quizCreator() {

  // randomly sort questions //
  quizArray.sort(() => Math.random() - 0.5);

  // generate quiz //
  for (let i of quizArray) {

    // randomly sort options //
    i.options.sort(() => Math.random() - 0.5);

    //quiz card creation//
    let div = document.createElement("div");
    div.classList.add("container-mid", "hide");

    //question number//
    countOfQuestion.innerHTML = 1 + " of " + quizArray.length + " Question";

    //question//
    let question_DIV = document.createElement("p");
    question_DIV.classList.add("question");
    question_DIV.innerHTML = i.question;
    div.appendChild(question_DIV);

    // score //

    const SCORE_OINTS = 100
    const MAX_QUESTION = 4

    startGame = () => {
        questionCounter = 0
        score = 0
        availableQuestions = [...questions]
        getNewQuestion()

    }

    getNewQuestion = () => {
        if (availableQuestions.length === 0 || questionsCounter > MAX_QUESTION) { localStorage.setItem('mostRecenScore', score)

        }

    }
    // options //
    div.innerHTML += `
    <button class="option-div" onclick="checker(this)">${i.options[0]}</button>
     <button class="option-div" onclick="checker(this)">${i.options[1]}</button>
      <button class="option-div" onclick="checker(this)">${i.options[2]}</button>
       <button class="option-div" onclick="checker(this)">${i.options[3]}</button>
    `;
    quizContainer.appendChild(div);
  }
}

// Checker Function to check if option is correct or not //
function checker(userOption) {
  let userSolution = userOption.innerText;
  let question =
    document.getElementsByClassName("container-mid")[questionCount];
  let options = question.querySelectorAll(".option-div");

  // if user clicked answer == correct option stored in object//
  if (userSolution === quizArray[questionCount].correct) {
    userOption.classList.add("correct");
    scoreCount++;
  } else {
    userOption.classList.add("incorrect");
    //For marking the correct option//
    options.forEach((element) => {
      if (element.innerText == quizArray[questionCount].correct) {
        element.classList.add("correct");
      }
    });
  }
// Timer countdown//
const startingTime = 1;
let time = startingTime * 60;

setInterval(updateTimer, 1000);

function updateTimer() {
    const minutes = Math.floor(time / 60);
    let seconds = time % 60;

    seconds = seconds <10 ? '0' +seconds : seconds;

    TimerEl.innerHTML = `${minutes}:${seconds}`;
    time--;
}

  //clear interval(stop timer)//
  clearInterval(countdown);

  //disable all options//
  options.forEach((element) => {
    element.disabled = true;
  });
}

//initial setup//
function initial() {
  quizContainer.innerHTML = "";
  questionCount = 0;
  scoreCount = 0;
  count = 15;
  clearInterval(countdown);
  timerDisplay();
  quizCreator();
  quizDisplay(questionCount);
}

//when user click on start button//
startButton.addEventListener("click", () => {
  startScreen.classList.add("hide");
  displayContainer.classList.remove("hide");
  initial();
});

//hide quiz and display start screen//
window.onload = () => {
  startScreen.classList.remove("hide");
  displayContainer.classList.add("hide");
};
