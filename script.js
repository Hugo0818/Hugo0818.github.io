let randomNumber = Math.floor(Math.random() * 100) + 1;
let attemptsLeft = 10;
let score = 0;

const guessInput = document.getElementById("guessInput");
const submitBtn = document.getElementById("submitBtn");
const restartBtn = document.getElementById("restartBtn");
const message = document.getElementById("message");
const attemptsDisplay = document.getElementById("attempts");
const scoreDisplay = document.getElementById("score");

submitBtn.addEventListener("click", function () {
  const userGuess = Number(guessInput.value);

  if (!userGuess || userGuess < 1 || userGuess > 100) {
    message.textContent = "Please enter a number between 1 and 100.";
    return;
  }

  attemptsLeft--;
  attemptsDisplay.textContent = attemptsLeft;

  if (userGuess === randomNumber) {
    message.textContent = "Correct! You guessed the number!";
    score += 10;
    scoreDisplay.textContent = score;
    submitBtn.disabled = true;
  } else if (attemptsLeft === 0) {
    message.textContent = `Game over! The number was ${randomNumber}.`;
    submitBtn.disabled = true;
  } else if (userGuess < randomNumber) {
    message.textContent = "Too low! Try again.";
  } else {
    message.textContent = "Too high! Try again.";
  }

  guessInput.value = "";
});

restartBtn.addEventListener("click", function () {
  randomNumber = Math.floor(Math.random() * 100) + 1;
  attemptsLeft = 10;
  message.textContent = "Start guessing!";
  attemptsDisplay.textContent = attemptsLeft;
  guessInput.value = "";
  submitBtn.disabled = false;
});
