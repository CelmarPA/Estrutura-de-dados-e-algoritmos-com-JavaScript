// remove(element): esse método remove um elemento da lista.
import { defaultEquals } from "../models/util.js"
import { Node } from "../models/linked-list-models.js"
export default class LinkedList {
    constructor(equalsFn = defaultEquals) {
        this.count = 0;
        this.head = undefined;
        this.equalsFn = equalsFn;
    }

    remove(element) {
        const index = this.indexOf(element);
        return this.removeAt(index);
    }
}
