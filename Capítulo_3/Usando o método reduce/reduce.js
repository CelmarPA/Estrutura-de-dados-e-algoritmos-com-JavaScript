// Função para verificar se um número é múltiplo de 2
const isEven = (x) => x % 2 === 0;

// Array de número naturais
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

// reduce -> recebe uma função com os seguintes parâmetros: previousValue, currentValue, index e array. Os parâmetros index e array são opcionais, portanto não é necessário passálos caso não sejam usados. Podemos usar essa função para devolver um valor que será somado a um acumulador, o qual será devolvido depois que o método reduce parar de executar.
let soma = numbers.reduce((previous, current) => x + y);
console.log(soma);
