# Algoritmo guloso min_coin_change
def min_coin_change(coins, amount):
    change = []
    total = 0
    for i in range(len(coins) - 1, -1, -1):
        coin = coins[i]

        while total + coin <= amount:
            change.append(coin)
            total += coin

    return change

# Testando algoritmo guloso minCoinChange
coins = [1, 5, 10, 25]
amount = 36
print(min_coin_change(coins, amount))
