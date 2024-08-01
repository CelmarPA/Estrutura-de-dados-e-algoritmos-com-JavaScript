# Variável infinito
INF = float("inf")

# Função find
def find(i, parent):
    while parent[i] is not None:
        i = parent[i]
    return i

# Função union
def union(i, j, parent):
    if i != j:
        parent[j] = i
        return True
    return False

# Função inicialize_cost
def inicialize_cost(graph):
    length = len(graph)

    # Inicialização da variável cost
    cost = [[None] * length for _ in range(length)]

    for i in range(length):
        for j in range(length):
            if graph[i][j] == 0:
                cost[i][j] = INF
            else:
                cost[i][j] = graph[i][j]

    return cost

# O algoritmo de Kruskal é apresentado a seguir:
def kruskal(graph):
    length = len(graph)    
    ne = 0
    a = b = u = v = None

    # Inicializa como uma lista 1D
    parent = [None] * length  

    cost = inicialize_cost(graph)
    
    while ne < length - 1:
        min = INF
        for i in range(length):
            for j in range(length):
                if cost[i][j] < min:
                    min = cost[i][j]
                    a = u = i
                    b = v = j

        u = find(u, parent)
        v = find(v, parent)
        if union(u, v, parent):
            ne += 1
        
        cost[a][b] = cost[b][a] = INF

    return parent

# Exemplo de grafo representado por uma matriz de adjacência
graph = [
    [0, 10, 0, 30, 100],
    [10, 0, 50, 0, 0],
    [0, 50, 0, 20, 10],
    [30, 0, 20, 0, 60],
    [100, 0, 10, 60, 0]
]

# Função para imprimir a Árvore Geradora Mínima
def print_MST(parent):
    print(f"Edges in the Minimum Spanning Tree:")
    for i, p in enumerate(parent):
        if p is not None:
            print(f"Edge: {p} - {i}")

# Executando o algoritmo de Kruskal
parent = kruskal(graph)

# Imprimindo o resultado
print_MST(parent)

"""
 Edges in the Minimum Spanning Tree:
 Edge: 0 - 1
 Edge: 0 - 2
 Edge: 2 - 3
 Edge: 2 - 4
"""
