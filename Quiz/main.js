// DOM
const forms = document.querySelectorAll("form");

const questions = {
  form1: document.getElementsByName("question 1"),
  form2: document.getElementsByName("question 2"),
  form3: document.getElementsByName("question 3"),
};

const correctAnswers = ["A", "C", "B"];
const finalQuestion = correctAnswers.length - 1;
let score = 0;

window.addEventListener("load", () => {
  let questionIndex = 0;
  let answers = [];

  forms.forEach((form, i) => {
    if (i < finalQuestion) form.addEventListener("submit", handleSubmit);
    else {
      form.addEventListener("submit", (e) => {
        handleSubmit(e);
        gradeQuiz();
      });
    }
  });

  function handleSubmit(e) {
    e.preventDefault();

    // Getting the checked answer
    questions[e.target.name].forEach((option) => {
      if (option.checked) answers.push(option.value);
    });

    console.log(answers);
    goToNextQuestion();
  }

  // Hides current and displays next question
  function goToNextQuestion() {
    forms[questionIndex].classList.toggle("hidden");
    questionIndex += 1;
    forms[questionIndex].classList.toggle("hidden");
  }

  function gradeQuiz() {
    for (let j = 0; j < correctAnswers.length; j++)
      answers[j] === correctAnswers[j] && score++;

    // Creating grade page
    const div = document.createElement("div");

    score === 1
      ? (div.textContent = "Study More Next Time!")
      : score === 2
      ? (div.textContent = "So Close!")
      : (div.textContent = "Congratulations");

    const p1 = document.createElement("p");
    p1.classList.add("correct");
    p1.textContent = `Correct Answers: ${score}`;
    const p2 = document.createElement("p");
    p2.classList.add("incorrect");
    p2.textContent = `Wrong Answers: ${correctAnswers.length - score}`;
    const p3 = document.createElement("p");
    p3.classList.add("score");
    p3.textContent = `Grade: ${((score / correctAnswers.length) * 100).toFixed(
      2
    )}%`;
    const playAgainBtn = document.createElement("button");
    playAgainBtn.textContent = "Play Again";
    playAgainBtn.setAttribute("type", "button");
    playAgainBtn.addEventListener("click", reset);
    forms[questionIndex].appendChild(div);
    forms[questionIndex].appendChild(p1);
    forms[questionIndex].appendChild(p2);
    forms[questionIndex].appendChild(p3);
    forms[questionIndex].appendChild(playAgainBtn);
  }

  function reset() {
    score = 0;
    answers = [];
    forms[questionIndex].classList.toggle("hidden");
    forms[questionIndex].innerHTML = "";
    questionIndex = 0;
    forms[questionIndex].classList.toggle("hidden");
    for (const key in questions) {
      questions[key].forEach((question) => (question.checked = false));
    }
  }
});
