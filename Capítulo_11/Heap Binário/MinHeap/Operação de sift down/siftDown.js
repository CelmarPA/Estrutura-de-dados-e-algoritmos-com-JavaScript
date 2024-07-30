import { Compare, defaultCompare, swap } from "../../../models/util";

// Classe MinHeap
export class MinHeap {
    constructor(compareFn = defaultCompare) {
        this.compareFn = compareFn;
        this.heap = [];
    }

    // Método siftDown
    siftDown(index) {
        let element = index;
        const left = this.getLeftIndex(index);
        const right = this.getRightIndex(index);
        const size = this.size();
        if (
            left < size &&
            this.compareFn(this._getHeap()[element], this._getHeap()[left]) ===
                Compare.BIGGER_THAN
        ) {
            element = left;
        }
        if (
            right < size &&
            this.compareFn(this._getHeap()[element], this._getHeap()[right]) ===
                Compare.BIGGER_THAN
        ) {
            element = right;
        }
        if (index !== element) {
            swap(this._getHeap(), index, element);
            this.siftDown(element);
        }
    }
}
