import { defaultToString, ValuePair } from "../../../util/util.js";
import  LinkedList  from "../../../../Capítulo_6/Listas Ligadas/Usando a Classe LinkedList/linkedList.js";

class HashTableSeparateChaining {
    #table;
    constructor(toStrFn = defaultToString) {
        this.toStrFn = toStrFn;
        this.#table = {};
    }

    // Método getter para #table:
    _getTable() {
        return this.#table;
    }

    // Método setter para #table:
    _setTable(key, item) {
        this.#table[key] = item;
    }

    // Método loseloseHashCode:
    loseloseHashCode(key) {
        if (typeof key === "number") {
            return key;
        }
        const tableKey = this.toStrFn(key);
        let hash = 0;
        for (let i = 0; i < tableKey.length; i++) {
            hash += tableKey.charCodeAt(i);
        }
        return hash % 37;
    }

    // Método hashCode:
    hashCode(key) {
        return this.loseloseHashCode(key);
    }

    // put(key,value): esse método adiciona um novo item à tabela hash (ou pode atualizá-la também).
    put(key, value) {
        if (key != null && value != null) {
            const position = this.hashCode(key);
            if (this._getTable()[position] == null) {
                this._setTable(position, new LinkedList());
            }
            this._getTable()[position].push(new ValuePair(key, value));
            return true;
        }
        return false;
    }

    // get(key): esse método devolve um value específico encontrado com key.
    get(key) {
        const position = this.hashCode(key);
        const linkedList = this._getTable()[position];
        if (linkedList != null && !linkedList.isEmpty()) {
            let current = linkedList.getHead();
            while (current != null) {
                if (current.element.key === key) {
                    return current.element.value; // Retorna o valor e interrompe o loop
                }
                current = current.next;
            }
        }
        return undefined;
    }

    // remove(key): esse método remove o value da tabela hash usando key.
    remove(key) {
        const position = this.hashCode(key);
        const linkedList = this._getTable()[position];
        if (linkedList != null && !linkedList.isEmpty()) {
            let current = linkedList.getHead();
            while (current != null) {
                if (current.element.key === key) {
                    linkedList.remove(current.element);
                    if (linkedList.isEmpty()) {
                        delete this._getTable()[position];
                    }
                    return true;
                }
                current = current.next;
            }
        }
        return false;
    }

    size() {
        return Object.keys(this._getTable()).length;
    }

    isEmpty() {
        return this.size() === 0;
    }

    toString() {
        if (this.isEmpty()) {
            return "";
        }
        const keys = Object.keys(this._getTable());
        let objString = `{${keys[0]} => ${this._getTable()[
            keys[0]
        ].toString()}}`;
        for (let i = 1; i < keys.length; i++) {
            objString = `${objString}, {${keys[i]} => ${this._getTable()[
                keys[i]
            ].toString()}}`;
        }
        return objString;
    }
}

// Exemplo de uso
//Criação da Tabela Hash
const hashTable = new HashTableSeparateChaining();

// Adicionando elementos com put
hashTable.put("Gandalf", "gandalf@email.com");
hashTable.put("John", "johnsnow@email.com");
hashTable.put("Tyrion", "tyrion@email.com");

console.log(hashTable.toString()); // {19 => {Gandalf: gandalf@email.com}}, {29 => {John: johnsnow@email.com}}, {16 => {Tyrion: tyrion@email.com}}

// Recuperando elementos com get
console.log(hashTable.get("Gandalf")); // gandalf@email.com
console.log(hashTable.get("John")); // johnsnow@email.com
console.log(hashTable.get("Tyrion")); // tyrion@email.com
console.log(hashTable.get("Frodo")); // undefined (não existe)
