// Variável infinito
const INF = Number.MAX_SAFE_INTEGER;

// Função find
const find = (i, parent) => {
    while (parent[i]) {
        i = parent[i];
    }
    return i;
};

// Função union
const union = (i, j, parent) => {
    if (i !== j) {
        parent[j] = i;
        return true;
    }
    return false;
};

// Função initializeCost
const initializeCost = (graph) => {
    const cost = [];
    const { length } = graph;
    for (let i = 0; i < length; i++) {
        cost[i] = [];
        for (let j = 0; j < length; j++) {
            if (graph[i][j] === 0) {
                cost[i][j] = INF;
            } else {
                cost[i][j] = graph[i][j];
            }
        }
    }
    return cost;
};

// O algoritmo de Kruskal é apresentado a seguir:
const kruskal = (graph) => {
    const { length } = graph;
    const parent = [];
    let ne = 0;
    let a;
    let b;
    let u;
    let v;
    const cost = initializeCost(graph);
    while (ne < length - 1) {
        for (let i = 0, min = INF; i < length; i++) {
            for (let j = 0; j < length; j++) {
                if (cost[i][j] < min) {
                    min = cost[i][j];
                    a = u = i;
                    b = v = j;
                }
            }
        }
        u = find(u, parent);
        v = find(v, parent);
        if (union(u, v, parent)) {
            ne++;
        }
        cost[a][b] = cost[b][a] = INF;
    }
    return parent;
};

// Exemplo de grafo representado por uma matriz de adjacência
const graph = [
    [0, 10, 0, 30, 100],
    [10, 0, 50, 0, 0],
    [0, 50, 0, 20, 10],
    [30, 0, 20, 0, 60],
    [100, 0, 10, 60, 0],
];

// Função para imprimir a Árvore Geradora Mínima
const printMST = (parent) => {
    console.log("Edges in the Minimum Spanning Tree:");
    parent.forEach((p, i) => {
        if (p != null) {
            console.log(`Edge: ${p} - ${i}`);
        }
    });
};

// Executando o algoritmo de Kruskal
const parent = kruskal(graph);

// Imprimindo o resultado
printMST(parent);

/**
 * Edges in the Minimum Spanning Tree:
 * Edge: 0 - 1
 * Edge: 0 - 2
 * Edge: 2 - 3
 * Edge: 2 - 4
 */