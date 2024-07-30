import { Compare, defaultCompare, swap } from "../../../models/util";

// Classe MinHeap
export class MinHeap {
    constructor(compareFn = defaultCompare) {
        this.compareFn = compareFn;
        this.heap = [];
    }

    // Método extract(): esse método remove o value mínimo (heap mínimo) ou máximo (heap máximo) e devolve esse valor.
    extract() {
        if (this.isEmpty()) {
            return undefined;
        }
        if (this.size() === 1) {
            return this.heap.shift();
        }
        const removedValue = this.heap.shift();
        this.siftDown(0);
        return removedValue;
    }
}
