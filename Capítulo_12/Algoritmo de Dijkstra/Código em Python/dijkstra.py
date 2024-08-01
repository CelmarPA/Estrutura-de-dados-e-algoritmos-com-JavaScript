# Variável infinito INF
INF = float("inf")

# Função min_distance
def min_distance(dist, visited):
    min = INF
    min_index = -1
    for v in range(len(dist)):
        if visited[v] is False and dist[v] <= min:
            min =  dist[v]
            min_index = v
    
    return min_index

# O algoritmo de Dijkstra é apresentado a seguir:
def dijkstra(graph, src):
    length = len(graph)

    # Inicialização das listas dist e visited
    dist = [INF] * length
    visited = [False] * length
        
    dist[src] = 0

    for i in range(length - 1):
        u = min_distance(dist, visited)
        visited[u] = True
        for v in range(length):
            if not visited[v] and graph[u][v] != 0 and dist[u] != INF and dist[u] + graph[u][v] < dist[v]:
                dist[v] = dist[u] + graph[u][v]

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

# Chamar a função dijkstra passando o grafo e o nó de origem (por exemplo, 0)
distances = dijkstra(graph, 0)

# Exibir as distâncias
print("Nó Distância")
for i in range(len(distances)):
    print(f"{i}  {distances[i]}")

"""
 Nó Distância
 0  0
 1  2
 2  3
 3  6
 4  4
 5  6
"""
