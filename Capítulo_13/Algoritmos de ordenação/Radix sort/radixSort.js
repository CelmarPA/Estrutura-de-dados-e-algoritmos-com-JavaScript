// Algoritmo de radix sort:
function radixSort(array, radixBase = 10) {
    if (array.length < 2) {
        return array;
    }
    const minValue = findMinValue(array);
    const maxValue = findMaxValue(array);
    let significantDigit = 1;
    while ((maxValue - minValue) / significantDigit >= 1) {
        array = countingSortForRadix(
            array,
            radixBase,
            significantDigit,
            minValue
        );
        significantDigit *= radixBase;
    }
    return array;
}

// Função findMinValue
function findMinValue(array) {
    let min = array[0];
    for (let i = 0; i < array.length; i++) {
        if (array[i] < min) {
            min = array[i];
        }
    }
    return min;
}

// Função findMaxValue
function findMaxValue(array) {
    let max = array[0];
    for (let i = 0; i < array.length; i++) {
        if (array[i] > max) {
            max = array[i];
        }
    }
    return max;
}

// Função countingSortForRadix
function countingSortForRadix(array, radixBase, significantDigit, minValue) {
    let bucketsIndex;
    const buckets = [];
    const aux = [];
    for (let i = 0; i < radixBase; i++) {
        buckets[i] = 0;
    }
    for (let i = 0; i < array.length; i++) {
        bucketsIndex = Math.floor(
            ((array[i] - minValue) / significantDigit) % radixBase
        );
        buckets[bucketsIndex]++;
    }
    for (let i = 1; i < radixBase; i++) {
        buckets[i] += buckets[i - 1];
    }
    for (let i = array.length - 1; i >= 0; i--) {
        bucketsIndex = Math.floor(
            ((array[i] - minValue) / significantDigit) % radixBase
        );
        aux[--buckets[bucketsIndex]] = array[i];
    }
    for (let i = 0; i < array.length; i++) {
        array[i] = aux[i];
    }
    return array;
}

// Teste da função radixSort
let array = [ 456, 789, 123, 0, 1, 32, 4, 243, 321, 42, 90, 10, 999];
console.log(array.join(", ")); // 456, 789, 123, 0, 1, 32, 4, 243, 321, 42, 90, 10, 999
array = radixSort(array);
console.log(array.join(", ")); // 0, 1, 4, 10, 32, 42, 90, 123, 243, 321, 456, 789, 999
