# Compare elements
Compare = {
    "LESS_THAN": -1,
    "BIGGER_THAN": 1,
    "EQUALS": 0
}

# defaultCompare
def default_compare(a, b):
    if a == b:
        return Compare["EQUALS"]
    return Compare["LESS_THAN"] if a < b else Compare["BIGGER_THAN"]

# Funtion create_non_sorted_array: creates an array of non-ordered values
def create_non_sorted_array(size):
    array = []
    for i in range(size, 0, -1):
        array.append(i)

    return array

# Função swap
def swap(array, a, b):
    """ temp = array[a]
    array[a] = array[b]
    array[b] = temp """ # Modo Clássico
    array[a], array[b] = array[b], array[a] # Modo idiomático

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


# Variable DOES_NOT_EXIST
DOES_NOT_EXIST = -1

# O algoritmo de busca binária usando a abordagem de dividir e conquistar
def binary_search_recursive(array, value, low, high, compare_fn = default_compare):
    if low <= high:
        mid = (low + high) // 2
        element = array[mid]
        if compare_fn(element, value) == Compare["LESS_THAN"]:
            return binary_search_recursive(array, value, mid + 1, high, compare_fn)
        elif compare_fn(element, value) == Compare["BIGGER_THAN"]:
            return binary_search_recursive(array, value, low, mid - 1, compare_fn)
        else:
            return mid

    return DOES_NOT_EXIST

def binary_search(array, value, compare_fn = default_compare):
    sorted_array = quick_sort(array)
    low = 0
    high = len(sorted_array) - 1
    return binary_search_recursive(array, value, low, high, compare_fn)

# Testando o algoritmo binarySearchRecursive
array = create_non_sorted_array(8)
value = 2
print(binary_search(array, value)) # 1