"use strict";

// Step 1: Keep the question, options, and answer counts together.
const survey = {
  question: "Which topic needs more practice?",
  options: ["0: Functions", "1: this", "2: Closures"],
  answers: [0, 0, 0],
};

// Step 2: Ask for an answer, check it, and update the matching count.
survey.registerAnswer = function () {
  const response = prompt(this.question + "\n" + this.options.join("\n"));

  // Cancel returns null. Stop before converting it to a number.x
  if (response === null) {
    showMessage("No answer was submitted.");
    return;
  }

  const choice = Number(response);

  // Check that the answer is a whole number within the valid range.
  if (Number.isInteger(choice) && choice >= 0 && choice < this.answers.length) {
    this.answers[choice]++;
    renderAnswerCounts();
    showMessage("Your answer was counted.");
    return;
  }

  showMessage("Please enter 0, 1, or 2. Your answer was not counted.");
};

// Step 3: Display the counts as an array or as a readable string.
survey.displayResults = function (type = "array") {
  if (type === "array") {
    console.log(this.answers);
    return [...this.answers];
  } else if (type === "string") {
    const result = "Survey results: " + this.answers.join(", ");
    console.log(result);
    return result;
  }
};

function showMessage(message) {
  document.querySelector("#answer-message").textContent = message;
}

function showResults(type) {
  const result = survey.displayResults(type);
  const output = document.querySelector("#results-output");

  output.textContent = Array.isArray(result)
    ? `[${result.join(", ")}]`
    : result;
}

function renderAnswerCounts() {
  const list = document.querySelector("#answer-counts");
  const total = survey.answers.reduce((sum, count) => sum + count, 0);

  document.querySelector("#total-count").textContent = total;
  list.replaceChildren();

  survey.options.forEach(function (option, index) {
    const item = document.createElement("li");
    const label = document.createElement("span");
    const count = document.createElement("strong");

    label.textContent = option;
    count.textContent = survey.answers[index];
    item.append(label, count);
    list.append(item);
  });
}

// Step 4: bind() keeps this connected to survey when the button is clicked.
document
  .querySelector(".survey")
  .addEventListener("click", survey.registerAnswer.bind(survey));

document.querySelector("#array-button").addEventListener("click", function () {
  showResults(); // Uses the default parameter: type = "array".
});

document.querySelector("#string-button").addEventListener("click", function () {
  showResults("string");
});

document.querySelector("#reset-button").addEventListener("click", function () {
  survey.answers = [0, 0, 0];
  renderAnswerCounts();
  document.querySelector("#results-output").textContent =
    "Press a results button to display the current counts.";
  document.querySelector("#call-output").textContent = "";
  showMessage("The survey has been reset.");
});

// Step 5: call() reuses displayResults with another object that has answers.
document.querySelector("#call-button").addEventListener("click", function () {
  const stringResult = survey.displayResults.call(
    { answers: [5, 2, 3] },
    "string",
  );
  const arrayResult = survey.displayResults.call({ answers: [1, 4, 2] });

  document.querySelector("#call-output").textContent =
    `${stringResult}\n[${arrayResult.join(", ")}]`;
});

renderAnswerCounts();
