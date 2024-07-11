// Função para verificar se um número é múltiplo de 2
const isEven = x => x % 2 === 0;

// Array de número naturais
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

// map -> Cria outro array a partir de uma função que contém o critério/condição e devolve os elementos do array que correspondam ao critério.
const myMap = numbers.map(isEven);
console.log(myMap);

// filter -> Cria um array com todos os elementos avaliados com true pela função especificada.
const evenNumbers = numbers.filter(isEven);
console.log(evenNumbers);