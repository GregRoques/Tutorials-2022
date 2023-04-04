const squares = document.querySelectorAll('.square');
const mole = document.getElementById('mole');
const time = document.getElementById('time');
const score = document.getElementById('score');

let scoreInt
let currTime

let molePosition;

let timerId;
let countDownTimerId;

squares.forEach(square=>{
    square.addEventListener('mousedown', ()=>{
        if(square.id === molePosition){
            square.classList.remove('mole');
            square.classList.add('whacked');
            scoreInt++
            score.textContent = scoreInt;
            molePosition = null;
        }
    })
})

function randomSquare(){
    squares.forEach(square =>{
        square.classList.remove('mole');
        square.classList.remove('whacked');
    });

    let addSquare = squares[Math.floor(Math.random() *9)];
    addSquare.classList.add('mole')
    molePosition = addSquare.id;
}

function countDown(){
    currTime--
    time.textContent = currTime;

    if(currTime === 0){
        clearInterval(countDownTimerId);
        clearInterval(timerId);
        const gameOverText = `GAME OVER!\nYour final score is: ${scoreInt}\n\nPlay Again?`;
        if(confirm(gameOverText) == true){
            startGame();
        }
    }

}

function startGame(){
    scoreInt = 0;
    currTime = 60;
    timerId = setInterval(randomSquare, 800);
    countDownTimerId = setInterval(countDown, 1000)
}

startGame();

