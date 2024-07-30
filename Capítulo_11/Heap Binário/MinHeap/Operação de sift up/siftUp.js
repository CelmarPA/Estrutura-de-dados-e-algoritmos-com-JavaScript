import { Compare, defaultCompare, swap } from "../../../models/util";

// Classe MinHeap
export class MinHeap {
    constructor(compareFn = defaultCompare) {
        this.compareFn = compareFn;
        this.heap = [];
    }

    // Método siftUp
    siftUp(index) {
        let parent = this.getParentIndex(index);
        while (
            index > 0 &&
            this.compareFn(this.heap[parent], this.heap[index]) >
                Compare.BIGGER_THAN
        ) {
            swap(this.heap, parent, index);
            index = parent;
            parent = this.getParentIndex(index);
        }
    }
}
