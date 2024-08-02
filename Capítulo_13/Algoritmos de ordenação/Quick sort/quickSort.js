import { Compare, defaultCompare, swap, createNonSortedArray } from "../../Models/util.js";

// Algoritmo de quick sort:
function quickSort(array, compareFn = defaultCompare) {
    return quick(array, 0, array.length - 1, compareFn);
};

// Função quick
function quick(array, left, right, compareFn) {
    let index;
    if (array.length > 1) {
        index = partition(array, left, right, compareFn);
        if (left < index - 1) {
            quick(array, left, index - 1, compareFn);
        }
        if (index < right) {
            quick(array, index, right, compareFn)
        }
    }
    return array;
}

// Função partition
function partition(array, left, right, compareFn) {
    const pivot = array[Math.floor((right + left) / 2)];
    let i = left;
    let j = right;
    while (i <= j) {
        while (compareFn(array[i], pivot) === Compare.LESS_THAN) {
            i++;
        }
        while (compareFn(array[j], pivot) === Compare.BIGGER_THAN) {
            j--
        }
        if (i <= j) {
            swap(array, i, j);
            i++;
            j--;
        }
    }
    return i;
}

// Teste da função insertionSort
let array = [3, 5, 1, 6, 4, 7, 2];
console.log(array.join(", ")); // 3, 5, 1, 6, 4, 7, 2
array = quickSort(array);
console.log(array.join(", ")); // 1, 2, 3, 4, 5, 6, 7
