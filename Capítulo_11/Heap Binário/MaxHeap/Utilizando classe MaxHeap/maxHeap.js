import { Compare, defaultCompare, reverseCompare } from "../../../models/util.js";
import { MinHeap } from "../../MinHeap/Utilizando a classe MinHeap/minHeap.js";

// Class MaxHeap
export class MaxHeap extends MinHeap {
    constructor(compareFn = defaultCompare) {
        super(compareFn);
        this.compareFn = compareFn;
        this.compareFn = reverseCompare(compareFn);
    }
}

const maxHeap = new MaxHeap();
maxHeap.insert(2);
maxHeap.insert(3);
maxHeap.insert(4);
maxHeap.insert(5);
maxHeap.insert(1);

console.log("Heap size: ", maxHeap.size()); // 5
console.log("Heap min value: ", maxHeap.findMinimum())
console.log(maxHeap.heapify())
