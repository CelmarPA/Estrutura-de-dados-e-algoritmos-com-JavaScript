function sum(x = 1, y = 2, z = 3) {
    return x + y + z;
}
console.log(sum(4, 2)); // exibe 9

// Como não estamos passando z como parâmetro, ele terá um valor igual a 
// 3 como default. Desse modo, 4 + 2 + 3 == 9.

// Antes da ES2015, era necessário escrever a função anterior usando o código a seguir:
function sum1(x, y, z) {
    if (x === undefined) x = 1;
    if (y === undefined) y = 2;
    if (z === undefined) z = 3;
    return x + y + z;
}
console.log(sum1(4, 2)); // exibe 9

// Ou, também, poderíamos ter escrito o código assim:
function sum2() {
    var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
    var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2;
    var z = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 3;
    return x + y + z;
}
console.log(sum2(4, 2)); // exibe 9

// As funções JavaScript também têm um objeto embutido chamado arguments. Esse objeto é um array dos argumentos usados quando a função é chamada. Podemos acessar dinamicamente os argumentos e usá-los, mesmo que não saibamos o nome deles.