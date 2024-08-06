import { swap } from "../../Models/util.js"

// Algoritmo de embaralhamento de Fisher-Yates:
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const randomIndex = Math.floor(Math.random() * (i + 1));
        swap(array, i, randomIndex);
    }
    return array;
}

// Testando o algoritmo de Fisher-Yates:
let array = [1, 2, 3, 4, 5];
console.log(array.join(", "));
array = shuffle(array);
console.log(array.join(", ")); 
