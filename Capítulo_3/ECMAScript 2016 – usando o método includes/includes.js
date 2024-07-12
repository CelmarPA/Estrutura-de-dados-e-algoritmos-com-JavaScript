// Array de número naturais
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

// includes -> Devolve true caso um elemento seja encontrado no array, e false caso contrário. Foi adicionado na ES2016.
console.log(numbers.includes(15));
console.log(numbers.includes(20));

// Também é possível passar um índice de início a partir do qual queremos que o array faça a pesquisa do valor:
let numbers2 = [7, 6, 5, 4, 3, 2, 1];
console.log(numbers2.includes(4, 5));

// A saída do exemplo anterior será false porque o elemento 4 não existe após a posição 5.