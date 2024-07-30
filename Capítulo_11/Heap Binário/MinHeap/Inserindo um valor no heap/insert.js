import { Compare, defaultCompare, swap } from "../../../models/util";

// Classe MinHeap
export class MinHeap {
    constructor(compareFn = defaultCompare) {
        this.compareFn = compareFn;
        this.heap = [];
    }

    // Método insert(value): esse método insere um novo value no heap. Devolve true se value for inserido com sucesso, e false caso contrário.
    insert(value) {
        if (value != null) {
            this.heap.push(value);
            this.siftUp(this.heap.lengh - 1);
            return true;
        }
        return false;
    }
}
