import { defaultToString, ValuePairLazy } from "../../util/util.js";

// Classe HashTableLinearProbingLazy
class HashTableLinearProbingLazy {
    #table;
    constructor(toStrFn = defaultToString) {
        this.toStrFn = toStrFn;
        this.#table = {};
    }

    // Método getter para #table
    _getTable() {
        return this.#table;
    }

    // Método setter para #table
    _setTable(key, item) {
        this.#table[key] = item;
    }

    // Método loseloseHashCode
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

    // Método hashCode
    hashCode(key) {
        return this.loseloseHashCode(key);
    }

    // Método put
    put(key, value) {
        if (key != null && value != null) {
            const position = this.hashCode(key);
            if (
                this._getTable()[position] == null ||
                (this._getTable()[position] != null &&
                    this._getTable()[position].isDeleted)
            ) {
                this._setTable(position, new ValuePairLazy(key, value));
            } else {
                let index = position + 1;
                while (
                    this._getTable()[index] != null &&
                    this._getTable()[position].isDeleted
                ) {
                    index++;
                }
                this._setTable(index, new ValuePairLazy(key, value));
            }
            return true;
        }
        return false;
    }

    // Método get
    get(key) {
        const position = this.hashCode(key);
        const table = this._getTable();
        if (table[position] != null) {
            if (table[position].key === key && !table[position].isDeleted) {
                return table[position].value;
            }
            let index = position + 1;
            while (
                table[index] != null &&
                (table[index].key !== key || table[index].isDeleted)
            ) {
                if (table[index].key === key && table[index].isDeleted) {
                    return undefined;
                }
                index++;
            }
            if (
                table[index] != null &&
                table[index].key === key &&
                !table[index].isDeleted
            ) {
                return table[index].value;
            }
        }
        return undefined;
    }

    // Método remove
    remove(key) {
        const position = this.hashCode(key);
        if (this._getTable()[position] != null) {
            if (
                this._getTable()[position].key === key &&
                !this._getTable()[position].isDeleted
            ) {
                this._getTable()[position].isDeleted = true;
                return true;
            }
            let index = position + 1;
            while (
                this._getTable()[index] != null &&
                (this._getTable()[index].key !== key ||
                    this._getTable()[index].isDeleted)
            ) {
                index++;
            }
            if (
                this._getTable()[index] != null &&
                this._getTable()[index].key === key &&
                !this._getTable()[index].isDeleted
            ) {
                this._getTable()[index].isDeleted = true;
                return true;
            }
        }
        return false;
    }

    // Método isEmpty
    isEmpty() {
        return this.size() === 0;
    }

    // Método size
    size() {
        let count = 0;
        Object.values(this._getTable()).forEach((valuePair) => {
            count += valuePair.isDeleted === true ? 0 : 1;
        });
        return count;
    }

    // Método clear
    clear() {
        this.#table = {};
    }

    // Método toString
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

// Criação da instância da tabela hash
const hashTable = new HashTableLinearProbingLazy(defaultToString);

// Adicionando pares chave-valor
hashTable.put('Gandalf', 'gandalf@email.com');
hashTable.put('John', 'johnsnow@email.com');
hashTable.put('Tyrion', 'tyrion@email.com');

// Recuperando valores
console.log(hashTable.get('Gandalf')); // Output: gandalf@email.com
console.log(hashTable.get('John')); // Output: johnsnow@email.com
console.log(hashTable.get('Tyrion')); // Output: tyrrion@email.com
console.log(hashTable.get('Unknown')); // Output: undefined

// Removendo valores
console.log(hashTable.remove('John')); // Output: true
console.log(hashTable.get('John')); // Output: undefined

// Exibindo o conteúdo da tabela hash
console.log(hashTable.toString()); 
// Pode mostrar algo como {19 => [Gandalf: gandalf@email.com]}, {16 => [Tyrion: tyrion@email.com]}

// Limpando a tabela hash
hashTable.clear();
console.log(hashTable.isEmpty()); // Output: true
console.log(hashTable.size()); // Output: 0
