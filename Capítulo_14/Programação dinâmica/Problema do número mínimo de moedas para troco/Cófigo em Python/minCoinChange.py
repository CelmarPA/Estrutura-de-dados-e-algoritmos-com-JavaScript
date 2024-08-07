# Algoritmo min_coin_change
def min_coin_change(coins, amount):
    cache = [None] * (amount + 1)
    def make_change(value):
        if value == 0:
            return []
        if cache[value] is not None:
            return cache[value]
        
        min = []
        newMin = None
        newAmount = None
        
        for coin in coins:
            newAmount = value - coin
            if newAmount >= 0:
                newMin = make_change(newAmount)
            
            if newAmount >= 0 and (len(newMin) < len(min) - 1 or not len(min)) and (len(newMin) or not newAmount):
                min = [coin] + newMin # Concatena
                print("new Min ", min , " for " , value)
        cache[value] = min
        return min
    return make_change(amount)

# Testando algoritmo min_coin_change
coins = [1, 5, 10, 25]
amount = 36

print(min_coin_change(coins, amount))

coins2 = [1, 3, 4]
amount2 = 6

print(min_coin_change(coins2, amount2))
