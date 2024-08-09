// Algoritmo guloso minCoinChange
function minCoinChange(coins, amount) {
    const change = [];
    let total = 0;
    for (let i = coins.length; i >= 0; i--) {
        const coin = coins[i];
        while (total + coin <= amount) {
            change.push(coin);
            total += coin;
        }
    }
    return change;
}

// Testando algoritmo guloso minCoinChange
let coins = [1, 5, 10, 25];
let amount = 36;
console.log(minCoinChange(coins, amount));
