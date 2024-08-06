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

# Algoritmo de bucket sort:
def bucket_sort(array, bucket_size = 5):
    if len(array) < 2:
        return array
    buckets = create_buckets(array, bucket_size)
    return sort_buckets(buckets)

# Função create_buckets
def create_buckets(array, bucket_size):
    min_value = array[0]
    max_value = array[0]
    for i in range(len(array)):
        if array[i] < min_value:
            min_value = array[i]
        elif array[i] > max_value:
            max_value = array[i]
    bucket_count = ((max_value - min_value) // bucket_size) + 1
    buckets = [[]  for _ in range(bucket_count)]

    for i in range(len(array)):
        bucket_index = ((array[i] - min_value) // bucket_size)
        buckets[bucket_index].append(array[i])

    return buckets

# Função sort_buckets
def sort_buckets(buckets):
    sorted_array = []
    for bucket in buckets:
        if bucket is not None:
            insertion_sort(bucket)
            sorted_array.extend(bucket)
    return sorted_array

# Teste da função bucket_sort
array = [5, 4, 3, 2, 6, 1, 7, 10, 9, 8]
print(", ".join(map(str, array))) # 5, 4, 3, 2, 6, 1, 7, 10, 9, 8
array = bucket_sort(array)
print(", ".join(map(str, array))) # 1, 2, 3, 4, 5, 6, 7, 8, 9, 10
