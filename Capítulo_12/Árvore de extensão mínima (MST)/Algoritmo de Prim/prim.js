// Variável infinito
const INF = Number.MAX_SAFE_INTEGER;

// Funçõa minKey
const minKey = (graph, key, visited) => {
    let min = INF;
    let minIndex = 0;
    for (let v = 0; v < graph.length; v++) {
        if (visited[v] === false && key[v] < min) {
            min = key[v];
            minIndex = v;
        }
    }
    return minIndex;
};

// O algoritmo de Prim é apresentado a seguir:
const prim = (graph) => {
    const parent = [];
    const key = [];
    const visited = [];
    const { length } = graph; // length = graph.length
    for (let i = 0; i < length; i++) {
        key[i] = INF;
        visited[i] = false;
    }
    key[0] = 0;
    parent[0] = -1;
    for (let i = 0; i < length - 1; i++) {
        const u = minKey(graph, key, visited);
        visited[u] = true;
        for (let v = 0; v < length; v++) {
            if (graph[u][v] && !visited[v] && graph[u][v] < key[v]) {
                parent[v] = u;
                key[v] = graph[u][v];
            }
        }
    }
    return parent;
};

// Variável graph
var graph = [
    [0, 2, 4, 0, 0, 0],
    [2, 0, 2, 4, 2, 0],
    [4, 2, 0, 0, 3, 0],
    [0, 4, 0, 0, 3, 2],
    [0, 2, 3, 3, 0, 2],
    [0, 0, 0, 2, 2, 0],
];

// Executa o algoritmo de Prim
const parent = prim(graph);

// Exibe as arestas e os pesos
console.log("Edge Weight");
for (let i = 1; i < parent.length; i++) {
    console.log(`${parent[i]} - ${i} ${graph[i][parent[i]]}`);
}

/**
 * Edge Weight
 * 0 - 1 2
 * 1 - 2 2
 * 5 - 3 2
 * 1 - 4 2
 * 4 - 5 2
 */
