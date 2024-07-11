//Função para verificar se um número é múltiplo de 2
const isEven = (x) => x % 2 === 0;

// Array de número naturais
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

// fill -> O método fill preenche o array com um valor.
let numbersCopy = Array.of(...numbers);

numbersCopy.fill(0);

console.log(numbersCopy);

// Também podemos passar o índice de início a partir do qual queremos preencher o array, assim:
numbersCopy.fill(2, 1);

console.log(numbersCopy);

// Também é possível passar o índice final (não inclusivo) até o qual queremos preencher o array:
numbersCopy.fill(1, 3, 5);

console.log(numbersCopy);

// O método fill é ótimo se quisermos criar um array e inicializar seusvalores, como vemos a seguir:
let ones = Array(9).fill(1);
console.log(ones)