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

# Algoritmo de bubble sort melhorado:
def bubble_sort_enhanced(array, compare_fn = default_compare):
    length = len(array)
    for i in range(length):
        for j in range(length - 1 - i):
            if compare_fn(array[j], array[j + 1]) == Compare["BIGGER_THAN"]:
                swap(array, j, j + 1)
        
    return array

# Teste da função bubble_sort
array = create_non_sorted_array(5)
print(", ".join(map(str, array))) # 5, 4, 3, 2, 1
array =  bubble_sort_enhanced(array)
print(", ".join(map(str, array))) # 1, 2, 3, 4, 5
