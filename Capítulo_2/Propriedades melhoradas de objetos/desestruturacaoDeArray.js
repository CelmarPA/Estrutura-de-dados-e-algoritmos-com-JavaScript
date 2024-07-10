// Considere o código a seguir:
let [x, y] = ["a", "b"];

// Executar o código anterior é o mesmo que fazer o seguinte:
// let x = 'a';
// let y = 'b';

// A desestruturação de array também pode ser usada para trocar valores
// (fazer swap) de uma só vez, sem a necessidade de criar variáveis temp, deste modo:
[x, y] = [y, x];
[y, x] = [x, y];
// O código anterior é o mesmo que:
// var temp = x;
// x = y;
// y = temp;

// Há também outra funcionalidade chamada abreviação de propriedades
// (property shorthand), que é outra maneira de executar a desestruturação
// de objetos. Por exemplo, considere o código a seguir:
let obj = { x, y };
console.log(obj); // { x: "a", y: "b" }

// O código anterior é o mesmo que o seguinte:
// var x = 'a';
// var y = 'b';
// var obj2 = { x: x, y: y };
// console.log(obj2); // { x: "a", y: "b" }

// A última funcionalidade que discutiremos nesta seção se chama nomes de
// método abreviados (shorthand method names). Ela permite que os
// desenvolvedores declarem funções dentro de objetos, como se elas
// fossem propriedades. Eis um exemplo:
const hello = {
    name: "abcdef",
    printHello() {
        console.log("Hello");
    }
};
console.log(hello.printHello());

// O código anterior também pode ser escrito assim:
var hello1 = {
    name: "abcdef",
    printHello: function printHello() {
        console.log("Hello")
    }
}
console.log(hello1.printHello());