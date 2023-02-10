'use strict';

const answerPollBtn = document.querySelector('.poll');

const poll = {
    questing: 'What is your favourite programming language?',
    options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
    answers: new Array(4).fill(0),

    displayResults: function( type ) {
        type === 'string' ? console.log(`Poll results are: ${this.answers.slice(0,4)}`) : console.log(this.answers);
    },

    registerNewAnswer: function() {
        let number = prompt(`${this.questing}\n${this.options.join('\n')}\n(Write option number)}`)
        number >= 0 && number <=3 ? this.answers[number]++ : console.log("You enter wrong number!");
        console.log(Object.values(this.answers));
        this.displayResults('string');
    },

};

answerPollBtn.addEventListener('click', function() {
    poll.registerNewAnswer();
})

