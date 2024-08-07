# Algoritmo de multiplicação de cadeia de matrizes matrix_chain_order:
def matrix_chain_order(p):
    n = len(p)
    m = [[0 for _ in range(n)] for _ in range(n + 1)] # Inicialização da matrix m
    s = [[0 for _ in range(n)] for _ in range(n + 1)] # Inicialização da matrix s

    for l in range(2, n):
        for i in range(1, (n - l) + 1):
            j = (i + l) -1
            m[i][j] = float("inf")
            
            for k in range(i, j):
                q = m[i][k] + m[k + 1][j] + ((p[i - 1] * p[k]) * p[j])# q = cost/scalar multiplications
                if q < m[i][j]:
                    m[i][j] = q 
                    s[i][j] = k # s[i,j] = Second auxiliary table that stores k

    print_optimal_parenthesis(s, 1, n - 1)
    return m[i][n - 1]

# Função print_optimal_parenthesis
def  print_optimal_parenthesis(s, i, j):
    result = ""

    def build_optimal_parenthesis(s, i, j):
        nonlocal result  # Permite modificar a variável `result` do escopo externo
        if i == j:
            # print("A[", i, "]")
            result += "A[" + str(i) + "]"
        else:
            # print("(")
            result += "("
            build_optimal_parenthesis(s, i, s[i][j])
            build_optimal_parenthesis(s, s[i][j] + 1, j)
            # print(")")
            result += ")"

    build_optimal_parenthesis(s, i, j)
    print(result)

# Testando o algoritmo matrixChainOrder
p = [10, 100, 5, 50, 1]
minCost = matrix_chain_order(p)
print(f"O custo mínimo de multiplicação da cadeia de matrizes é: {minCost}")
