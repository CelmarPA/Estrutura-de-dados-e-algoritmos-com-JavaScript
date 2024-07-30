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

    # Método extract(): esse método remove o value mínimo (heap mínimo) ou máximo (heap máximo) e devolve esse valor.
    def extract(self):
        if self.is_empty():
            return None
        if self.size() == 1:
            return self.get_heap().pop(0)
        removed_value = self.get_heap()[0]
        heap = self.get_heap()
        heap[0] = heap.pop()
        self.sift_down(0)
        return removed_value
