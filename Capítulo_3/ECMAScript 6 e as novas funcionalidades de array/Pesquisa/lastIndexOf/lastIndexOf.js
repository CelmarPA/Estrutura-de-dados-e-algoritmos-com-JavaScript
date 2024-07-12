// Array de número naturais
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

numbers.push(10);
// lastIndexOf -> Devolve a posição do último item do array que corresponda ao critério de pesquisa.
console.log(numbers.lastIndexOf(10)); // 15
console.log(numbers.lastIndexOf(100)); // -1