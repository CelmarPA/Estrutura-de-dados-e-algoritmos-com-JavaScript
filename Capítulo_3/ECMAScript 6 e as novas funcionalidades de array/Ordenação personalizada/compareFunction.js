/* 
 Podemos ordenar um array que contenha qualquer tipo de objeto  e podemos também criar uma compareFunction para comparar os elementos de acordo com o que for necessário. Por exemplo, suponha que haja um objeto Person com name e age e queremos ordenar o array de acordo com a idade (age) da pessoa. Podemos usar o código a seguir:
*/
const friends = [
    { name: "John", age: 30 },
    { name: "Ana", age: 20 },
    { name: "Chris", age: 25 }, // vírgula no final: ES2017
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
console.log(friends.sort(comparePerson))
