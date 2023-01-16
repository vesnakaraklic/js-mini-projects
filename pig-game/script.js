'use strict';

const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
let currentScore0 = document.getElementById('current--0');
let currentScore1 = document.getElementById('current--1');
const diceEl = document.querySelector('.dice');
const btnRollDice = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
let totalScore0 = 0; 
let totalScore1 = 0;
let countOne = 0;

score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');

btnRollDice.addEventListener('click', function() {
    const randNumber = Math.trunc(Math.random() * 6) +1;
    diceEl.classList.remove('hidden');

    diceEl.src = `dice-${randNumber}.png`;
    
    if(randNumber !== 1) {
        countOne % 2 === 0 || countOne === 0 ? totalScore0 += randNumber : totalScore1 += randNumber;
        currentScore0.textContent = totalScore0;
        currentScore1.textContent = totalScore1;
    } else {
        countOne++;
        currentScore0.textContent = 0;
        currentScore1.textContent = 0;
    }
})

btnHold.addEventListener('click', function() {
    console.log(countOne, totalScore0, totalScore1);
    countOne % 2 === 0 || countOne === 0 ? score0El.textContent = totalScore0 : score1El.textContent = totalScore1;
    countOne++;
    currentScore0.textContent = 0;
    currentScore1.textContent = 0;
})
