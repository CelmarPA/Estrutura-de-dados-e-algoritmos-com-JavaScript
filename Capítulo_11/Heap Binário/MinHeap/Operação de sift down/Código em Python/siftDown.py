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

    # Método sift_down
    def sift_down(self, index):
        element = index
        left = self.get_left_index(index)
        right = self.get_right_index(index)
        size = self.size()
        if left < size and self.compare_fn(self.heap[element], self.heap[left]) == Compare["BIGGER_THAN"]:
            element = left
        if right < size and self.compare_fn(self.heap[element], self.heap[right]) == Compare["BIGGER_THAN"]:
            element = right
        if index != element:
            swap(self.heap, index, element)
            self.sift_down(element)
