# Algoritmo de Floyd-Warshall:
def floyd_warshall(graph):
    length = len(graph)
    dist = [[None] * length for _ in range(length)]
    
    for i in range(length):
        for j in range(length):
            if i == j:
                dist[i][j] = 0
            elif graph[i][j] == 0:
                dist[i][j] = float("inf")
            else:
                dist[i][j] = graph[i][j]
    
    for k in range(length):
        for i in range(length):
            for j in range(length):
                if dist[i][k] + dist[k][j] < dist[i][j]:
                    dist[i][j] = dist[i][k] + dist[k][j]

    return dist

# Variável graph
graph = [
    [0, 2, 4, 0, 0, 0],
    [0, 0, 1, 4, 2, 0],
    [0, 0, 0, 0, 3, 0],
    [0, 0, 0, 0, 0, 2],
    [0, 0, 0, 3, 0, 2],
    [0, 0, 0, 0, 0, 0],
]

# Chamar a função floyd_warshall passando o grafo
distances = floyd_warshall(graph)

# Exibe a matriz de distâncias
print("Matriz de Distâncias:")
for i in range(len(distances)):
    format_distances = ""
    for j in range(len(distances[i])):
        if distances[i][j] == float("inf"):
            format_distances += "INF "
        else:
            format_distances += str(distances[i][j]) + " "
    
    print(format_distances)

"""
 Matriz de Distâncias:
 0 2 3 6 4 6
 INF 0 1 4 2 4
 INF INF 0 6 3 5
 INF INF INF 0 INF 2
 INF INF INF 3 0 2
 INF INF INF INF INF 0
"""
