// Array de número naturais
let numbers = [15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1];

// sorte -> Organiza o array em ordem alfabética ou de acordo com a função especificada.
numbers.sort();

console.log(numbers);

// No entanto, se exibirmos o array, o resultado será [1, 10, 11, 12, 13, 14, 15, 2, 3, 4, 5, 6, 7, 8, 9]. Ele não está ordenado corretamente. Isso ocorre porque o método sort deixa os elementos em ordem lexicográfica e pressupõe que todos os elementos são strings.

// Podemos também implementar a nossa própria função de comparação. Como o nosso array tem elementos numéricos, podemos escrever o código a seguir:
numbers.sort((a, b) => a - b);

console.log(numbers);

// Esse código devolverá um número negativo se b for maior que a, um número positivo se a for maior que b e 0 (zero) se forem iguais. Isso significa que, se um valor negativo for devolvido, é sinal de que a é menor que b, o que será usado posteriormente pela função sort para organizar os elementos.

// O código anterior também pode ser representado pelo código a seguir:
function compare(a, b) {
    if (a < b) {
        return -1;
    } else if (a > b) {
        return 1;
    } else {
        return 0;
    }
}

// Isso ocorre porque a função sort da classe Array de JavaScript pode receber um parâmetro chamado compareFunction, responsável pela ordenação do array.
