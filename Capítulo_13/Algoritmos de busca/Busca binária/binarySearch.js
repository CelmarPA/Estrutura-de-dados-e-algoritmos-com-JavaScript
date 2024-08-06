import {
    defaultCompare,
    Compare,
    createNonSortedArray,
} from "../../Models/util.js";
import { quickSort } from "../../Algoritmos de ordenação/Quick sort/quickSort.js";

const DOES_NOT_EXIST = -1;

// Algoritmo binarySearch:
function binarySearch(array, value, compareFn = defaultCompare) {
    const sortedArray = quickSort(array);
    let low = 0;
    let high = sortedArray.length - 1;
    while (lesserOrEquals(low, high, compareFn)) {
        const mid = Math.floor((low + high) / 2);
        const element = sortedArray[mid];
        if (compareFn(element, value) === Compare.LESS_THAN) {
            low = mid + 1;
        } else if (compareFn(element, value) === Compare.BIGGER_THAN) {
            high = mid - 1;
        } else {
            return mid;
        }
    }
    return DOES_NOT_EXIST;
}

// Função lesserOrEquals
function lesserOrEquals(a, b, compareFn) {
    const comp = compareFn(a, b);
    return comp === Compare.LESS_THAN || comp === Compare.EQUALS;
}

// Testando o algoritmo binarySearch
let array = createNonSortedArray(8);
let value = 2;
console.log(binarySearch(array, value)); // 1
