// isEmpty(): esse método devolve true se a lista ligada não contiver  nenhum elemento, e false se o tamanho da lista ligada for maior que 0.
import { defaultEquals } from "../../models/util.js";
import { Node } from "../../models/linked-list-models.js";
export default class LinkedList {
    constructor(equalsFn = defaultEquals) {
        this.count = 0;
        this.head = undefined;
        this.equalsFn = equalsFn;
    }

    isEmpty() {
        return size() === 0;
    }
}
