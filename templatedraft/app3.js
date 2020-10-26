/* eslint-disable quotes */
/* eslint-disable no-undef */
/* eslint-disable strict */


$(document).ready(function(){
});


const store = {
  // 5 or more questions are required
  questions: [
    {
      question: 'What color is broccoli?',
      answers: [
        'red',
        'orange',
        'pink',
        'green'
      ],
      correctAnswer: 'green'
    },
    {
      question: 'What is the current year?',
      answers: [
        '1970',
        '2015',
        '2019',
        '2020'
      ],
      correctAnswer: 'c'
    },
    {
      question: 'What is 3 x 3 x 2?',
      answers: [
        '12',
        '3',
        '18',
        '26',
      ],
      correctAnswer: 'c'
    },
    {
      question: 'What does inundate mean?',
      answers: [
        'meaningless',
        'new',
        'overwhelm',
        'creative'
      ],
      correctAnswer: 'overwhelm'
    },
    {
      question: 'What is this? - \'',
      answers: [
        'comma',
        'semi-colon',
        'colon',
        'apostrophe'
      ],
      correctAnswer: 'apostrophe'
    },
    {
      question: '3x + 3 = 15, What is the value of x?',
      answers: [
        '4',
        '3',
        '9',
        '7',
      ],
      correctAnswer: '4'
    } 
  ],
  quizStarted: false,
  questionNumber: 0,
  score: 0
};

/**
 * 
 * Technical requirements:
 * 
 * Your app should include a render() function, that regenerates the view each time the store is updated. 
 * See your course material and access support for more details.
 *
 * NO additional HTML elements should be added to the index.html file.
 *
 * You may add attributes (classes, ids, etc) to the existing HTML elements, or link stylesheets or additional scripts if necessary
 *
 * SEE BELOW FOR THE CATEGORIES OF THE TYPES OF FUNCTIONS YOU WILL BE CREATING 👇
 * 
 */

$(document).ready(function(){
  // Sets up click behavior on all button elements with the alert class
  // that exist in the DOM when the instruction was executed
  //SUBMIT BUTTON NOT DOING ANYTHING
  //$( '<button class=\'js-quiz-app-form\'>Submit!</button>' ).appendTo( document.body );
  $( '<button id = "submit"> Submit!</button>' ).appendTo( document.body );
  $( 'js - submit js-quiz-app-form' ).click(function() {
    alert("You pressed the button");
  });
});

/********** TEMPLATE GENERATION FUNCTIONS **********/

// These functions return HTML templates
$(function(){

  // jQuery methods go here...

});

/********** RENDER FUNCTION(S) **********/

// This function conditionally replaces the contents of the <main> tag based on the state of the store
$(function(){

  // jQuery methods go here...

});

/********** EVENT HANDLER FUNCTIONS **********/

// These functions handle events (submit, click, etc)
$(function(){

  $("button").dblclick(function(){
    alert("You pressed the button");
  });

});

//$("h1").hide(); TRYING TO TEST MY CODE
/*
// Template Generators
function generateAnswerList(answers){

}

// Rendering Functions
function renderQuestionText(){

}

// Event Handlers
function handleAnswersSubmitted(){
  $('main').on('submit', '#questionform', () => {
    //Retrieve answer identifier of user-checked radio btn
    //Perform check: User answer === Correct Answer?
    //Update STORE and render appropriate section

  });
}

$(handleAnswersSubmitted);
*/


function buildQuiz(){
  const output = [];
  // for each question...
  myQuestions.forEach(
    (currentQuestion, questionNumber) => {

      // variable to store the list of possible answers
      const answers = [];

      // and for each available answer...
      for(letter in currentQuestion.answers){

        // ...add an HTML radio button
        answers.push(
          `<label>
            <input type="radio" name="question${questionNumber}" value="${letter}">
            ${letter} :
            ${currentQuestion.answers[letter]}
          </label>`
        );
      }

      // add this question and its answers to the output
      output.push(
        `<div class="question"> ${currentQuestion.question} </div>
        <div class="answers"> ${answers.join('')} </div>`
      );
    }
  );

  // finally combine our output list into one string of HTML and put it on the page
  quizContainer.innerHTML = output.join('');
}

function showResults(){
  // gather answer containers from our quiz
  const answerContainers = quizContainer.querySelectorAll('.answers');

  // keep track of user's answers
  let numCorrect = 0;

  // for each question...
  myQuestions.forEach( (currentQuestion, questionNumber) => {

    // find selected answer
    const answerContainer = answerContainers[questionNumber];
    const selector = `input[name=question${questionNumber}]:checked`;
    const userAnswer = (answerContainer.querySelector(selector) || {}).value;

    // if answer is correct
    if(userAnswer === currentQuestion.correctAnswer){
      // add to the number of correct answers
      numCorrect++;

      // color the answers green
      answerContainers[questionNumber].style.color = 'lightgreen';
    }
    // if answer is wrong or blank
    else{
      // color the answers red
      answerContainers[questionNumber].style.color = 'red';
    }
  });

  // show number of correct answers out of total
  resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
}

const quizContainer = document.getElementById('quiz');
const resultsContainer = document.getElementById('results');
const submitButton = document.getElementById('submit');


// display quiz right away
buildQuiz();

// on submit, show results
submitButton.addEventListener('click', showResults);


$(document).ready(function(){

});
