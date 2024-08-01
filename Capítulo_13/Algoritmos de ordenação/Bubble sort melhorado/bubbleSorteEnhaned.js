import { defaultCompare, Compare, swap, createNonSortedArray } from "../../Models/util.js";

// Algoritmo de bubble sort melhorado:
function BubbleSortEnhanced(array, compareFn = defaultCompare) {
    const { length } = array;
    for (let i = 0; i < length; i++) {
        for (let j = 0; j < length - 1 - i; j++) {
            if (compareFn(array[j], array[j + 1]) === Compare.BIGGER_THAN) {
                swap(array, j, j + 1);
            }
        }
    }
    return array;
}

// Teste da função bubbleSortEnhanced
let array = createNonSortedArray(5);
console.log(array.join(", ")); // 5, 4, 3, 2, 1
array = BubbleSortEnhanced(array);
console.log(array.join(", ")); // 1, 2, 3, 4, 5