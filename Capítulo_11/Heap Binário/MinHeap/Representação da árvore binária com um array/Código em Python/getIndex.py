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

    # Método get_left_index
    def get_left_index(self, index):
        return (2 * index) + 1
    
    # Método get_right_index
    def get_right_index(self, index):
        return (2 * index) + 2
    
    # Método get_parent_index
    def get_parent_index(self, index):
        if index == 0:
            return None
        return (index - 1) // 2
