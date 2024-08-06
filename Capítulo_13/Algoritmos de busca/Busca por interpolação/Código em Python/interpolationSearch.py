# Compare elements
Compare = {
    "LESS_THAN": -1,
    "BIGGER_THAN": 1,
    "EQUALS": 0
}

# defaultCompare
def default_compare(a, b):
    if a == b:
        return Compare["EQUALS"]
    return Compare["LESS_THAN"] if a < b else Compare["BIGGER_THAN"]

# Função defaultEquals
def default_equals(a, b):
    return a == b

# Função default_diff
def default_diff(a,  b):
    return float(a) - float(b)

# Função create_non sorted array: cria um array de valores não ordenados
def create_non_sorted_array(size):
    array = []
    for i in range(size, 0, -1):
        array.append(i)

    return array

# Variável DOES_NOT_EXIST
DOES_NOT_EXIST = -1

# Função lesser_or_equals
def lesser_or_equals(a, b, compare_fn):
    comp = compare_fn(a, b)
    return comp == Compare["LESS_THAN"] or comp == Compare["EQUALS"]

# Função bigger_or_equals
def bigger_or_equals(a, b, compare_fn):
    comp = compare_fn(a, b)
    return comp == Compare["BIGGER_THAN"] or comp == Compare["EQUALS"]