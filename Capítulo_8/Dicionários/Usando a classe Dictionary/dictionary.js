import { defaultToString, ValuePair } from "../../util/util.js";

export default class Dictionary {
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

    // hasKey(key): esse método devolve true se key estiver presente no dicionário, e false caso contrário.
    hasKey(key) {
        return this._getTable()[this.toStrFn(key)] != null;
    }

    // set(key, value): esse método adiciona um novo elemento ao dicionário. Se key já existir, seu valor será sobrescrito com o novo valor.
    set(key, value) {
        if (key != null && value != null) {
            const tableKey = this.toStrFn(key);
            this._setTable(tableKey, new ValuePair(key,value));
            return true;
        }
        return false;
    }

    // remove(key): esse método remove value do dicionário usando key como o parâmetro de busca.
    remove(key) {
        if (this.hasKey(key)) {
            delete this._getTable()[this.toStrFn(key)];
            return true;
        }
        return false;
    }

    // get(key): esse método devolve um value específico do dicionário usando key como o parâmetro de busca.
    get(key) {
        const valuePair = this._getTable()[this.toStrFn(key)];
        return valuePair == null ? undefined : valuePair.value;
    }

    // keyValues(): esse método devolve um array com todos os pares de valores [chave, valor] contidos no dicionário.
    keyValues() {
        return Object.values(this._getTable());
    }

    // keys(): esse método devolve um array com todas as chaves contidas no dicionário.
    keys() {
        return this.keyValues().map(valuePair => valuePair.key);
    }

    // values(): esse método devolve um array com todos os valores contidos no dicionário.
    values() {
        return this.keyValues().map(valuePair => valuePair.value);
    }

    // forEach(callBackFn): esse método itera pelos valores (value) do dicionário. A função callbackFn tem dois parâmetros: key e value. Esse método também pode ser interrompido caso a função de callback devolva false (é semelhante ao método every da classe Array).
    forEach(callbackFn) {
        const valuePairs = this.keyValues();
        for (let i = 0; i < valuePairs.length; i++) {
            const result = callbackFn(valuePairs[i].key, valuePairs[i].value);
            if (result === false) {
                break;
            }
        }
    }
    
    // size(): esse método devolve a quantidade de valores contida no dicionário. É semelhante à propriedade length da classe Array.
    size() {
        return Object.keys(this._getTable()).length;
    }

    // isEmpty(): esse método devolve true se size for igual a zero, e false caso contrário.
    isEmpty() {
        return this.size() === 0;
    }

    // clear(): esse método remove todos os valores do dicionário.
    clear() {
        this.#table = {};
    }

    // Método toString
    toString() {
        if (this.isEmpty()) {
            return ""; 
        }
        const valuePairs = this.keyValues();
        let objString = `${valuePairs[0].toString()}`;
        for (let i = 1; i < valuePairs.length; i++) {
            objString = `${objString}, ${valuePairs[i].toString()}`;
        }
        return objString;
    }

}

// Vamos executar um código que utilize a classe que criamos:
const dictionary = new Dictionary();
dictionary.set('Gandalf', 'gandalf@email.com');
dictionary.set('John', 'johnsnow@email.com');
dictionary.set('Tyrion', 'tyrion@email.com');

// Se executarmos o código a seguir, veremos uma saída igual a true:
console.log(dictionary.hasKey('Gandalf'));

// O código seguinte exibirá 3:
console.log(dictionary.size());

// Vamos agora executar estas linhas de código:
console.log(dictionary.keys());  // ["Gandalf", "John", "Tyrion"]
console.log(dictionary.values()); // ["gandalf@email.com", "johnsnow@email.com", "tyrion@email.com"]
console.log(dictionary.get('Tyrion')); // tyrion@email.com

// Execute as linhas a seguir também:
dictionary.remove('John');
console.log(dictionary.keys()); // ["Gandalf", "Tyrion"]
console.log(dictionary.values()); // ["gandalf@email.com", "tyrion@email.com"]
console.log(dictionary.keyValues()); // [{key: "Gandalf", value: "gandalf@email.com"}, {key: "Tyrion", value: "tyrion@email.com"}]

// Para chamar o método forEach, podemos usar o código a seguir:
dictionary.forEach((k, v) => {
    console.log('forEach: ', `key: ${k}, value: ${v}`);
    }); // forEach: key: Gandalf, value: gandalf@email.com
        // forEach: key: Tyrion, value: tyrion@email.com
