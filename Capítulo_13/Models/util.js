// Compare elements
export const Compare = {
    LESS_THAN: -1,
    BIGGER_THAN: 1,
};

// defaultCompare
export function defaultCompare(a, b) {
    if (a === b) {
        return 0;
    }
    return a < b ? Compare.LESS_THAN : Compare.BIGGER_THAN;
}

// Função swap
export function swap(array, a, b) {
    /* const temp = array[a];
    array[a] = array[b];
    array[b] = temp; */ // Modo Clássico
    [array[a], array[b]] = [array[b], array[a]]; // Modo ES2015
}

// Função createNonSortedArray: cria um array de valores não ordenados
export function createNonSortedArray(size) {
    const array = [];
    for (let i = size; i > 0; i--) {
        array.push(i);
    }
    return array;
}
