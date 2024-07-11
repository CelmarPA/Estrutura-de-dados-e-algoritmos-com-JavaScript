const isEven = (x) => x % 2 === 0;

// Array de número naturais
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

// entries -> O método entries devolve @@iterator, que contém pares chave/valor.
let aEntries = numbers.entries(); // obtém um iterator de chave / valor
console.log(aEntries.next().value); // [0, 1] - posição 0, valor 1
console.log(aEntries.next().value); // [0, 1] - posição 1, valor 2
console.log(aEntries.next().value); // [0, 1] - posição 2, valor 3

// Também podemos usar o código a seguir como uma alternativa ao código anterior usando for...of:
for (const n of aEntries) {
    console.log(n);
}
console.log("\n")

// keys -> O método keys devolve @@iterator, que contém as chaves do array.
const aKeys = numbers.keys(); // obtém um iterator de chaves
console.log(aKeys.next()); // {value: 0, done: false }
console.log(aKeys.next()); // {value: 1, done: false }
console.log(aKeys.next()); // {value: 2, done: false }
console.log("\n")
// Quando não houver mais valores para iterar, o código aKeys.next() devolverá undefined como value e done como true.

// values -> O método values devolve @@iterator, que contém os valores do array.
const aValues = numbers.values();
console.log(aValues.next()); // {value: 1, done: false }
console.log(aValues.next()); // {value: 2, done: false }
console.log(aValues.next()); // {value: 3, done: false }