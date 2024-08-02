import { defaultCompare, Compare, createNonSortedArray } from "../../Models/util.js";

// Algoritmo de insertion sort:
function insertionSort(array, compareFn = defaultCompare) {
    const { length } = array;
    let temp;
    for (let i = 1; i <  length; i++) {
        let j = i;
        temp = array[i]
        while (j > 0 && compareFn(array[j - 1], temp) === Compare.BIGGER_THAN) {
            array[j] = array[j - 1];
            j--;
        }
        array[j] = temp;
    }
    return array;
}

// Teste da função insertionSort
let array = [3, 5, 1, 4, 2];
console.log(array.join(", ")); // 3, 5, 1, 4, 2
array = insertionSort(array);
console.log(array.join(", ")); // 1, 2, 3, 4, 5
