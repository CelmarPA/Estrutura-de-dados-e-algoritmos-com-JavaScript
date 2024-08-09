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

# Funtion swap
def swap(array, a, b):
    """ temp = array[a]
    array[a] = array[b]
    array[b] = temp """ # Classic Mode
    array[a], array[b] = array[b], array[a] # Idiomatic Mode

# Function reverse_compare
def reverse_compare(compare_fn):
    return lambda a, b: compare_fn(b, a) 

# Funtion create_non_sorted_array: creates an array of non-ordered values
def create_non_sorted_array(size):
    array = []
    for i in range(size, 0, -1):
        array.append(i)

    return array

# Function defaultEquals
def default_equals(a, b):
    return a == b

# Function lesser_or_equals
def lesser_or_equals(a, b, compare_fn):
    comp = compare_fn(a, b)
    return comp == Compare["LESS_THAN"] or comp == Compare["EQUALS"]

# Function bigger_or_equals
def bigger_or_equals(a, b, compare_fn):
    comp = compare_fn(a, b)
    return comp == Compare["BIGGER_THAN"] or comp == Compare["EQUALS"]

# Variable DOES_NOT_EXIST
DOES_NOT_EXIST = -1

# Function default_diff
def default_diff(a,  b):
    return float(a) - float(b)

# Importação de biblioteca
from math import floor

# Algoritmo interpolation search
def interpolation_search(array, 
                         value, 
                         compare_fn = default_compare,
                         equals_fn = default_equals,
                         diff_fn = default_diff):
    length = len(array)
    low = 0
    high = length - 1
    position = -1
    delta = -1
    while low <= high and bigger_or_equals(value, array[low], compare_fn) and lesser_or_equals(value, array[high], compare_fn):
        delta = (diff_fn(value, array[low])) / (diff_fn(array[high], array[low]))
        position = low + floor((high - low) * delta)

        if equals_fn(array[position], value):
            return position
        if compare_fn(array[position], value) == Compare["LESS_THAN"]:
            low = position + 1
        else:
            high = position - 1

    return DOES_NOT_EXIST

# Testando a função interpolation_search
array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
value = 4
print(interpolation_search(array, value)) # 3
