# Compare elemets
Compare = {
    "LESS_THAN": -1,
    "BIGGER_THAN": 1
}

# Função default_compare
def default_compare(a, b):
    if (a == b):
        return 0
    
    return Compare["LESS_THAN"] if a < b else Compare["BIGGER_THAN"]

# balance_factor
balance_factor = {
    "UNBALANCED_RIGHT": 1,
    "SLIGHTLY_UNBALANCED_RIGHT": 2,
    "BALANCED": 3,
    "SLIGHTLY_UNBALANCED_LEFT": 4,
    "UNBALANCED_LEFT": 5
}
