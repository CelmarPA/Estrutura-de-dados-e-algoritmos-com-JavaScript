/**
 * Para acessar os nós (nodes) de uma árvore binária usando um array
 * comum, podemos manipular o índice com o comportamento a seguir:
 *
 * Para qualquer dado nó na posição index:
 * • seu filho esquerdo estará localizado em 2 * index + 1 (se
 * estiver disponível);
 *
 * • seu filho direito estará localizado em 2 * index + 2 (se
 * estiver disponível);
 *
 * • seu nó pai estará localizado em index / 2 (se estiver
 * disponível).
 */

// Para acessar um nó específico seguindo as regras anteriores, podemos acrescentar os métodos a seguir na classe MinHeap:
import { Compare, defaultCompare, swap } from "../../../models/util";

// Classe MinHeap
export class MinHeap {
    constructor(compareFn = defaultCompare) {
        this.compareFn = compareFn;
        this.heap = [];
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
        if (index === 0) {
            return undefined;
        }
        return Math.floor((index - 1) / 2);
    }
}
