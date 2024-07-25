// O código a seguir representa a função fibonacci escrita com memoização:
function fibonacciMenoization(n) {
    const memo = [0, 1];
    const fibonacci = (n) => {
        if (memo[n] != null) return memo[n];
        return memo[n] = fibonacci(n - 1, memo) + fibonacci(n - 2, memo);
    };
    return fibonacci;
}

const fibonacci =  fibonacciMenoization();

// Exemplo de uso
console.log(fibonacci(10)); // Saída: 55
console.log(fibonacci(20)); // Saída: 6765
console.log(fibonacci(30)); // Saída: 832040