console.log("connected!")
const question = document.querySelector('#question');
const choices = Array.from(document.querySelectorAll('.choice-text'));
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
    progressBarFull.style.width = `${(questionCounter/MAX_QUESTIONS) * 100}%`

    const questionIndex = Math.floor(Math.random() * availableQuestions.length)
    currentQuestion = availableQuestions [questionsIndex]
    question.innerText = currentQuestion.question

    choices.forEach(choice => {
        const number = choice.dataset['number']
        choice.innerText = currentQuestion['choice' + number]
    })

    availableQuestions.splice(questionIndex, 1)

    acceptingAnswers = true
    
}

choices.forEach(choice => {
    choice.addEventListener('click', e => {
        if(!acceptingAnswers) return

        acceptingAnswers = false
        const selectedChoice = e.target
        const selectedAnswer = selectedChoice.dataset['number']

        let classToApply = selectedAnswer == currentQuestion.answer ? 'correct' :
        'incorrect'

        if(classToApply === 'correct') {
            incrementScore(SCORE_POINTS)
        }

        selectedChoice.parentElement.classlist.add(classToApply)

        setTimeout(() => {
            selectedChoice.parentElement.classlist.remove(classToApply)
            getNewQuestion()
        },1000)
    })
})

