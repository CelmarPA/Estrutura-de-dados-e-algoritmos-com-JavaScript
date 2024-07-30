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