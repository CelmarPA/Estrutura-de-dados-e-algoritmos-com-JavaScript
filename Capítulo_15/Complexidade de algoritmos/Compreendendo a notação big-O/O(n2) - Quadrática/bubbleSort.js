import { Compare, defaultCompare, swap } from "../../../Models/util.js";

function bubbleSort(array, compareFn = defaultCompare) {
    const { length } = array;
    let cost = 0;
    for (let i = 0; i < length; i++) {
        cost++;
        for (let j = 0; j < length - 1; j++) {
            cost++;
            if (compareFn(array[j], array[j + 1]) === Compare.BIGGER_THAN) {
                swap(array, j, j + 1);
            }
        }
    }
    console.log(`cost for bubbleSort with inoput size ${length} is ${cost}`)
    return array;
}

let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
bubbleSort(array)