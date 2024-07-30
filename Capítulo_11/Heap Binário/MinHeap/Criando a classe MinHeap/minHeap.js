import { Compare, defaultCompare, swap } from "../../../models/util";

// Classe MinHeap
export class MinHeap {
    constructor(compareFn = defaultCompare) {
        this.compareFn = compareFn;
        this.heap = [];
    }
}
