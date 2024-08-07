# Algoritmo de multiplicação de cadeia de matrizes matrix_chain_order
def matrix_chain_order(p):
    n = len(p)
    m = [[0 for _ in range(n + 1)] for _ in range(n + 1)] # Inicialização da matrix m

    for l in range(2, n):
        for i in range(1, (n - l) + 1):
            j = (i + l) - 1
            m[i][j] = float("inf")

            for k in range(i, j):
                q =  m[i][k] + m[k + 1][j] + ((p[i - 1] * p[k]) * p[j])
                if q < m[i][j]:
                    m[i][j] = q

    return m[1][n - 1]

# Testando o algoritmo matrixChainOrder
p = [10, 100, 5, 50, 1]
print(matrix_chain_order(p)) # 1750
