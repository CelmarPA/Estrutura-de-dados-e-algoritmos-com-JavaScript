// Considere o exemplo a seguir:1
var circleAreaES5 = function circleArea(r) {
    var PI = 3.14;
    var area = PI * r * r;
    return area;
};
console.log(circleAreaES5(2));

// Podemos simplificar a sintaxe do código anterior com este código:
const circleArea = (r) => {
    const PI = 3.14;
    const area = PI * r * r;
    return area;
};

console.log(circleArea(2));

// Se a função tiver uma única instrução, podemos usar uma versão mais
// simples, omitindo a palavra reservada return e as chaves, conforme
// mostrado no trecho de código a seguir:
const circleArea2 = r => 3.14 * r * r;
console.log(circleArea2(2));

// Se a função não receber nenhum argumento, usamos parênteses vazios,
// comumente usados na ES5:
const hello = () => console.log("Hello!");
hello();
