import Queue from "../Fila com atributos privados/queuePrivate.js";

// Neste exemplo, implementaremos uma simulação do jogo de Batata Quente:
function hotPotato(elementsList, num) {
    const queue = new Queue(); // Usa a classe Queue
    const elimitatedList = [];
    for (let i = 0; i < elementsList.length; i++) {
        queue.enqueue(elementsList[i]); // Obtém uma lista de nomes e enfileira todos eles
    }
    while (queue.size() > 1) {
        for (let i = 0; i < num; i++) {
            queue.enqueue(queue.dequeue()); // Removemos um item do início da fila e o adicionamos no final para simular a batata quente
        }
        elimitatedList.push(queue.dequeue()); // Uma vez que o número for alcançado, a pessoa que tiver a batata quente será eliminada
    }
    return {
        eliminated: elimitatedList,
        winner: queue.dequeue(), // Quando restar apenas uma pessoa, ela será declarada a vencedora
    };
}

// Função para gerar um valor aléatorio:
function randomNumber(min = 7, max = 50) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

// Podemos usar o código a seguir para testar o algoritmo hotPotato:
const names = ["John", "Jack", "Camila", "Ingrid", "Carl"];
const num = randomNumber(); // Adquire um número aleátorio
const result = hotPotato(names, num);
result.eliminated.forEach((name) => {
    console.log(`${name} was eliminated from the Hot Potato game.`);
});
console.log(`The winner is : ${result.winner}`);
