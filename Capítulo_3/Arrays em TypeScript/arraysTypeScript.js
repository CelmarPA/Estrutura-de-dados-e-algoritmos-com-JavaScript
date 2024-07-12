// Por causa da inferência de tipo, o TypeScript entende que a declaração do array numbers é igual a const numbers: number[]. Por esse motivo, não precisamos sempre declarar explicitamente o tipo da variável se ela for inicializada em sua declaração.
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//  const friends: {name: string, age: number}[];
var friends = [
    { name: "John", age: 30 },
    { name: "Ana", age: 20 },
    { name: "Chris", age: 25 },
];

function comparePerson(a, b) {
    if (a.age < b.age) {
        return -1;
    } else if (a.age > b.age) {
        return 1;
    } else {
        return 0;
    }
}
