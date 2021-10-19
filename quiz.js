/*targeting both class and id */
const question = document.querySelector('#question');
const choices = Array.from(document.querySelectorAll('#.choice-text'));
const progressText = document.querySelector('#progressText');
const scoreText = document.querySelector('#score');
const progressBarFull = document.querySelector('#progressBarFull');

let currentQuestion = {}
let acceptingAnswers = true
let score = 0 
let questionCounter = 0 
let availableQuestions = []

/* my questions and answers*/ 
let questions = [
    {
        question: 'Who is the oldest of the kardashian/ Jenner siblings?',
        choice1: 'Kendall Jenner',
        choice2: 'Rob Kardashian',
        choice3: 'Kortney Kardashian',
        choice4: 'Kim Kardashian',
        answer: 3, 
    },
    {
        question: 'What is the name of the kardashian sisters father?',
        choice1: 'Rob Kardashian',
        choice2: 'Bruce Jenner',
        choice3: 'Caitlin Jenner',
        choice4: 'Robert Kardashian',
        answer: 4, 
    },
    {
        question: 'Where did Kim Kardashian loose her famous earring?',
        choice1: 'Bora Bora',
        choice2: 'Maldives',
        choice3: 'Hawaii',
        choice4: 'Bali',
        answer: 1, 
    },
    {
        question: 'How many Kardashian/ jenner grandkids are there?',
        choice1: '7',
        choice2: '4',
        choice3: '10',
        choice4: '12',
        answer: 3, 
    },
]

const SCORE_POINTS  = 100
const MAX_QUESTIONS = 4

startGame = () => {
    questionCounter = 0 
    score = 0 
    availableQuestions = [...questions]
    getNewQuestions ()
}

/* creating my getnewquestion function*/
getNewQuestion= () => {
    if(availableQuestions.length === 0 || questionCounter > MAX_QUESTIONS) {
        localStorage.setItem('mostRecentScore', score)

        return window.location.assign('/end.html')
    }

    questionCounter++ 
    progressText.innerText = `Question ${questionCounter} of ${MAX_QUESTIONS}`
}