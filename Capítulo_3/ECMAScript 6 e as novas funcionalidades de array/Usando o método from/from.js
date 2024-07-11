// Função para verificar se um número é múltiplo de 2
const isEven = (x) => x % 2 === 0;

// Array de número naturais
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

// from -> O método Array.from cria outro array a partir de um array existente.
let numbers2 = Array.from(numbers);
console.log(numbers2);

// Também é possível passar uma função para que possamos determinar quais valores queremos mapear.
let evens = Array.from(numbers, isEven)
console.log(evens)