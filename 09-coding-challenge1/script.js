'use strict';

const odds = {
    team1: 1.33,
    x: 3.25,
    team2: 6.5
}

const scored = ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'];

//1.
const players1 = ['Neuer','Pavard','Martinez','Alaba','Davies','Kimmich','Goretzka','Coman','Muller','Gnarby','Lewandowski'];
const players2 = ['Burki','Schulz','Hummels','Akanji','Hakimi','Weigl','Witsel','Hazard','Brandt','Sancho','Gotze'];

//2.
const [gk, ...fieldPlayers] = players1;

//3.
const allPlayers = [...players1, ...players2];

//4. 
const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];

//5
const {team1, x: draw, team2} = odds;

//6
const printGoals = function (...players) {
        console.log(`${players.length} goals were scored`);
}
printGoals(...scored);

//7
team1 < team2 && console.log('Team 1 is more likely to win!');
team1 > team2 && console.log('Team 2 is more likely to win!');

