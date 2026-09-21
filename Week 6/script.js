"use strict";

// --------------------------------
// Select Elements From the DOM
// --------------------------------

const scoreInput = document.querySelector(".score-input");

const checkButton = document.querySelector(".check-btn");

const resetButton = document.querySelector(".reset-btn");

const message = document.querySelector(".message");

const gradeDisplay = document.querySelector(".grade");

const resultBox = document.querySelector(".result-box");

// --------------------------------
// Application State
// --------------------------------

let currentScore = null;

// --------------------------------
// Check Grade
// --------------------------------

checkButton.addEventListener("click", function () {
  const inputValue = scoreInput.value;

  if (inputValue === "") {
    message.textContent = "Please enter a score.";
    gradeDisplay.textContent = "Grade: --";
    resultBox.className = "result-box warning";
  } else {
    // Convert the input into a number
    currentScore = Number(inputValue);

    if (currentScore < 0 || currentScore > 100) {
      message.textContent = "Score must be between 0 and 100.";
      gradeDisplay.textContent = "Grade: --";
      resultBox.className = "result-box danger";
    } else if (currentScore >= 90) {
      gradeDisplay.textContent = "Grade: A";
      message.textContent = "Excellent work!";
      resultBox.className = "result-box success";
    } else if (currentScore >= 80) {
      gradeDisplay.textContent = "Grade: B";
      message.textContent = "Good job!";
      resultBox.className = "result-box success";
    } else if (currentScore >= 70) {
      gradeDisplay.textContent = "Grade: C";
      message.textContent = "You passed.";
      resultBox.className = "result-box warning";
    } else if (currentScore >= 60) {
      gradeDisplay.textContent = "Grade: D";
      message.textContent = "You passed, but there is room for improvement.";
      resultBox.className = "result-box warning";
    } else {
      gradeDisplay.textContent = "Grade: F";
      message.textContent = "Keep practicing and try again.";

      resultBox.className = "result-box danger";
    }
  }
});

// --------------------------------
// Reset Application
// --------------------------------

resetButton.addEventListener("click", function () {
  currentScore = null;

  scoreInput.value = "";

  message.textContent = "Enter a score to get started.";

  gradeDisplay.textContent = "Grade: --";

  resultBox.className = "result-box";
});
