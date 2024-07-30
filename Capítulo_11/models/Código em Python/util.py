# Compare elements
Compare = {
    "LESS_THAN": -1,
    "BIGGER_THAN": 1
}

# Função default_compare
def default_compare(a, b):
    if a == b:
        return 0
    return Compare["LESS_THAN"] if a < b else Compare["BIGGER_THAN"]

# Função reverse_compare
def reverse_compare(compare_fn):
    return lambda a, b: compare_fn(b, a)

# Função swap´
def swap(array, a, b):
    temp = array[a]
    array[a] = array[b]
    array[b] = temp

def swap_2(array, a, b):
    array[a], array[b] = array[b], array[a]
