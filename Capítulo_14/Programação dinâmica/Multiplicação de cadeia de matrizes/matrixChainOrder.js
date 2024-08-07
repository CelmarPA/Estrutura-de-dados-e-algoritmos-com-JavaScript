// Algoritmo de multiplicação de cadeia de matrizes matrixChainOrder:
function matrixChainOrder(p) {
    const n = p.length;
    const m = [];
    for (let i = 0; i <= n; i++) {
        m[i] = [];
        m[i][i] = 0;
    }
    for (let l = 2; l < n; l++) {
        for (let i = 1; i <= (n - l) + 1; i++) {
            const j = (i + l) - 1;
            m[i][j] = Number.MAX_SAFE_INTEGER;
            for (let k = i; k <= j - 1; k++) {
                const q = m[i][k] + m[k + 1][j] + ((p[i - 1] * p[k]) * p[j]);
                if (q < m[i][j]) {
                    m[i][j] = q;
                }
            }
        }
    }
    return m[1][n - 1];
}

// Testando o algoritmo matrixChainOrder
const p = [10, 100, 5, 50, 1];
console.log(matrixChainOrder(p)); // 1750
