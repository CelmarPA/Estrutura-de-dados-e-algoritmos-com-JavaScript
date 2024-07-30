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

# Classe MinHeap
class MinHeap:
    def __init__(self, compare_fn = default_compare):
        self.compare_fn = compare_fn
        self.heap = []

    # Método size
    def size(self):
        return len(self.heap)
    
    # Método is_empty
    def is_empty(self):
        return self.size() <= 0

    # Método find_minimum(): esse método devolve o value mínimo (heap mínimo) ou máximo (heap máximo) sem removê-lo.
    def find_minimum(self):
        return None if self.is_empty() else self.heap[0]
