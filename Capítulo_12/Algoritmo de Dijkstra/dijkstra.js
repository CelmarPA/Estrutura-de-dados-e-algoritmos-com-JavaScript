// Váriavel infinito INF
const INF = Number.MAX_SAFE_INTEGER;

// Função minDistance
const minDistance = (dist, visited) => {
    let min = INF;
    let minIndex = -1;
    for (let v = 0; v < dist.length; v++) {
        if (visited[v] === false && dist[v] <= min) {
            min = dist[v];
            minIndex = v;
        }
    }
    return minIndex;
};

// O algoritmo de Dijkstra é apresentado a seguir
const dijkstra = (graph, src) => {
    const dist = [];
    const visited = [];
    const { length } = graph; // const length = graph.length;
    for (let i = 0; i < length; i++) {
        dist[i] = INF;
        visited[i] = false;
    }
    dist[src] = 0;
    for (let i = 0; i < length - 1; i++) {
        const u = minDistance(dist, visited);
        visited[u] = true;
        for (let v = 0; v < length; v++) {
            if (
                !visited[v] &&
                graph[u][v] !== 0 &&
                dist[u] !== INF &&
                dist[u] + graph[u][v] < dist[v]
            ) {
                dist[v] = dist[u] + graph[u][v];
            }
        }
    }
    return dist;
};

// Variável graph
const graph = [
    [0, 2, 4, 0, 0, 0],
    [0, 0, 1, 4, 2, 0],
    [0, 0, 0, 0, 3, 0],
    [0, 0, 0, 0, 0, 2],
    [0, 0, 0, 3, 0, 2],
    [0, 0, 0, 0, 0, 0],
];

// Chamar a função dijkstra passando o grafo e o nó de origem (por exemplo, 0)
const distances = dijkstra(graph, 0);

// Exibir as distâncias
console.log("Nó Distância");
for (let i = 0; i < distances.length; i++) {
    console.log(i + " " + distances[i]);
}

/**
 * Nó Distância
 * 0 0
 * 1 2
 * 2 3
 * 3 6
 * 4 4
 * 5 6
 */
