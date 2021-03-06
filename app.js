/* eslint-disable strict */
const QUIZ = {
  // 5 or more questions are required
  questions: [
    {
      question: 'What is 9/5?',
      answers: {
        a: '1.9',
        b: '1.4',
        c: '2.2',
        d: '1.5'
      },
      correctAnswer: 'b'
    },
    {
      question: 'What is the definition of annualization?',
      answers: {
        a: 'relating to, measuring, or measured by the quantity of something rather than its quality',
        b: 'any type of investment under which the borrower or issuer is obliged to make payments of a fixed amount on a fixed schedule',
        c: 'to convert a short-term calculation or rate into an annual rate',
        d: 'a financial system concerned with raising capital by dealing in shares, bonds, and other long-term investments'
      },
      correctAnswer: 'c'
    },
    {
      question: 'What is 3 x 3 x 2?',
      answers: {
        a: '12',
        b: '3',
        c: '18',
        d: '26'
      },
      correctAnswer: 'c'
    },
    {
      question: 'What does inundate mean?',
      answers: {
        a: 'overwhelm',
        b: 'new',
        c: 'meaningless',
        d: 'creative'
      },
      correctAnswer: 'a'
    },
    {
      question: 'What is this? - \'',
      answers: {
        a: 'comma',
        b: 'semi-colon',
        c: 'colon',
        d: 'apostrophe'
      },
      correctAnswer: 'd'
    },
    {
      question: '3x + 3 = 15, What is the value of x?',
      answers: {
        a: '4',
        b: '3',
        c: '9',
        d: '7'
      },
      correctAnswer: 'a'

    }
  ],
  quizStarted: false,
  questionNumber: 0,
  score: 0,
  message: '',
  message2: '',
  ansCor: false

};

//Welcome Screen Template
function welcomeScreen() {
  const template =
        `<div class="welcome-section"></div>
    <h1 class = "ready-title">Are you ready to test your mind?"</h1>
    <img src="images/students.png"  alt ="students holding hands">
    <div>
    <button class = "startbtn">Start Quiz</button>
    </div>`;
  return template;
}

//Button for start quiz
function startQuiz() {
  $('main').on("click", ".startbtn",  function () {
    QUIZ.quizStarted = true;
    render();
  });
}

//Generate Question Template
function generateQuestion(questionNumber) {
  let currentChoices = [];
  for (letter in QUIZ.questions[QUIZ.questionNumber].answers) {
    currentChoices.push(`<label><input type="radio" id = "${QUIZ.questions[QUIZ.questionNumber].answers[letter]}" name="radio" value="${letter}"> ${letter} : ${QUIZ.questions[QUIZ.questionNumber].answers[letter]}</label>`)
  }
  currentChoices.join(' ');
  return `<div class ="questions-div">
    <h3 class = "current-score">Current Score: ${QUIZ.score}</h3>
    <h2 class = "question-area">${QUIZ.questions[questionNumber].question}</h2>
    <h3 class = "question-counter">Question #${questionNumber + 1} out of ${QUIZ.questions.length}</h3>
    </div>
    <div class = "answers-div">
    <form id = "questions-form">
    ${currentChoices.join(' ')}
    <button type="submit" class = "nextbtn" >Continue</button>
    </form>
    <div class="alert-sect"></div>
    </div>`
}

function checkAnswer() {
  // $(".nextbtn").click(function (evt) 
  $('main').on('click', '.nextbtn', function(evt) {
    evt.preventDefault();
    let correctAns = QUIZ.questions[QUIZ.questionNumber].correctAnswer;
    let ansName = QUIZ.questions[QUIZ.questionNumber].n
    let userAns = $(`input[name = "radio"]:checked`).val();
    QUIZ.ansCor = userAns === correctAns;
    if (QUIZ.ansCor) {
      QUIZ.score++;
      QUIZ.message = "You Got That Right!!!";
      QUIZ.message2 = "WOOHOOO!!! The Answer Was: " + userAns.toUpperCase() + ") " + QUIZ.questions[QUIZ.questionNumber].answers[userAns];
    } else if (userAns !== correctAns) {
      QUIZ.message = "You Got That Wrong :P!!!";
      QUIZ.message2 = "You Should Study!!!! <br/> Correct answer is: " + correctAns.toUpperCase() + ") " + QUIZ.questions[QUIZ.questionNumber].answers[correctAns] + "<br/> " + "You Selected: " + userAns.toUpperCase() + ") " + QUIZ.questions[QUIZ.questionNumber].answers[userAns];
    }
    if (!userAns) {
      $(".alert-sect").text("Please Select An Answer!");
    } else {
      if (QUIZ.questionNumber + 1 === QUIZ.questions.length) {
        QUIZ.questionNumber++;
        renderEnd();
      } else {
        QUIZ.questionNumber++;
        renderResults();
      }
    }
  })
}

function resultScreen() {
  let template = '';
  if (QUIZ.questionNumber === QUIZ.questions.length) {
    template =
            `<div class="welcome-section"></div>
    <h1 class = "ready-title">THANK YOU FOR TAKING THIS QUIZ!"</h1>
    <h3 class = "question-counter"> You Scored ${QUIZ.score} Out Of ${QUIZ.questions.length}</h3>
    <button class = "restartbtn">Try Again</button>
    <div>
    </div>`;
  } else {
    template = `<div class = "questions-div">
         <h3 class = "current-score">Current Score: ${QUIZ.score}</h3>
    <h2 class = "message-area1">${QUIZ.message}</h2>
    <h3 class = "message-area2 ${!QUIZ.ansCor ? 'message-area2Wrong' : 'message-area2Right'}">${QUIZ.message2}</h3>
    </div>
    <div class = "Anshere"></div>
    <div></div>
    <button class = "continuebtn">Continue</button>`;
  }
  return template;
}


function handleContinueQuiz() {
  $('main').on('click', '.continuebtn', function() {
    render();
  })
}

function restartQuiz() {
  $('main').on("click", ".restartbtn",  function () {
    QUIZ.quizStarted = false;
    QUIZ.score = 0;
    QUIZ.questionNumber = 0;
    render();
  });
}

function render() {
  let page = '';
  if (QUIZ.quizStarted === false) {
    page += welcomeScreen();
  } else {
    if (QUIZ.quizStarted === true) {
      page += generateQuestion(QUIZ.questionNumber);
    }
  }
  $("main").html(page);
}

function renderResults() {
  let page = '';
  page += resultScreen();
  $("main").html(page);
}

function renderEnd() {
  let page = '';
  page += resultScreen();
  $("main").html(page);
}

function main() {
  render();
  startQuiz();
  checkAnswer();
  handleContinueQuiz();
  restartQuiz();
}


$(main);