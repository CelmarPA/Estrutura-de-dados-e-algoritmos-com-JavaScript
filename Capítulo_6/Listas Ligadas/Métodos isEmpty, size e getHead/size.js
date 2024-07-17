// size(): esse método devolve o número de elementos contidos na lista ligada. É semelhante à propriedade length do array.
import { defaultEquals } from "../../models/util.js";
import { Node } from "../../models/linked-list-models.js";
export default class LinkedList {
    constructor(equalsFn = defaultEquals) {
        this.count = 0;
        this.head = undefined;
        this.equalsFn = equalsFn;
    }

    size() {
        return this.count;
    }
}
