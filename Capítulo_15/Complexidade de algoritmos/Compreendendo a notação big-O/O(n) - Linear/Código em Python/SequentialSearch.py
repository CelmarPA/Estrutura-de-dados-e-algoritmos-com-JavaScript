# Function defaultEquals
def default_equals(a, b):
    return a == b

def sequential_search(array, value, equals_fn = default_equals):
    cost = 0
    for i in range(len(array)):
        cost += 1
        if equals_fn(value, array[i]):
            print(f"cost for sequential_search with input size {len(array)} is {cost}")
            return i
    
    print(f"cost for sequential_search with input size {len(array)} is {cost}")
    return -1

array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
sequential_search(array, 21)
