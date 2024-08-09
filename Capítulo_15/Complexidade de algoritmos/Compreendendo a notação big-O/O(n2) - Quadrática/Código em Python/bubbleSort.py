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

def bubble_sort(array, compare_fn = default_compare):
    length = len(array)
    cost = 0
    for i in range(length):
        cost += 1
        for j in range(length - 1):
            cost += 1
            if compare_fn(array[j], array[j + 1]) == Compare["BIGGER_THAN"]:
                swap(array, j, j + 1)
            
    print(f"cost for bubble_sort with input size {length} is {cost}")
    return array

array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
bubble_sort(array)
