import { initializeColor, Colors } from "../models/util.js";
import Queue from "../models/queue.js";
import Graph from "../Graph/Utilizando a classe Graph/graph.js";
import Stack from "../models/stack.js";

const BFS = (graph, startVertex) => {
    const vertices = graph.getVertices();
    const adjList = graph.getAdjList();
    const color = initializeColor(vertices);
    const queue = new Queue();
    const distances = {};
    const predecessors = {};
    queue.enqueue(startVertex);
    for (let i = 0; i < vertices.length; i++) {
        distances[vertices[i]] = 0;
        predecessors[vertices[i]] = null;
    }
    while (!queue.isEmpty()) {
        const u = queue.dequeue();
        const neighbors = adjList.get(u);
        color[u] = Colors.GREY
        for (let i = 0; i < neighbors.length; i++) {
            const w = neighbors[i];
            if (color[w] === Colors.WHITE) {
                color[w] = Colors.GREY;
                distances[w] = distances[u] + 1;
                predecessors[w] = u;
                queue.enqueue(w);
            }
        }
        color[u] = Colors.BLACK;
    }
    return {
        distances,
        predecessors
    };
};

// Criando a instancia de Graph
const graph = new Graph();

// Array com todos os vértices que queremos adicionar em nosso grafo
const myVertices = ["A", "B", "C", "D", "E", "F", "G", "H", "I"];

// Adicionar os vertices com loop for
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

const shortestPathA = BFS(graph, myVertices[0]);
console.log(shortestPathA);

/**
* distances: [A: 0, B: 1, C: 1, D: 1, E: 2, F: 2, G: 2, H: 2, I: 3],
* predecessors: [A: null, B: "A", C: "A", D: "A", E: "B", F: "B", G: "C", H: "D", I: "E"]
*/

// Com o array de antecessores, podemos construir o caminho do vértice A até os demais vértices usando o código a seguir.

const fromVertex = myVertices[0];
for (let i = 1; i < myVertices.length; i++) {
    const toVertex = myVertices[i];
    const path = new Stack();
    for (let v = toVertex; v !== fromVertex; v = shortestPathA.predecessors[v]) {
        path.push(v);
    }
    path.push(fromVertex);
    let s = path.pop();
    while (!path.isEmpty()) {
        s += " - " + path.pop();
    }
    console.log(s);
}