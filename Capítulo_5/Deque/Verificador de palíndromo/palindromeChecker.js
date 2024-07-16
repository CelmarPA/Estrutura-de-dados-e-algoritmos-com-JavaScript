import Deque from "../Deque com atributos privados/dequePrivate.js";

// Um palíndromo é uma palavra, frase, número ou outra sequência de caracteres que é lido igualmente de trás para frente ou de frente para trás, por exemplo, madam ou racecar.

// O algoritmo a seguir utiliza um deque para solucionar esse problema:
function palindromeChecker(aString) {
    if (aString === undefined || aString === null || (aString !== null && aString.length === 0)) { // Verifica se a string é válida
        return false;
    }
    const deque = new Deque();
    const lowerString = aString.toLocaleLowerCase().split(" ").join(""); // Transforma todas as letras em minúsculas e remove também todos os espaços
    let isEqual = true;
    let firstChar, lastChar;
    for (let i = 0; i < lowerString.length; i++) { // Inseri todos os caracteres da string no deque
        deque.addBack(lowerString.charAt(i));
    }
    // Enquanto tivermos elementos no deque (se restar apenas um caractere, será um palíndromo) e a string for um palíndromo
    while (deque.size() > 1 && isEqual) { 
        firstChar = deque.removeFront(); // removemos um elemento da frente
        lastChar = deque.removeBack(); // removemos um elemento de trás
        // Se os caracteres não coincidirem, a string não será um palíndromo
        if (firstChar !== lastChar) {
            isEqual = false;
        }
    }
    return isEqual;
}

// Podemos usar o código a seguir para testar o algoritmo palindromeChecker:
console.log("a", palindromeChecker("a"));
console.log("aa", palindromeChecker("aa"));
console.log("kayak", palindromeChecker("kayak"));
console.log("level", palindromeChecker("level"));
console.log('Was it a car or a cat I saw', palindromeChecker('Was it a car or a cat I saw'));
console.log("Step on no pets", palindromeChecker("Step on no pets"));
