# Importação de bibliotecas:
from math import floor

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
        self.__heap = []

    # Método getter para __heap:
    def get_heap(self):
        return self.__heap

    # Método getter para __heap:
    def push_to_heap(self, value):
        self.__heap.append(value)
    
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
        return floor((index - 1) // 2)

    # Método size
    def size(self):
        return len(self.get_heap())
    
    # Método is_empty
    def is_empty(self):
        return self.size() <= 0

    # Método clear
    def clear(self):
        self.__heap = []
    
    # Método find_minimum
    def find_minimum(self):
        return None if self.is_empty() else self.get_heap()[0]
    
    # Método insert
    def insert(self, value):
        if value is not None:
            index = len(self.get_heap())
            self.push_to_heap(value)
            self.sift_up(index)
            return True
        return False
    
    # Método sift_up
    def sift_up(self, index):
        parent =  self.get_parent_index(index)
        while index > 0 and self.compare_fn(self.get_heap()[parent], self.get_heap()[index]) == Compare["BIGGER_THAN"]:
            swap(self.get_heap(), parent, index)
            index = parent
            parent = self.get_parent_index(index)
    
    # Método sift_down
    def sift_down(self, index):
        element = index
        left = self.get_left_index(index)
        right = self.get_right_index(index)
        size = self.size()
        if left < size and self.compare_fn(self.get_heap()[element], self.get_heap()[left]) == Compare["BIGGER_THAN"]:
            element = left
        if right < size and self.compare_fn(self.get_heap()[element], self.get_heap()[right]) == Compare["BIGGER_THAN"]:
            element = right
        if index != element:
            swap(self.get_heap(), index, element)
            self.sift_down(element)

    # Método extract
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
    
    # Método heapify
    def heapify(self, array = None):
        if array:
            for value in array:
                self.push_to_heap(value)
        max_index = floor(self.size() // 2) - 1
        for i in range(max_index, -1, -1):
            self.sift_down(i)
        return self.get_heap()
    
# Classe MaxHeap
class MaxHeap(MinHeap):
    def __init__(self, compare_fn = default_compare):
        super().__init__(compare_fn)
        self.compare_fn = compare_fn
        self.compare_fn = reverse_compare(compare_fn)

maxHeap = MaxHeap()
maxHeap.insert(2)
maxHeap.insert(3)
maxHeap.insert(4)
maxHeap.insert(5)
maxHeap.insert(1)

print("Heap size: ", maxHeap.size()); # 5
print("Heap min value: ", maxHeap.find_minimum())
print(maxHeap.heapify())