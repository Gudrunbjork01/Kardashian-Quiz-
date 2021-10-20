/* targeting my classes an IDs*/ 
const question = document.querySelector('#question');
const choices = Array.from(document.querySelectorAll('.choice-text'));
const progressText = document.querySelector('#progressText');
const scoreText = document.querySelector('#score');

/* declareing my variables*/
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
 
/* my scorepoints and questions */
const SCORE_POINTS  = 100
const MAX_QUESTIONS = 4


startGame = () => {
    questionCounter = 0 
    score = 0 
    availableQuestions = [...questions]
    getNewQuestion ()
}

/* keeping track of my scores*/
getNewQuestion = () => {
    if(availableQuestions.length === 0 || questionCounter > MAX_QUESTIONS) {
        localStorage.setItem('mostRecentScore', score)

        return window.location.assign('/end.html')
    }

/* keeping track of my questions*/
    questionCounter++ 
    progressText.innerText = `Question ${questionCounter} of ${MAX_QUESTIONS}`

/* keeping track of question you are at */
    const questionsIndex = Math.floor(Math.random() * availableQuestions.length)
    currentQuestion = availableQuestions[questionsIndex]
    question.innerText = currentQuestion.question
    
 /* choice tracker*/
        choices.forEach(choice => {
        const number = choice.dataset['number']
        choice.innerText = currentQuestion['choice' + number]
    })
/* keeping track of my questions*/
    availableQuestions.splice(questionsIndex, 1)

    acceptingAnswers = true
    

    function newFunction() {
        progressBarFull.style.width = `${(questionCounter / MAX_QUESTIONS) * 100}%`;
    }
}

choices.forEach(choice => {
    choice.addEventListener('click', e => {
        if(!acceptingAnswers) return

        /* choice A, B, C ,D*/
        acceptingAnswers = false
        const selectedChoice = e.target
        const selectedAnswer = selectedChoice.dataset['number']

        /* targeting red an green css */
        let classToApply = selectedAnswer == currentQuestion.answer ? 'correct' : 'incorrect'

        /* increases score by 100% (100points)*/
        if(classToApply === 'correct') {
            incrementScore(SCORE_POINTS)
        }

        selectedChoice.parentElement.classList.add(classToApply)

        setTimeout(() => {
            selectedChoice.parentElement.classList.remove(classToApply)
            getNewQuestion()

        }, 1000)
    })
})

incrementScore = num => {
    score +=num
    scoreText.innerText = score
}

startGame ()


