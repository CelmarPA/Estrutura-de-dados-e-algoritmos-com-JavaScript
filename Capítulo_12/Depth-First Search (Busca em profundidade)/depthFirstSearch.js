import { initializeColor, Colors } from "../models/util.js";
import Queue from "../models/queue.js";
import Graph from "../Graph/Utilizando a classe Graph/graph.js";
import Stack from "../models/stack.js";

const depthFirstSearch = (graph, callback) => {
    const vertices = graph.getVertices();
    const adjList = graph.getAdjList();
    const color = initializeColor(vertices);
    for (let i = 0; i < vertices.length; i++) {
        if (color[vertices[i]] === Colors.WHITE) {
            depthFirstSearchVisit(vertices[i], color, adjList, callback);
        }
    }
};

const depthFirstSearchVisit = (u, color, adjList, callback) => {
    color[u] = Colors.GREY;
    if (callback) {
        callback(u);
    }
    const neighbors = adjList.get(u);
    for (let i = 0; i < neighbors.length; i++) {
        const w = neighbors[i];
        if (color[w] === Colors.WHITE) {
            depthFirstSearchVisit(w, color, adjList, callback);
        }
    }
    color[u] = Colors.BLACK;
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


// Vamos testar o método depthFirstSearch executando o código a seguir.
const printVertex = (value) => console.log("Visited vertex: " + value);

depthFirstSearch(graph, printVertex);