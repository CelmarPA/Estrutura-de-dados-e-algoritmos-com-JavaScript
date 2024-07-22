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
            const position = this.hashCode(key)
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
}

// Vamos testar a classe HashTable executando alguns exemplos:
const  hash = new HashTable();
hash.put("Gandalf", "gandalf@email.com");
hash.put('John', 'johnsnow@email.com');
hash.put('Tyrion', 'tyrion@email.com');
console.log(hash.hashCode('Gandalf') + ' - Gandalf'); // 19 - Gandalf
console.log(hash.hashCode('John') + ' - John'); // 29 - John
console.log(hash.hashCode('Tyrion') + ' - Tyrion'); // 16 - Tyrion

// Vamos agora testar o método get executando o código a seguir:
console.log(hash.get('Gandalf')); // gandalf@email.com
console.log(hash.get('Loiane')); // undefined

// A seguir, vamos tentar remover Gandalf da HashTable, assim:
hash.remove('Gandalf');
console.log(hash.get('Gandalf'));
