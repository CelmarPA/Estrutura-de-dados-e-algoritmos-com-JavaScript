function factorial(n) {
    if (n === 1 || n === 0) { // caso base
        return 1;
    }
    return n * factorial(n - 1); // chamada recursiva
}

console.log(factorial(5)); // 120