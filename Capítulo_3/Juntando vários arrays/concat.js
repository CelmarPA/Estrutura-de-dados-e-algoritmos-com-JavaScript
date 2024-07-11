// concat -> Junta vários arrays e devolve uma cópia dos arrays concatenados.

const zero = 0;
const positiveNumbers = [1, 2 , 3];
const negativeNumbers = [-3, -2, -1];
let numbers = negativeNumbers.concat(0, positiveNumbers);

console.log(numbers);