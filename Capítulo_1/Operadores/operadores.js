var num = 0; 

// Operador aritmético
num = num + 2; // Adição
num = num - 1; // Subtração
num = num * 3; // Multiplicação
num = num / 2; // Divisão
num = num % 2; // Modulo (resto de um operação de divisão);
num++; // Incremento
num--; // Decremento

// Operador de atribuição
num = 0; // Atribuição
num += 1; // Atribuição de soma
num -= 2; // Atribuição de subtração
num *= 3; // Atribuição de multiplicação
num /= 2; // Atribuição de divisão
num %= 3; // Atribuição de resto

// Operador de comparação
console.log("O valor de num é igual: " + num);
console.log("num == 1 : " + (num == 1)); // Igual a 
console.log("num === 1 : " + (num === 1)); // Igual a (tanto valor quanto tipo)
console.log("num != 1 : " + (num != 1)); // Diferente de
console.log("num > 1 : " + (num > 1)); // Maior que
console.log("num < 1 : " + (num < 1)); // Menor que
console.log("num >= 1 : " + ( num >= 1)); // Maior ou igual a 
console.log("num < = 1 : " + (num <= 1)); // Menor ou igual a

// Operador lógico
console.log("true && false : " + (true && false)); // E
console.log("true || false : " + (true || false)); // OU
console.log("!true : " + (!true)); // Negação

// Operador bit a bit
console.log("5 & 1 : " + (5 & 1)); // E
console.log("5 | 1 : " + (5 | 1)); // OU
console.log("~ 5 : " + (~5)); // Negação
console.log("5 ^ 1 : " + (5 ^ 1)); ; // Ou exclusivo (Xor)
console.log("5 << 1 : " + (5 << 1)); // Deslocamento para a esquerda (left shift)
console.log("5 >> 1 : " + (5 >> 1)); // Deslocamento para a direita (right shift)

// Operator typeof
console.log("typeof num: " + typeof num);
console.log("typeof Packt: " + typeof "Packt");
console.log("typeof true: " + typeof true);
console.log("tyoeof [1, 2, 3]: " + typeof [1, 2, 3]);
console.log("typeof {name: 'John'}: " + typeof {name: "John"});

// Operador delete
var myObj = {name: "John", age: 21};
delete myObj.age;
console.log(myObj); // Exibe Object {name: "John"}
