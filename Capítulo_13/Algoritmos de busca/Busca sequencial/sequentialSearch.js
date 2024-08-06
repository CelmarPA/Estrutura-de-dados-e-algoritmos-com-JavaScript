import { defaultEquals } from "../../Models/util.js";

const DOES_NOT_EXIST = -1;

// Algoritmo sequential search
function sequentialSearch(array, value, equalsFn = defaultEquals) {
    for (let i = 0;i < array.length; i++) {
        if (equalsFn(value, array[i])) {
            return i;
        }
    }
    return DOES_NOT_EXIST;
}

// Testando algortimo sequentialSearch
let array = [5, 4, 3, 2, 1];

console.log(sequentialSearch(array, 3)) // 2
