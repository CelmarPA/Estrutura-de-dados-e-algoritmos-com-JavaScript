// Na ES5, podemos transformar arrays em parâmetros usando a função apply().

// A ES2015 tem o operador de espalhamento (spread operator), representado por ..., para isso.

function sum(x = 1, y = 2, z = 3) {
    return x + y + z;
}

let params = [3, 4, 5];
console.log(sum(...params)); // exibe 12

// O código anterior é igual a este código escrito em ES5:
console.log(sum.apply(undefined, params)); // exibe 12

// O operador de espalhamento (...) também pode ser usado como um
// parâmetro rest em funções para substituir arguments. Considere o
// exemplo a seguir:
function restParameterFunction(x, y, ...a) {
    return (x + y) * a.length;
}
console.log(restParameterFunction(1, 2, "hello", true, 7));

// O código anterior é igual ao código a seguir (também exibe 9 no console):
function restParameterFunction1(x, y) {
    var a = Array.prototype.slice.call(arguments, 2);
    return (x + y) * a.length;
}
console.log(restParameterFunction1(1, 2, 'hello', true, 7));