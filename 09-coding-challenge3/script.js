'use strict';

const gameEvents = new Map([
    [17, 'GOAL'],
    [36, 'Substitution'],
    [47, 'GOAL'],
    [61, 'Substitution'],
    [64, 'Yellow card'],
    [69, 'Red card'],
    [70, 'Substitution'],
    [72, 'Substitution'],
    [76, 'GOAL'],
    [80, 'GOAL'],
    [92, 'Yellow card'],
]);

//1
//longer way

// let events = [];
// for(const e of gameEvents) {
//     if(!events.includes(e[1])) 
//     events.push(e[1]);
// }
// console.log(events);

//better way
let events = new Set(gameEvents.values());
console.log(events);

//2
gameEvents.delete(64);
console.log(gameEvents);

//3
console.log(`An event happened, on average, every ${90/gameEvents.size} minutes`);

//4, first way
for(let e of gameEvents.keys()) {
    e <= 45 ? console.log(`[FIRST HALF]: ${e}: ${gameEvents.get(e)}`) : console.log(`[SECOND HALF]: ${e}: ${gameEvents.get(e)}`);
} 

//4, second way
for(const [min, event] of gameEvents) {
    const half = min <= 45 ? 'FIRST' : 'SECOND';
    console.log(`[${half} HALF]: ${min}: ${events}`);
}