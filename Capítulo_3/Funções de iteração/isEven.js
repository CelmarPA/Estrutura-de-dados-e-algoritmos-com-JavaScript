function isEven(x) {
    // Retorna true se x for múltiplo de 2.
    console.log(x);
    return x % 2 === 0 ? true : false;
}

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

// return (x % 2 == 0) ? true : false também pode ser representado por return (x % 2 == 0).

// Podemos reescrever a função isEven usando funções de seta:
const isEven = x => x % 2 === 0;
