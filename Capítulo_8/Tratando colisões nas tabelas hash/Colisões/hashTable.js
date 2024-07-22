import { defaultToString, ValuePair } from "../../util/util.js";

class HashTable {
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
            this._setTable(position, new ValuePair(key, value));
            return true;
        }
        return false;
    }

    //get(key): esse método devolve um value específico encontrado com key.
    get(key) {
        const valuePair = this._getTable()[this.hashCode(key)];
        return valuePair == null ? undefined : valuePair.value;
    }

    // remove(key): esse método remove o value da tabela hash usando key.
    remove(key) {
        const hash = this.hashCode(key);
        const valuePair = this._getTable()[hash];
        if (valuePair != null) {
            delete this._getTable()[hash];
            return true;
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

// Vamos testar a classe HashTable executando alguns exemplos:
const hash = new HashTable();
hash.put("Ygritte", "ygritte@email.com");
hash.put("Jonathan", "jonathan@email.com");
hash.put("Jamie", "jamie@email.com");
hash.put("Jack", "jack@email.com");
hash.put("Jasmine", "jasmine@email.com");
hash.put("Jake", "jake@email.com");
hash.put("Nathan", "nathan@email.com");
hash.put("Athelstan", "athelstan@email.com");
hash.put("Sue", "sue@email.com");
hash.put("Aethelwulf", "aethelwulf@email.com");
hash.put("Sargeras", "sargeras@email.com");

console.log(hash.size());
console.log(hash.toString());
