/* declaring my variables*/
const username = document.querySelector('#username');
const saveScoreBtn = document.querySelector('#saveScoreBtn');
const finalScore = document.querySelector('#finalScore');
const mostRecentScore = localStorage.getItem('mostRecentScore');


finalScore.innerText = mostRecentScore;
/* renableing save button*/
username.addEventListener('keyup', () => {
saveScoreBtn.disabled = !username.value;
});
