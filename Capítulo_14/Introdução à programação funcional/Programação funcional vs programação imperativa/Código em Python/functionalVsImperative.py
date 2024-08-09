# Programação imperativa:
def print_array(array):
    for i in range(len(array)):
        print(array[i])

print_array([1, 2, 3, 4, 5])

# Programação functional
def for_each(array, action):
    for i in range(len(array)):
        action(array[i])

def log_item(item):
    print(item)

for_each([1, 2, 3, 4, 5], log_item)
