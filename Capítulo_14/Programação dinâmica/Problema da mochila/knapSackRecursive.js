// Algoritmo knapSackRecursive:
function knapSackRecursive(capacity, weights, values, n) {
    if (n === 0 || capacity === 0) {
        return 0;
    }
    if (weights[n - 1] > capacity) {
        return knapSackRecursive(capacity, weights, values, n - 1);
    }
    const a = values[n - 1] + knapSackRecursive(capacity - weights[n - 1], weights, values, n - 1);
    const b = knapSackRecursive(capacity, weights, values, n - 1);
    return a > b ? a : b;
}

// Testando o algoritmo knapSackRecursive:
const values = [3,4,5];
weights = [2,3,4];
capacity = 5;
n = values.length;
console.log(knapSackRecursive(capacity, weights, values, n)); //exibe 7
