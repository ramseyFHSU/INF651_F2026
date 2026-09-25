"use strict";

//Select panel elements
const helpButtons = document.querySelectorAll(".open-help");
const helpPanel = document.querySelector(".help-panel");
const closeButton = document.querySelector(".close-help");
const overlay = document.querySelector(".overlay");

//open panel
const openPanel = function () {
  helpPanel.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

//close panel
const closePanel = function () {
  helpPanel.classList.add("hidden");
  overlay.classList.add("hidden");
};

for (let i = 0; i < helpButtons.length; i++) {
  helpButtons[i].addEventListener("click", openPanel);
}

closeButton.addEventListener("click", closePanel);
overlay.addEventListener("click", closePanel);

document.addEventListener("keydown", function (event) {
  if (event.key === "Escape" && !helpPanel.classList.contains("hidden")) {
    closePanel();
  }
});

//Select Game Elements
const questionEl = document.querySelector(".question");
const categoryEl = document.querySelector(".category");
const trueBtn = document.querySelector(".btn--true");
const falseBtn = document.querySelector(".btn--false");
const newQuestionBtn = document.querySelector(".btn--question");
const newGameBtn = document.querySelector(".btn--new");
const resultEl = document.querySelector(".result");
const team0El = document.querySelector(".team--0");
const team1El = document.querySelector(".team--1");

const score0El = document.getElementById("score--0");
const score1El = document.getElementById("score--1");

const questions = [
  {
    text: "HTML creates the structure of a webpage.",
    answer: true,
    category: "HTML",
  },

  {
    text: "CSS is mainly used to respond to button clicks.",
    answer: false,
    category: "CSS",
  },

  {
    text: "JavaScript can change the DOM.",
    answer: true,
    category: "JavaScript",
  },

  {
    text: "querySelector() can select an HTML element.",
    answer: true,
    category: "DOM",
  },

  {
    text: "The value property is commonly used with input elements.",
    answer: true,
    category: "DOM",
  },

  {
    text: "addEventListener() creates CSS styles.",
    answer: false,
    category: "Events",
  },

  {
    text: "Arrays begin at index 0.",
    answer: true,
    category: "Arrays",
  },

  {
    text: "The === operator checks strict equality.",
    answer: true,
    category: "JavaScript",
  },
];

let scores;
let activeTeam;
let playing;
let currentQuestion;

const winningScore = 5;

function showMessage(text, className) {
  resultEl.textContent = text;
  resultEl.classList.remove("Success", "error");
  resultEl.classList.add(className);
  resultEl.classList.remove("hidden");
}

const switchTeam = function () {
  activeTeam = activeTeam === 0 ? 1 : 0;
  team0El.classList.toggle("team--active");
  team1El.classList.toggle("team--active");
};

const newQuestion = function () {
  if (!playing) {
    return;
  }
  const index = Math.trunc(Math.random() * questions.length);
  currentQuestion = questions[index];
  questionEl.textContent = currentQuestion.text;
  categoryEl.textContent = currentQuestion.category;
  resultEl.classList.add("hidden");
};

function checkAnswer(choice) {
  if (!playing || currentQuestion === null) {
    return;
  }
  if (choice === currentQuestion.answer) {
    scores[activeTeam] += 1;

    const scoreEl = document.getElementById(`score--${activeTeam}`);
    scoreEl.textContent = scores[activeTeam];
    showMessage("Correct! +1 point", "success");
    //Check for winner
    if (scores[activeTeam] >= winningScore) {
      playing = false;
      const winningTeam = document.querySelector(`.team--${activeTeam}`);
      winningTeam.classList.remove("team--active");
      winningTeam.classList.add("team--winner");
      showMessage(`Team ${activeTeam + 1} wins!`, "success");
      questionEl.textContent = "Game Over";
      categoryEl.textContent = "Winner";
      currentQuestion = null;
    }
  }
  //incorrect answer
  else {
    showMessage("not quite. no point", "error");
  }
  currentQuestion = null;
  //Move to the next team
  switchTeam();
}

const init = function () {
  console.log("Test");
  //reset game data
  scores = [0, 0];
  activeTeam = 0;
  currentQuestion = null;
  playing = true;

  score0El.textContent = 0;
  score1El.textContent = 0;

  questionEl.textContent = "Click new question to begin";
  categoryEl.classList.remove("success", "error");

  team0El.classList.remove("team--winner");
  team1El.classList.remove("team--winner");
  team0El.classList.add("team--active");
  team1El.classList.remove("team--active");
};

newQuestionBtn.addEventListener("click", newQuestion);

trueBtn.addEventListener("click", function () {
  checkAnswer(true);
});

falseBtn.addEventListener("click", function () {
  checkAnswer(false);
});

newGameBtn.addEventListener("click", init);
init();
