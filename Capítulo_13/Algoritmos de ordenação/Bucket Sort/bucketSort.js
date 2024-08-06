import { insertionSort } from "../Insertion sort/insertionSort.js"
// Algoritmo de bucket sort:
function bucketSort(array, bucketSize = 5) {
    if (array.length < 2) {
        return array;
    }
    const buckets = createBuckets(array, bucketSize);
    return sortBuckets(buckets);
}

// Função createBuckets
function createBuckets(array, bucketSize) {
    let minValue = array[0];
    let maxValue = array[0];
    for (let i = 0; i < array.length; i++) {
        if (array[i] < minValue) {
            minValue = array[i];
        } else if (array[i] > maxValue) {
            maxValue = array[i];
        }
    }
    const bucketCount = Math.floor((maxValue - minValue) / bucketSize) + 1;
    const buckets = [];
    for (let i = 0; i < bucketCount; i++) {
        buckets[i] = [];
    }
    for (let i = 0; i < array.length; i++) {
        const bucketIndex = Math.floor((array[i] - minValue) / bucketSize);
        buckets[bucketIndex].push(array[i]);
    }
    return buckets;
}

// Função sortBuckets
function sortBuckets(buckets) {
    const sortedArray = [];
    for (let i = 0; i < buckets.length; i++) {
        if (buckets[i] != null) {
            insertionSort(buckets[i]);
            sortedArray.push(...buckets[i]);
        }
    }
    return sortedArray;
}

// Teste da função bucketSort
let array = [5, 4, 3, 2, 6, 1, 7, 10, 9, 8];
console.log(array.join(", ")); // 5, 4, 3, 2, 6, 1, 7, 10, 9, 8
array = bucketSort(array);
console.log(array.join(", ")); // 1, 2, 3, 4, 5, 6, 7, 8, 9, 10