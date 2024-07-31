import { initializeColor, Colors } from "../models/util.js";
import Graph from "../Graph/Utilizando a classe Graph/graph.js";

export const DFS = graph => {
    const vertices = graph.getVertices();
    const adjList = graph.getAdjList();
    const color = initializeColor(vertices);
    const d = {};
    const f = {};
    const p = {};
    const time = { count : 0 };
    for (let i = 0; i < vertices.length; i++) {
        f[vertices[i]] = 0;
        d[vertices[i]] = 0;
        p[vertices[i]] = null;
    }
    for (let i = 0; i < vertices.length; i++) {
        if (color[vertices[i]] === Colors.WHITE) {
            DFSVisit(vertices[i], color, d, f, p, time, adjList);
        }
    }
    return {
        discovery: d,
        finished: f,
        predecessors: p
    };
};

const DFSVisit = (u, color, d, f, p, time, adjList) => {
    color[u] = Colors.GREY;
    d[u] = ++time.count;
    const neighbors = adjList.get(u);
    for (let i = 0; i < neighbors.length; i++) {
        const w = neighbors[i];
        if (color[w] === Colors.WHITE) {
            p[w] = u;
            DFSVisit(w, color, d, f, p, time, adjList);
        }
    }
    color[u] = Colors.BLACK;
    f[u] = ++time.count;
};

// Criando a instância de Graph
const graph = new Graph();

// Array com todos os vértices que queremos adicionar em nosso grafo
const myVertices = ["A", "B", "C", "D", "E", "F", "G", "H", "I"];

// Adicionar os vértices com loop for
for (let i = 0; i < myVertices.length; i++) {
    graph.addVertex(myVertices[i]);
}

// Adicionar as arestas
graph.addEdge("A", "B");
graph.addEdge("A", "C");
graph.addEdge("A", "D");
graph.addEdge("C", "D");
graph.addEdge("C", "G");
graph.addEdge("D", "G");
graph.addEdge("D", "H");
graph.addEdge("B", "E");
graph.addEdge("B", "F");
graph.addEdge("E", "I");

// Função para imprimir vértices visitados
const printVertex = (value) => console.log("Visited vertex: " + value);

// Executar a DFS
const result = DFS(graph);
console.log("Discovery times:", result.discovery);
console.log("Finish times:", result.finished);
console.log("Predecessors:", result.predecessors);