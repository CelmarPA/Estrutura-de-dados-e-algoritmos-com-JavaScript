import { createNonSortedArray } from "../../Models/util.js";

// Algoritmo de counting sort:
function countingSort(array) {
    if (array.length < 2) {
        return array;
    }
    const maxValue = findMaxValue(array);
    const counts = new Array(maxValue + 1);
    array.forEach(element => {
        if (!counts[element]) {
            counts[element] = 0;
        }
        counts[element]++;
    });
    let sortedIndex = 0;
    counts.forEach((count, i) => {
        while (count > 0) {
            array[sortedIndex++] = i;
            count--;
        }
    });
    return array;
}

// Função findMaxValue
function findMaxValue(array) {
    let max = array[0]
    for (let i = 0; i < array.length; i++) {
        if (array[i] > max) {
            max = array[i];
        }
    }
    return max;
}

// Teste da função countingSort
let array = createNonSortedArray(8);
console.log(array.join(", ")); // 8, 7, 6, 5, 4, 3, 2, 1
array = countingSort(array);
console.log(array.join(", ")); // 1, 2, 3, 4, 5, 6, 7, 8
