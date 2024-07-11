// Função para verificar se um número é múltiplo de 2
const isEven = (x) => x % 2 === 0;

// Array de número naturais
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

// of -> O método Array.of cria outro array a partir dos argumentos passados para o método.
let numbers3 = Array.of(1);
let numbers4 = Array.of(1, 2, 3, 4, 5, 6);

// O código anterior é o mesmo que executar este código:
// let numbers3 = [1];
// let numbers4 = [1,2,3,4,5,6];
console.log(numbers3);
console.log(numbers4);

// Também podemos usar esse método para fazer uma cópia de um array existente. Eis um exemplo:
let numbersCopy = Array.of(...numbers);
console.log(numbersCopy);

// O código anterior é o mesmo que usar Array.from(numbers4). A 
// diferença, nesse caso, é que estamos usando o operador de espalhamento
