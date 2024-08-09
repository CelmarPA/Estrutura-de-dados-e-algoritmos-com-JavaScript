import { defaultEquals } from "../../../Models/util.js";

function sequentialSearch(array, value, equalsFn = defaultEquals) {
    let cost = 0;
    for (let i = 0; i < array.length; i++) {
        cost++;
        if (equalsFn(value, array[i])) {            
            console.log(
            `cost for sequentialSearch with input size ${array.length} is ${cost}`)
            return i;
        }
    }
    console.log(
        `cost for sequentialSearch with input size ${array.length} is ${cost}`
    );
    return -1;
}

let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
sequentialSearch(array, 15)