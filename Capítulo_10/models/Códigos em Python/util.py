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
