// Algoritmo minCoinChange
function minCoinChange(coins, amount) {
    const cache = [];
    const makeChange = (value) => {
        if (!value) {
            return [];
        }
        if (cache[value]) {
            return cache[value];
        }
        let min = [];
        let newMin;
        let newAmount;
        for (let i = 0; i < coins.length; i++) {
            const coin = coins[i];
            newAmount = value - coin;
            if (newAmount >= 0) {
                newMin = makeChange(newAmount);
            }
            if (
                newAmount >= 0 &&
                (newMin.length < min.length - 1 || !min.length) &&
                (newMin.length || !newAmount)
            ) {
                min = [coin].concat(newMin); // Concatena
                console.log("new Min " + min + " for " + value);
            }
        }
        return (cache[value] = min);
    };
    return makeChange(amount);
}

// Testando algoritmo minCoinChange
let coins = [1, 5, 10, 25];
let amount = 6;

console.log(minCoinChange(coins, amount));

let coins2 = [1, 3, 4];
let amount2 = 6;

console.log(minCoinChange(coins2, amount2));
