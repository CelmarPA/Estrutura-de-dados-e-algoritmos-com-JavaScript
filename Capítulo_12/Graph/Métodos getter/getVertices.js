import  Dictionary  from "../../models/dictionary.js"

// Classe Graph
class Graph {
    constructor(isDirected = false) {
        this.isDirected = isDirected;
        this.vertices = [];
        this.adjList = new Dictionary();
    }

    // Método getVertices
    getVertices() {
        return this.vertices;
    }
}
