# Algoritmo guloso knap_sack
def knap_sack(capacity, weights, values):
    n = len(values)
    load = 0 
    val = 0
 
    for i in range(n):
        if load < capacity:
            if (weights[i]) <= capacity - load:
                val += values[i]
                load += weights[i]
            else:
                r = (capacity - load) / weights[i]
                val += r * values[i]
                load += weights[i]

    return val

# Testando o algoritmo guloso KnapSack
values = [3,4,5]
weights = [2,3,4]
capacity = 5
n = len(values)
print(knap_sack(capacity, weights, values)) # exibe 7
