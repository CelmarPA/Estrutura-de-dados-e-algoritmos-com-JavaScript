import { Compare, defaultCompare, swap } from "../../../models/util.js";

// Classe MinHeap
export class MinHeap {
    #heap;
    constructor(compareFn = defaultCompare) {
        this.compareFn = compareFn;
        this.#heap = [];
    }

    // Método getter para #heap
    _getHeap() {
        return this.#heap;
    }

    // Método setter para #heap
    _pushToHeap(value) {
        this.#heap.push(value);
    }

    // Método getLeftIndex
    getLeftIndex(index) {
        return 2 * index + 1;
    }

    // Método getRightIndex
    getRightIndex(index) {
        return 2 * index + 2;
    }

    // Método getParentIndex
    getParentIndex(index) {
        return Math.floor((index - 1) / 2);
    }

    // Método size
    size() {
        return this._getHeap().length;
    }

    // Método isEmpty
    isEmpty() {
        return this.size() <= 0;
    }

    // Método clear
    clear() {
        this.#heap = [];
    }

    // Método findMinimum
    findMinimum() {
        return this.isEmpty() ? undefined : this._getHeap()[0];
    }

    // Método insert
    insert(value) {
        if (value != null) {
            const index = this._getHeap().length
            this._pushToHeap(value);
            this.siftUp(index);
            return true;
        }
        return false;
    }

    // Método sifUp
    siftUp(index) {
        let parent = this.getParentIndex(index);
        while (
            index > 0 &&
            this.compareFn(this._getHeap()[parent], this._getHeap()[index]) ===
                Compare.BIGGER_THAN
        ) {
            swap(this._getHeap(), parent, index);
            index = parent;
            parent = this.getParentIndex(index);
        }
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

    // Método extract
    extract() {
        if (this.isEmpty()) {
            return undefined;
        }
        if (this.size() === 1) {
            return this._getHeap().shift();
        }
        const removedValue = this._getHeap()[0];
        this._getHeap()[0] = this._getHeap().pop()
        this.siftDown(0);
        return removedValue;
    }

    // Método heapify
    heapify(array) {
        if (array) {
            this.heap = array;
        }
        const maxIndex = Math.floor(this.size() / 2) - 1;
        for (let i = 0; i <= maxIndex; i++) {
            this.siftDown(i);
        }
        return this._getHeap();
    }
}

// // Criação de um novo MinHeap
// const heap = new MinHeap();

// // Inserir elementos
// heap.insert(5);
// heap.insert(3);
// heap.insert(8);
// heap.insert(1);

// // Mostrar o estado do heap
// console.log("Heap após inserções:", heap._getHeap()); // Esperado: [1, 3, 8, 5]

// // Extrair o menor elemento
// const min = heap.extract();
// console.log("Elemento extraído:", min); // Esperado: 1

// // Mostrar o estado do heap após a extração
// console.log("Heap após extração:", heap._getHeap()); // Esperado: [3, 5, 8]

// // Aplicar heapify e mostrar o estado do heap
// heap.heapify(heap._getHeap());
// console.log("Heap após heapify:", heap._getHeap()); // Esperado: [3, 5, 8]
