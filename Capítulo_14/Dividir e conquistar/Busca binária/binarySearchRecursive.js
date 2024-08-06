import { quickSort } from "../../../Capítulo_13/Algoritmos de ordenação/Quick sort/quickSort.js";
import {
    defaultCompare,
    Compare,
    createNonSortedArray, DOES_NOT_EXIST
} from "../../Models/util.js";
// O algoritmo de busca binária usando a abordagem de dividir e conquistar
function binarySearchRecursive(
    array,
    value,
    low,
    high,
    compareFn = defaultCompare
) {
    if (low <= high) {
        const mid = Math.floor((low + high) / 2);
        const element = array[mid];
        if (compareFn(element, value) === Compare.LESS_THAN) {
            return binarySearchRecursive(
                array,
                value,
                mid + 1,
                high,
                compareFn
            );
        } else if (compareFn(element, value) === Compare.BIGGER_THAN) {
            return binarySearchRecursive(array, value, low, mid - 1, compareFn);
        } else {
            return mid;
        }
    }
    return DOES_NOT_EXIST;
}

export function binarySearch(array, value, compareFn = defaultCompare) {
    const sortedArray = quickSort(array);
    const low = 0;
    const high = sortedArray.length - 1;
    return binarySearchRecursive(array, value, low, high, compareFn);
}

// Testando o algoritmo binarySearchRecursive
let array = createNonSortedArray(8);
let value = 2;
console.log(binarySearch(array, value)); // 1
