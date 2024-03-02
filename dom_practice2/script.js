
// random num function
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// grab all needed elements //
var numInput = document.querySelector('.guess')
var checkBtn = document.querySelector('.check')
var score = document.querySelector('.score')
var message = document.querySelector('#message')
var againBtn = document.querySelector('.again')
// var numberLabel = document.querySelector('number')
var numberLabel = document.getElementsByName('number')[0]
var highScore = document.querySelector('.highscore')
var divThatChangesColor = document.querySelector('.game')





// generate random number //
var randNum = getRandomInt(1, 20)
console.log(randNum)

// keeping track of score //
var scoreNumber = 20;
var highScoreVal = 0;


// events for both buttons //


checkBtn.addEventListener('click', btn => {
    var num = numInput.value
    if (num < randNum) {
        message.textContent = 'Too Low!';
        scoreNumber -= 1;
        score.textContent = scoreNumber;
    } else if (num > randNum) {
        message.textContent = 'Too High!';
        scoreNumber -= 1;
        score.textContent = scoreNumber;
    } else {
        message.textContent = 'Correct!'
        divThatChangesColor.style.backgroundColor = 'green';
        numberLabel.textContent = randNum;
        if (scoreNumber > highScoreVal) {
            highScoreVal = scoreNumber;
            highScore.textContent = scoreNumber;
        }
        
    }

})


againBtn.addEventListener('click', btn => {
    randNum = getRandomInt(1, 20);
    console.log(randNum);
    scoreNumber = 20;
    score.textContent = scoreNumber;
    divThatChangesColor.style.backgroundColor = '#222';
    message.textContent = 'Try the Game!';
    numberLabel.textContent = '?'
})