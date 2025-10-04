function checkAnswer() {
    // The correct answer for the quiz
    const correctAnswer = "4";
    // Get the selected radio button with name="quiz"
    const selectedOption = document.querySelector('input[name="quiz"]:checked');
    // If an option is selected, get its value
    const userAnswer = selectedOption ? selectedOption.value : null;
    // Get the feedback element
    const feedback = document.getElementById("feedback");
    // Compare answers and display feedback
    if (userAnswer === correctAnswer) {
        feedback.textContent = "Correct! Well done.";
    } else {
        feedback.textContent = "That's incorrect. Try again!";
    }
}

// Add event listener to the submit button
document.getElementById("submit-answer").addEventListener("click", checkAnswer);
