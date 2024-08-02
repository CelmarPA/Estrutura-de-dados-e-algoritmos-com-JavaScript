# Compare elements
Compare = {
    "LESS_THAN": -1,
    "BIGGER_THAN": 1
}

# defaultCompare
def default_compare(a, b):
    if a == b:
        return 0
    return Compare["LESS_THAN"] if a < b else Compare["BIGGER_THAN"]

# Função swap
def swap(array, a, b):
    """ temp = array[a]
    array[a] = array[b]
    array[b] = temp """ # Modo Clássico
    array[a], array[b] = array[b], array[a] # Modo idiomático

# Função create_non_sorted_array: cria um array de valores não ordenados
def create_non_sorted_array(size):
    array = []
    for i in range(size, 0, -1):
        array.append(i)

    return array

# Algoritmo de quick sort:
def quick_sort(array, compare_fn = default_compare):
    return quick(array, 0, len(array) - 1, compare_fn)


# Função quick
def quick(array, left, right, compare_fn):
    index = None
    if len(array) > 1:
        index = partition(array, left, right, compare_fn)
        if (left < index - 1):
            quick(array, left, index - 1, compare_fn)
        if (index < right):
            quick(array,  index, right, compare_fn)

    return array

#  Função partition
def partition(array, left, right, compare_fn):
    pivot = array[(right + left) // 2]
    i = left
    j = right
    while i <= j:
        while compare_fn(array[i], pivot) == Compare["LESS_THAN"]:
            i += 1
        while compare_fn(array[j], pivot) == Compare["BIGGER_THAN"]:
            j -= 1
        if i <= j:
            swap(array, i, j)
            i += 1
            j -= 1
    
    return i

# Teste da função insertionSort
array = [3, 5, 1, 6, 4, 7, 2]
print(", ".join(map(str, array))) # 3, 5, 1, 6, 4, 7, 2
array = quick_sort(array)
print(", ".join(map(str, array))) # 1, 2, 3, 4, 5, 6, 7
