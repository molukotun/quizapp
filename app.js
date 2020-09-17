/* eslint-disable strict */
/**
 * Example store structure
 */

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
        '2005'
      ],
      correctAnswer: '2019'
    },
    {
      question: 'What is 3 x 3 x 2?',
      answers: [
        '12',
        '3',
        '18',
        '26',
      ],
      correctAnswer: 18
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
    }
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

/********** TEMPLATE GENERATION FUNCTIONS **********/

// These functions return HTML templates

/********** RENDER FUNCTION(S) **********/

// This function conditionally replaces the contents of the <main> tag based on the state of the store

/********** EVENT HANDLER FUNCTIONS **********/

// These functions handle events (submit, click, etc)

function generateItemElement(item) {
  return `
    <li data-item-id="${item.id}">
      <span class="shopping-item js-shopping-item ${item.checked ? "shopping-item__checked" : ''}">${item.name}</span>
      <div class="shopping-item-controls">
        <button class="shopping-item-toggle js-item-toggle">
            <span class="button-label">check</span>
        </button>
        <button class="shopping-item-delete js-item-delete">
            <span class="button-label">delete</span>
        </button>
      </div>
    </li>`;
}

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

  })
}

$(handleAnswersSubmitted);