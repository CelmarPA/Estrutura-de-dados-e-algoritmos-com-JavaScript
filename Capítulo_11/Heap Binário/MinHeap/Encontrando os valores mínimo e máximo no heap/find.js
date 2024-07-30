import { Compare, defaultCompare, swap } from "../../../models/util";

// Classe MinHeap
export class MinHeap {
    constructor(compareFn = defaultCompare) {
        this.compareFn = compareFn;
        this.heap = [];
    }

    // Método size
    size() {
        return this.heap.length;
    }

    // Método isEmpty
    isEmpty() {
        return this.size() <= 0;
    }

    // Método findMinimum(): esse método devolve o value mínimo (heap mínimo) ou máximo (heap máximo) sem removê-lo.
    findMinimum() {
        return this.isEmpty() ? undefined : this.heap[0];
    }
}
