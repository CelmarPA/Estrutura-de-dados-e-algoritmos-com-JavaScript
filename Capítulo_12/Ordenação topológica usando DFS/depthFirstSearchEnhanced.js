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

const graph = new Graph(true); // grafo direcionado
const myVertices = ["A", "B", "C", "D", "E", "F"];

// Adicionar os vértices com loop for
for (let i = 0; i < myVertices.length; i++) {
    graph.addVertex(myVertices[i]);
}

// Adicionar as arestas
graph.addEdge("A", "C");
graph.addEdge("A", "D");
graph.addEdge("B", "D");
graph.addEdge("B", "E");
graph.addEdge("C", "F");
graph.addEdge("F", "E");

const result = DFS(graph)

const fTimes = result.finished;

let s = "";
for (let count = 0; count < myVertices.length; count++) {
    let max = 0;
    let maxName = null;
    for (let i = 0; i < myVertices.length; i++) {
        if (fTimes[myVertices[i]] > max) {
            max = fTimes[myVertices[i]];
            maxName = myVertices[i];
        }
    }
    if (count > 0) {
        s += " - ";
    }
    s += maxName;
    delete fTimes[maxName];
}
console.log(s); // - B - A - D - C - F - E
