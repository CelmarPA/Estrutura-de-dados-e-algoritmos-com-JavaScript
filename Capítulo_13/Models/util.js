// Compare elements
export const Compare = {
    LESS_THAN: -1,
    BIGGER_THAN: 1,
    EQUALS: 0
};

// defaultCompare
export function defaultCompare(a, b) {
    if (a === b) {
        return Compare.EQUALS;
    }
    return a < b ? Compare.LESS_THAN : Compare.BIGGER_THAN;
}

// Funtion swap
export function swap(array, a, b) {
    /* const temp = array[a];
    array[a] = array[b];
    array[b] = temp; */ // Classic Mode
    [array[a], array[b]] = [array[b], array[a]]; // ES2015 Mode
}

// Funtion reverseCompare
export function reverseCompare(compareFn) {
    return (a, b) => compareFn(b, a);
}

// Function createNonSortedArray: creates an array of non-ordered values
export function createNonSortedArray(size) {
    const array = [];
    for (let i = size; i > 0; i--) {
        array.push(i);
    }
    return array;
}

// Function defaultEquals
export function defaultEquals(a, b) {
    return a === b;
}

// Function lesserOrEquals
export function lesserOrEquals(a, b, compareFn) {
    const comp = compareFn(a, b);
    return comp === Compare.LESS_THAN || comp === Compare.EQUALS;
}

// Function biggerOrEquals
export function biggerOrEquals(a, b, compareFn) {
    const comp = compareFn(a, b);
    return comp === Compare.BIGGER_THAN || comp === Compare.EQUALS;
}

// Variable DOES_NOT_EXIST
export const DOES_NOT_EXIST = -1;

// Function defaultDiff
export function defaultDiff(a, b) {
    return Number(a) - Number(b);
}
