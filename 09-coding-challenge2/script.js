const game = {
    team1: 'Bayern Munich',
    team2: 'Borrussia Dortmund', 
    players: [
        [
            'Neuer',
            'Pavard',
            'Martinez',
            'Alaba',
            'Davies',
            'Kimmich',
            'Goretzka',
            'Coman',
            'Muller',
            'Gnarby',
            'Lewandowski',
        ],
        [
            'Burki',
            'Schulz',
            'Hummels',
            'Akanji',
            'Hakimi',
            'Weigl',
            'Witsel',
            'Hazard',
            'Brandt',
            'Sancho',
            'Gotze',
        ],
    ],
    score: '4:0',
    scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
    date: 'Nov 9th, 2037',
    odds: {
        team1: 1.33,
        x: 3.25,
        team2: 6.5,
    },
};

//1
//First way, longer
// let indexGoals = 1;
// for(const player of game.scored) {
//     console.log(`Goal ${indexGoals}: ${player}`);
//     indexGoals++;
// }

//Second way, better
for( const [i, player] of game.scored.entries())
    console.log(`Goal ${i+1}: ${player}`);

//2
let sumOdds = 0;
for(const odd of Object.values(game.odds)) {
    sumOdds += odd;
}
console.log(`The average odd is: ${Math.round(sumOdds/Object.keys(game.odds).length * 100)/100}`);

//3
for(const odd of Object.keys(game.odds)) {

    //First way, longer
    // switch(odd) {
    //     case 'team1': {
    //         console.log(`Odd of victory ${game.team1}: ${game.odds[odd]}`);
    //         break;
    //     }
    //     case 'x': {
    //         console.log(`Odd of draw: ${game.odds[odd]}`);
    //         break;
    //     }
    //     case 'team2': {
    //         console.log(`Odd of victory ${game.team2}: ${game.odds[odd]}`);
    //         break;
    //     }
    //     default:
    //         break;
    // }

    //Second way, better
    odd == 'team1' ? console.log(`Odd of victory ${game.team1}: ${game.odds[odd]}`) : odd == 'team2' ? console.log(`Odd of victory ${game.team2}: ${game.odds[odd]}`) : console.log(`Odd of draw: ${game.odds[odd]}`);
}
