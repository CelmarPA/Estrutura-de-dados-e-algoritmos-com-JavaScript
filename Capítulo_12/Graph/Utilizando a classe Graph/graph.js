import Dictionary from "../../models/dictionary.js";

// Classe Graph
export default class Graph {
    #vertices;
    constructor(isDirected = false) {
        this.isDirected = isDirected;
        this.#vertices = [];
        this.adjList = new Dictionary();
    }

    // Método getter para #vertices:
    _getVertices() {
        return this.#vertices;
    }

    // Método setter para #vertices:
    _setVertices(vertice) {
        this.#vertices.push(vertice);
    }

    // Método addVertex
    addVertex(v) {
        if (!this._getVertices().includes(v)) {
            this._setVertices(v);
            this.adjList.set(v, []);
        }
    }

    // Método addEdge
    addEdge(v, w) {
        if (!this.adjList.get(v)) {
            this.addVertex(v);
        }
        if (!this.adjList.get(w)) {
            this.addVertex(w);
        }
        this.adjList.get(v).push(w)
        if (!this.isDirected) {
            this.adjList.get(w).push(v);
        }
    }

    // Método getVetices
    getVertices() {
        return this._getVertices();
    }
    
    // Método getAdjList
    getAdjList() {
        return this.adjList;
    }

    // Método toString
    toString() {
        let s = "";
        let vertices = this._getVertices();
        for (let i = 0; i < this.#vertices.length; i++) {
            s += `${vertices[i]} -> `;
            const neighbors = this.adjList.get(vertices[i]);
            for (let j = 0; j < neighbors.length; j++) {
                s += `${neighbors[j]} `;
            }
            s += "\n";
        }
        return s;
    }
}

// // Criando a instancia de Graph
// const graph = new Graph();

// // Array com todos os vértices que queremos adicionar em nosso grafo
// const myVertices = ["A", "B", "C", "D", "E", "F", "G", "H", "I"];

// // Adicionar os vertices com loop for
// for (let i = 0; i < myVertices.length; i++) {
//     graph.addVertex(myVertices[i]);
// }

// // Adicionar as arestas 
// graph.addEdge("A", "B");
// graph.addEdge("A", "C");
// graph.addEdge("A", "D");
// graph.addEdge("C", "D");
// graph.addEdge("C", "G");
// graph.addEdge("D", "G");
// graph.addEdge("D", "H");
// graph.addEdge("B", "E");
// graph.addEdge("B", "F");
// graph.addEdge("E", "I");

// // Exibe o grafo no console
// console.log(graph.toString()); 
// /**
//  * A -> B C D
//  * B -> A E F
//  * C -> A D G
//  * D -> A C G H
//  * E -> B I
//  * F -> B
//  * G -> C D
//  * H -> D
//  * I -> E
//  */
