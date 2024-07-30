import { defaultCompare, swap } from "../models/util.js";

//  Funçõa heapify
function heapify(array, index, heapSize, compareFn) {
    let largest = index;
    const left = (2 * index) + 1;
    const right = (2 * index) + 2;
    if (left < heapSize && compareFn(array[left], array[index]) > 0) {
        largest = left;
    }
    if (right <heapSize && compareFn(array[right], array[largest]) > 0) {
        largest = right;
    }
    if (largest !== index) {
        swap(array, index,  largest);
        heapify(array, largest, heapSize, compareFn);
    }
}

// Para implementar o heap máximo, podemos usar a função a seguir:
function buildMaxHeap(array, compareFn) {
    for (let i = Math.floor(array.length / 2); i >= 0; i--) {
        heapify(array, i, array.length, compareFn);
    }
    return array;
}

// Código do algoritmo de heap sort:
export function heapSort(array, compareFn = defaultCompare) {
    let heapSize = array.length;
    buildMaxHeap(array, compareFn);
    while (heapSize > 1) {
        swap(array, 0, --heapSize);
        heapify(array, 0, heapSize, compareFn);
    }
    return array;
}

const array = [7, 6, 3, 5, 4, 1, 2];
console.log('Before sorting: ', array);
console.log('After sorting: ', heapSort(array));