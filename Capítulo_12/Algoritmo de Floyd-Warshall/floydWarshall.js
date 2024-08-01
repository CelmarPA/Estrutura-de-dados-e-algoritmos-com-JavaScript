// Algoritmo de Floyd-Warshall:
const floydWarshall = (graph) => {
    const dist = [];
    const { length } = graph; // const length = graph.length
    for (let i = 0; i < length; i++) {
        dist[i] = [];
        for (let j = 0; j < length; j++) {
            if (i === j) {
                dist[i][j] = 0;
            } else if (graph[i][j] === 0) {
                dist[i][j] = Infinity;
            } else {
                dist[i][j] = graph[i][j];
            }
        }
    }
    for (let k = 0; k < length; k++) {
        for (let i = 0; i < length; i++) {
            for (let j = 0; j < length; j++) {
                if (dist[i][k] + dist[k][j] < dist[i][j]) {
                    dist[i][j] = dist[i][k] + dist[k][j];
                }
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

// Chamar a função floydWarshall passando o grafo
const distances = floydWarshall(graph);

// Exibe a matriz de distâncias
console.log("Matriz de Distâncias:");
for (let i = 0; i < distances.length; i++) {
    console.log(
        distances[i]
            .map((value) => (value === Infinity ? "INF" : value))
            .join(" ")
    );
}

/**
 * Matriz de Distâncias:
 * 0 2 3 6 4 6
 * INF 0 1 4 2 4
 * INF INF 0 6 3 5
 * INF INF INF 0 INF 2
 * INF INF INF 3 0 2
 * INF INF INF INF INF 0
 */
