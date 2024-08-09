// Algoritmo guloso knapSack
function knapSack(capacity, weights, values) {
    const n = values.length;
    let load = 0;
    let val = 0;
    for (let i = 0; i < n && load < capacity; i++) {
        if (weights[i] <= capacity - load) {
            val += values[i];
            load += weights[i];
        } else {
            const r = (capacity - load) / weights[i];
            val += r * values[i];
            load += weights[i];
        }
    }
    return val;
}

// Testando o algoritmo guloso KnapSack
const values = [3,4,5];
let weights = [2,3,4];
let capacity = 5;
let n = values.length;
console.log(knapSack(capacity, weights, values, n)); //exibe 7