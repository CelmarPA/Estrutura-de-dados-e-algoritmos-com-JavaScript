// Importando a classe Stack
import { Stack } from "../../Proposta para campos de classe na ECMAScript/privateClass.js";

// Convertendo números decimais para binários
function decimalToBinary(decNumber) {
    const remStack = new Stack();
    let number = decNumber;
    let rem;
    let binaryString = "";
    while (number > 0) {
        // enquanto o resultado da divisão não for zero
        rem = Math.floor(number % 2); // vamos obter o resto da divisão
        remStack.push(rem); // e fazer o push desse valor na pilha
        number = Math.floor(number / 2); // atualizamos o número que         será dividido por 2
    }
    while (!remStack.isEmpty()) {
        // fazemos pop dos elementos da pilha até que ela esteja vazia, concatenando os elementos removidos em uma string
        binaryString += remStack.pop().toString();
    }
    return binaryString;
}

// Podemos testar o algoritmo anterior e exibir o seu resultado no console usando o código a seguir:
console.log(decimalToBinary(233)); // 11101001
console.log(decimalToBinary(10)); // 1010
console.log(decimalToBinary(1000)); // 1111101000
