'use strict';

const flights = '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

const [firstRow, secondRow, thirdRow, forthRow] = flights.split('+');

//first row
const [frPart1, frPart2, frPart3, frPart4] = firstRow.split(';');
const [frPart1left, frPart1leftright] = frPart1.slice(1).split('_');
const [frPart4left, frPart4right] = frPart4.split(':');
console.log(`${frPart1left.padStart(10)} ${frPart1leftright} from ${frPart2.slice(0,3).toUpperCase()} to ${frPart3.slice(0,3).toUpperCase()} (${frPart4left}h${frPart4right})`);

//second row
const [srPart1, srPart2, srPart3, srPart4] = secondRow.split(';');
const [srPart4left, srPart4right] = srPart4.split(':');
console.log(`${srPart1.slice(1).padStart(20)} from ${srPart2.slice(0,3).toUpperCase()} to ${srPart3.slice(0,3).toUpperCase()} (${srPart4left}h${srPart4right})`);

//third row
const [trPart1, trPart2, trPart3, trPart4] = thirdRow.split(';');
const [trPart1left, trPart1leftright] = trPart1.slice(1).split('_');
const [trPart4left, trPart4right] = trPart4.split(':');
console.log(`${trPart1left.padStart(12)} ${trPart1leftright} from ${trPart2.slice(0,3).toUpperCase()} to ${trPart3.slice(0,3).toUpperCase()} (${trPart4left}h${trPart4right})`);

//forth row
const [forPart1, forPart2, forPart3, forPart4] = forthRow.split(';');
const [forPart4left, forPart4right] = forPart4.split(':');
console.log(`${forPart1.slice(1).padStart(20)} from ${forPart2.slice(0,3).toUpperCase()} to ${forPart3.slice(0,3).toUpperCase()} (${forPart4left}h${forPart4right})`);