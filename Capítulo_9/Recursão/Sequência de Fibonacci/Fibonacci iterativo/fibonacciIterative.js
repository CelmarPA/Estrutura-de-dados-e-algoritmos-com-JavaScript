// Implementamos a função fibonacci de modo iterativo, assim:
function fibonacciIterative(n) {
    if (n < 1) return 0;
    if (n <= 2) return 1;
    let fibMinus2 = 0;
    let fibMinus1 = 1;
    let fibN = n;
    for (let i = 2; i <= n; i++) {
        fibN = fibMinus1 + fibMinus2;
        fibMinus2 = fibMinus1;
        fibMinus1 = fibN;
    }
    return fibN;
}
 console.log(fibonacciIterative(10)) // 55