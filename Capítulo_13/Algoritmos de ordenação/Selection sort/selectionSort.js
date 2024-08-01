import { defaultCompare, Compare, swap, createNonSortedArray } from "../../Models/util.js";

// Algoritmo de selection sort:
function selectionSort(array, compareFn = defaultCompare) {
    const { length } = array;
    let indexMin;
    for (let i = 0; i < length - 1; i++) {
        indexMin = i;
        for (let j = i; j < length; j++) {
            if (compareFn(array[indexMin], array[j]) === Compare.BIGGER_THAN) {
                indexMin = j;
            }
        }
        if (i !== indexMin) {
            swap(array, i, indexMin);
        }
    }
    return array;
}

// Testar o algoritmo de selection sort
let array = createNonSortedArray(5);
console.log(array.join(", ")); // 5, 4, 3, 2, 1
array = selectionSort(array);
console.log(array.join(", ")); // 1, 2, 3, 4, 5
