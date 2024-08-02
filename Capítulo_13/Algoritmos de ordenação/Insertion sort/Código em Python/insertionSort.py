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

# Algoritmo de insertion sort:
def insertion_sort(array, compare_fn = default_compare):
    length = len(array)
    temp = None
    for i in range(1, length):
        j = i
        temp = array[i]
        while j > 0 and compare_fn(array[j - 1], temp) == Compare["BIGGER_THAN"]:
            array[j] = array[j - 1]
            j -= 1
        array[j] = temp
    return array

# Teste da função insertionSort
array = [3, 5, 1, 4, 2]
print(", ".join(map(str, array))) # 3, 5, 1, 4, 2
array = insertion_sort(array)
print(", ".join(map(str, array))) # 1, 2, 3, 4, 5
