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

    # Método sift_up
    def sift_up(self, index):
        parent =  self.get_parent_index(index)
        while index > 0 and self.compare_fn(self.heap[parent], self.heap[index]) == Compare["BIGGER_THAN"]:
            swap(self.heap, parent, index)
            index = parent
            parent = self.get_parent_index(index)
