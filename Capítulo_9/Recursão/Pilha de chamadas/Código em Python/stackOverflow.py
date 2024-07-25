i = 0

def recursive_fn():
    global i
    i += 1
    recursive_fn()

try:
    recursive_fn()
except RecursionError as ex:
    print(f"i = {i} erro: {ex}") # i = 999 erro: maximum recursion depth exceeded
