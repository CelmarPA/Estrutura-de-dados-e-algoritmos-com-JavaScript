import {
    defaultCompare,
    Compare,
    defaultEquals,
    defaultDiff,
    biggerOrEquals,
    lesserOrEquals,
} from "../../Models/util.js";
const DOES_NOT_EXIST = -1;

// Algoritmo interpolation search
function interpolationSearch(
    array,
    value,
    compareFn = defaultCompare,
    equalsFn = defaultEquals,
    diffFn = defaultDiff
) {
    const { length } = array;
    let low = 0;
    let high = length - 1;
    let position = -1;
    let delta = -1;
    while (
        low <= high &&
        biggerOrEquals(value, array[low], compareFn) &&
        lesserOrEquals(value, array[high], compareFn)
    ) {
        delta = diffFn(value, array[low]) / diffFn(array[high], array[low]);
        position = low + Math.floor((high - low) * delta);
        if (equalsFn(array[position], value)) {
            return position;
        }
        if (compareFn(array[position], value) === Compare.LESS_THAN) {
            low = position + 1;
        } else {
            high = position - 1;
        }
    }
    return DOES_NOT_EXIST;
}

// Testando a função interpolationSearch
let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let value = 4;
console.log(interpolationSearch(array, value)); // 3