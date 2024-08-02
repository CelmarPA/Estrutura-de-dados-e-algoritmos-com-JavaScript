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

# Algoritmo de merge sort:
def merge_sort(array,compare_fn = default_compare):
    if len(array) > 1:
        length = len(array)
        middle = length // 2
        left = merge_sort(array[:middle], compare_fn)
        right = merge_sort(array[middle:], compare_fn)
        array = merge(left, right, compare_fn)
    return array

# Função merge
def merge(left, right, compare_fn):
    i = 0
    j = 0
    length = len(left)
    result = []
    while i < len(left) and j < len(right):
        result.append(
            left[i] if compare_fn(left[i], right[j]) == Compare["LESS_THAN"] else right[j]
        )
        if compare_fn(left[i], right[j]) == Compare["LESS_THAN"]:
            i += 1
        else:
            j += 1
    result.extend(left[i:] if i < length else right[j:])
    return result

# Teste da função merge_sort
array = create_non_sorted_array(8)
print(", ".join(map(str, array))) # 8, 7, 6, 5, 4, 3, 2, 1
array = merge_sort(array)
print(", ".join(map(str, array))) # 1, 2, 3, 4, 5, 6, 7, 8
