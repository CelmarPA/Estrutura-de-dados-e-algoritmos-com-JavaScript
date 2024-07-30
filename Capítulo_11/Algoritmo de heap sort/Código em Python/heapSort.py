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

# Função swap
def swap(array, a, b):
    temp = array[a]
    array[a] = array[b]
    array[b] = temp

# Função heapify
def heapify(array, index, heap_size, compare_fn):
    largest = index
    left = 2 * index + 1
    right = 2 * index + 2
    if left < heap_size and compare_fn(array[left], array[index]) > 0:
        largest = left
    if right < heap_size and compare_fn(array[right], array[largest]) > 0:
        largest = right
    if largest != index:
        swap(array, index, largest)
        heapify(array, largest, heap_size, compare_fn)
    
# Para implementar o heap máximo, podemos usar a função a seguir:
def build_max_heap(array, compare_fn):
    for i in range((len(array) // 2) - 1, -1, -1):
        heapify(array, i, len(array), compare_fn)
    return array

# Código do algoritmo de heap sort:
def heap_sort(array, compare_fn = default_compare):
    heap_size = len(array)
    build_max_heap(array, compare_fn)
    while heap_size > 1:
        swap(array, 0, heap_size - 1)
        heap_size -= 1
        heapify(array, 0, heap_size, compare_fn)
    return array

array = [7, 6, 3, 5, 4, 1, 2]
print("Before sorting: ", array)
print("After sorting: ", heap_sort(array))
