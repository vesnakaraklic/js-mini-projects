'use strict';

const answerPollBtn = document.querySelector('.poll');

const poll = {
    questing: 'What is your favourite programming language?',
    options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
    answers: new Array(4).fill(0),

    displayResults(type = 'array') {
        if(type === 'array') {
            console.log(this.answers);
        } else if(type === 'string') {
            console.log(`Poll results are: ${this.answers.join(', ')}`);
        }
        
    },

    registerNewAnswer() {
        const number = Number(prompt(`${this.questing}\n${this.options.join('\n')}\n(Write option number)}`));
        typeof number === 'number' && number < this.answers.length && this.answers[number]++;
        this.displayResults('string');
        this.displayResults();
    },

};

// answerPollBtn.addEventListener('click', function() {
//     poll.registerNewAnswer();
// })

answerPollBtn.addEventListener('click', poll.registerNewAnswer.bind(poll));

poll.displayResults.call({answers: [5, 2, 3]}, 'string');
poll.displayResults.call({answers: [1, 2, 3, 9, 6, 1]}, 'string');

