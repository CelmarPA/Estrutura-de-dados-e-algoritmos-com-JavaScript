# Algoritmo de radix sort:
def radix_sort(array, radix_base = 10):
    if len(array) < 2:
        return array
    
    min_value = find_min_value(array)
    max_value = find_max_value(array)
    significant_digit = 1

    while (max_value - min_value) / significant_digit >= 1:
        array = counting_sort_for_radix(array, radix_base, significant_digit, min_value)
        significant_digit *= radix_base
    
    return array

# Função find_min_value
def find_min_value(array):
    min = array[0]
    for i in range(len(array)):
        if array[i] < min:
            min = array[i]

    return min

# Função find_max_value
def find_max_value(array):
    max = array[0]
    for i in range(len(array)):
        if array[i] > max:
            max = array[i]
        
    return max

# Função counting_sort_for_radix
def counting_sort_for_radix(array, radix_base, significant_digit, min_value):
    buckets_index = None
    buckets = [0 for _ in range(radix_base)]
    aux = [0] * len(array)

    for i in range(len(array)):
        buckets_index = (array[i] - min_value) // significant_digit % radix_base
        buckets[buckets_index] += 1
    
    for i in range(1, radix_base):
        buckets[i] += buckets[i - 1]

    for i in range(len(array) - 1, -1, -1):
        buckets_index = (array[i] - min_value) // significant_digit % radix_base
        aux[buckets[buckets_index] - 1] = array[i]
        buckets[buckets_index] -= 1
        
    for i in range(len(array)):
        array[i] = aux[i]

    return array

# Teste da função radixSort
array = [ 456, 789, 123, 0, 1, 32, 4, 243, 321, 42, 90, 10, 999]
print(", ".join(map(str, array))) # 456, 789, 123, 0, 1, 32, 4, 243, 321, 42, 90, 10, 999
array = radix_sort(array)
print(", ".join(map(str, array))) # 0, 1, 4, 10, 32, 42, 90, 123, 243, 321, 456, 789, 999
