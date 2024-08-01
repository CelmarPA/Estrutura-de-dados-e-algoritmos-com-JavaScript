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

# Algoritmo de selection sort:
def selection_sort(array, compare_fn = default_compare):
    length = len(array)
    index_min = None
    for i in range(length - 1):
        index_min = i
        for j in range(i, length):
            if compare_fn(array[index_min], array[j]) == Compare["BIGGER_THAN"]:
                index_min = j

        if i != index_min:
            swap(array, i, index_min)

    return array

# Testar o algoritmo de selection sort
array = create_non_sorted_array(5)
print(", ".join(map(str, array))) # 5, 4, 3, 2, 1
array = selection_sort(array)
print(", ".join(map(str, array))) # 1, 5, 4, 3, 2
