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

# Algoritmo de counting sort:
def counting_sort(array):
    if len(array) < 2:
        return array
    
    max_value = find_max_value(array)
    counts = [0] * (max_value + 1)
    
    for element in array:
        if element not in counts:
            counts[element] = 0
        counts[element] += 1

    sorted_index = 0
    for i, count in enumerate(counts):
        while count > 0:
            array[sorted_index] = i
            sorted_index += 1
            count -= 1

    return array

# Função find_max_value
def find_max_value(array):
    max = array[0]
    for i in range(len(array)):
        if array[i] > max:
            max = array[i]

    return max

# Teste da função counting_sort
array = create_non_sorted_array(8)
print(", ".join(map(str, array))) # 8, 7, 6, 5, 4, 3, 2, 1
array = counting_sort(array)
print(", ".join(map(str, array))) # 1, 2, 3, 4, 5, 6, 7, 8
