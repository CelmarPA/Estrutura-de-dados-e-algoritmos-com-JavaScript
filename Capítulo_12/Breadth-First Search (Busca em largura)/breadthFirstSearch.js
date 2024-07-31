import { initializeColor, Colors } from "../models/util.js";
import Queue from "../models/queue.js";
import Graph from "../Graph/Utilizando a classe Graph/graph.js";

// Função breadthFirstSearch
export const breadthFirstSearch = (graph, startVertex, callback) => {
    const vertices = graph.getVertices();
    const adjList = graph.getAdjList();
    const color = initializeColor(vertices);
    const queue = new Queue();
    queue.enqueue(startVertex);
    while (!queue.isEmpty()) {
        const u = queue.dequeue();
        const neighbors = adjList.get(u);
        color[u] = Colors.GREY;
        for (let i = 0; i < neighbors.length; i++) {
            const w = neighbors[i];
            if (color[w] === Colors.WHITE) {
                color[w] = Colors.GREY;
                queue.enqueue(w);
            }
        }
        color[u] = Colors.BLACK;
        if (callback) {
            callback(u);
        }
    }
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

// Vamos testar esse algoritmo executando o código a seguir
const printVertex = (value) => console.log("Visited vertex: " + value);

breadthFirstSearch(graph,  myVertices[0], printVertex);
/**
 * Visited vertex: A
 * Visited vertex: B
 * Visited vertex: C
 * Visited vertex: D
 * Visited vertex: E
 * Visited vertex: F
 * Visited vertex: G
 * Visited vertex: H
 * Visited vertex: I
 */
