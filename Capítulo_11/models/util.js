// Compare elements
export const Compare = {
    LESS_THAN: -1,
    BIGGER_THAN: 1,
};

// Função defaultCompare
export function defaultCompare(a, b) {
    if (a === b) {
        return 0;
    }
    return a < b ? Compare.LESS_THAN : Compare.BIGGER_THAN;
}

// Função reverseCompare
export function reverseCompare(compareFn) {
    return (a, b) => compareFn(b, a);
}

// Função swap
export function swap(array, a, b) {
    const temp = array[a];
    array[a] = array[b];
    array[b] = temp;        
}

export const swap2 = (array, a, b) => [array[a], array[b]] = [array[b], array[a]];