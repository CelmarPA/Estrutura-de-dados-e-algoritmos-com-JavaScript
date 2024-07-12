// Array de número naturais
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

function multipleOf13(element, index, array) {
    return(element % 13 === 0)
}

// find -> Busca um elemento no array, dada uma condição desejada (função de callback), e devolve o elemento caso seja encontrado.
console.log(numbers.find(multipleOf13)) // 13