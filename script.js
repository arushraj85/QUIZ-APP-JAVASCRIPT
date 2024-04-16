const quizData = [
  {
    question: "How many continents are in the world ?",
    a: "8",
    b: "7",
    c: "10",
    d: "9",
    correct: "b",
  },
  {
    question: "What is most used programming language in 2019 ?",
    a: "Java",
    b: "C",
    c: "C++",
    d: "javaScript",
    correct: "d",
  },
  {
    question: "Javascript is an _______ language??",
    a: "Object-oriented",
    b: "Object-Based",
    c: "Procedural",
    d: "None",
    correct: "a",
  },
  {
    question:
      " Which of the following keywords is used to define a variable in Javascript?",
    a: "var",
    b: "let",
    c: "const",
    d: "All the above",
    correct: "d",
  },
  {
    question:
      "Which of the following methods can be used to display data in some form using Javascript?",

    a: "Console.log()",
    b: "document.write()",
    c: "windows.alert()",
    d: "All of the above",
    correct: "d",
  },
];
const answerEls = document.querySelectorAll(".answer");
const quiz = document.getElementById("quiz");
const questionEl = document.getElementById("question");

const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
  deselectAnswers();
  const currentQuizData = quizData[currentQuiz];
  questionEl.innerText = currentQuizData.question;
  a_text.innerText = currentQuizData.a;
  b_text.innerText = currentQuizData.b;
  c_text.innerText = currentQuizData.c;
  d_text.innerText = currentQuizData.d;
}

function getSelected() {
  let answer = undefined;

  answerEls.forEach((answerEl) => {
    if (answerEl.checked) {
      answer = answerEl.id;
    }
  });

  return answer;
}

function deselectAnswers() {
  answerEls.forEach((answerEl) => {
    answerEl.checked = false;
  });
}

submitBtn.addEventListener("click", () => {
  // check to see the answer
  const answer = getSelected();

  if (answer) {
    if (answer === quizData[currentQuiz].correct) {
      score++;
    }

    currentQuiz++;
    if (currentQuiz < quizData.length) {
      loadQuiz();
    } else {
      quiz.innerHTML = `
                <h2>You answered correctly at ${score}/${quizData.length} questions.</h2>

                <button onclick="location.reload()">Reload</button>
            `;
    }
  }
});
