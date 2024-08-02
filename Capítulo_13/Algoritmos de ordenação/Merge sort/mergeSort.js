import { defaultCompare, Compare, createNonSortedArray } from "../../Models/util.js";

// Algoritmo de merge sort:
function mergeSort(array, compareFn = defaultCompare) {
    if (array.length > 1) {
        const { length } = array;
        const middle = Math.floor(length / 2);
        const left = mergeSort(array.slice(0, middle), compareFn);
        const right = mergeSort(array.slice(middle, length), compareFn);
        array = merge(left, right, compareFn);
    }
    return array;
}

// Função merge
function merge(left, right, compareFn) {
    let i = 0;
    let j = 0;
    const result = [];
    while (i < left.length && j < right.length) {
        result.push(
            compareFn(left[i], right[j]) === Compare.LESS_THAN ? left[i++] : right[j++]
        );
    }
    return result.concat(i < left.length ? left.slice(i) : right.slice(j));
}

// Teste da função mergeSort
let array = createNonSortedArray(8);
console.log(array.join(", ")); // 8, 7, 6, 5, 4, 3, 2, 1
array = mergeSort(array);
console.log(array.join(", ")); // 1, 2, 3, 4, 5, 6, 7, 8
