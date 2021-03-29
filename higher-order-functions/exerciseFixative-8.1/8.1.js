// PART I
const greaterThan = (number1) => (number2) => number2 > number1;
console.log(greaterThan(10)(15))

// ------------------------------------------------------
// PART II
const wakeup = () =>  {console.log ('acordando');}

const coffee = () =>  {console.log ('Bora tomar café!');}

const sleep = () =>  {console.log ('Partiu dormir!');}

const doingThings = (_wakeup) => (_coffee) => (sleep);

console.log(doingThings);