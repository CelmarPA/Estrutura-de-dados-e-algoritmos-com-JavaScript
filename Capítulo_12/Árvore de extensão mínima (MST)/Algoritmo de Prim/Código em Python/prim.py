# Variável infinito
INF = float("inf")

# Função min_key
def min_key(graph, key, visited):
    min = INF
    min_index = 0
    for v in range(len(graph)):
        if visited[v] == False and key[v] < min:
            min = key[v]
            min_index = v
    
    return min_index

# O algoritmo de Prim é apresentado a seguir:
def prim(graph):
    length = len(graph)
    parent = [[None] * length for _ in range(length)]

    # Inicialização das listas key e visited
    key = [INF] * length
    visited = [False] * length

    key[0] = 0
    parent[0] = -1
    for i in range(length - 1):
        u = min_key(graph, key, visited)
        visited[u] = True
        for v in range(length):
            if graph[u][v] and not visited[v] and graph[u][v] < key[v]:
                parent[v] = u
                key[v] = graph[u][v]

    return parent

# Variável graph
graph = [
    [0, 2, 4, 0, 0, 0],
    [2, 0, 2, 4, 2, 0],
    [4, 2, 0, 0, 3, 0],
    [0, 4, 0, 0, 3, 2],
    [0, 2, 3, 3, 0, 2],
    [0, 0, 0, 2, 2, 0],
]

# Executa o algoritmo de Prim
parent = prim(graph)

# Exibe as arestas e os pesos
print("Edge Weight")
for i in range(1, len(parent)):
    print(f"{parent[i]} - {i} {graph[i][parent[i]]}")

"""
 Edge Weight
 0 - 1 2
 1 - 2 2
 5 - 3 2
 1 - 4 2
 4 - 5 2
"""
