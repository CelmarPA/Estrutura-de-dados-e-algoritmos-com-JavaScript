// Com a função map, podemos transformar ou mapear uma coleção de dados para outra coleção de dados. Vamos observar um exemplo que usa a programação imperativa:

const dayOfWeek = [
    { name: "Monday", value: 1 },
    { name: "Tuesday", value: 2 },
    { name: "Wednesday", value: 7 },
];
let daysOfWeekValues_ = [];
for (let i = 0; i < dayOfWeek.length; i++) {
    daysOfWeekValues_.push(dayOfWeek[i].value);
}

console.log(daysOfWeekValues_);

// Vamos agora considerar o mesmo exemplo usando a programação funcional com a sintaxe ES2015+, da seguinte maneira:
const daysOfWeekValues = dayOfWeek.map((day) => day.value);
console.log(daysOfWeekValues);

// Com a função filter, podemos filtrar valores de uma coleção. Vamos considerar um exemplo:
const positiveNumbers_ = function (array) {
    let positive = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i] >= 0) {
            positive.push(array[i]);
        }
    }
    return positive;
};
console.log(positiveNumbers_([-1, 1, 2, -2]));

// Podemos escrever o mesmo código usando o paradigma funcional, assim:
const positiveNumbers = (array) => array.filter((num) => num >= 0);
console.log(positiveNumbers([-1, 1, 2, -2]));

// Além disso, com a função reduce, podemos reduzir uma coleção a um valor específico. Por exemplo, vamos observar como podemos somar os valores de um array:
const sumValues = function (array) {
    let total = array[0];
    for (let i = 1; i < array.length; i++) {
        total += array[i];
    }
    return total;
};
console.log(sumValues([1, 2, 3, 4, 5]));

// Também podemos escrever o código anterior assim:
const sum_ = function (array) {
    return array.reduce(function (a, b) {
        return a + b;
    });
};
console.log(sum_([1, 2, 3, 4, 5]));

// Essas funções também podem ser combinadas com as funcionalidades da ES2015, por exemplo, com o operador de desestruturação para atribuição e as funções de seta, como vemos no código a seguir.
const sum = (arr) => arr.reduce((a, b) => a + b);
console.log(sum([1, 2, 3, 4, 5]));

// Vamos analisar outro exemplo. Suponha que tenhamos de escrever uma função para concatenar vários arrays. Para isso, podemos criar outro array que conterá todos os elementos dos demais arrays. O código a seguir pode ser executado usando o paradigma imperativo.
const mergeArrays_ = function (arrays) {
    const count = arrays.length;
    let newArray = [];
    let k = 0;
    for (let i = 0; i < count; i++) {
        for (let j = 0; j < arrays[i].length; j++) {
            newArray[k++] = arrays[i][j];
        }
    }
    return newArray;
};
console.log(mergeArrays_([[1, 2, 3], [4, 5], [6]]));

// Nesse exemplo, observe que declaramos variáveis e usamos laços. Vamos agora executar o código implementado antes usando a programação funcional em JavaScript, assim:
const mergeArraysConcat = function (arrays) {
    return arrays.reduce(function (p, n) {
        return p.concat(n);
    });
};
console.log(mergeArraysConcat([[1, 2, 3], [4, 5], [6]]));

// Podemos também simplificar mais ainda o código com a ES2015, como vemos no código a seguir.
const mergeArrays = (...arrays) => [].concat(...arrays);
console.log(mergeArrays([1, 2, 3], [4, 5], [6]));