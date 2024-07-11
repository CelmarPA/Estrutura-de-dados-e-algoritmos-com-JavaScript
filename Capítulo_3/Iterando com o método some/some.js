// Função para verificar se um número é múltiplo de 2
const isEven = x => x % 2 === 0;

// Array de número naturais
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

// some -> Itera por todos os elementos do array, verificando a condição desejada (função) até que true seja devolvido.
console.log(numbers.some(isEven));