# Classe Stack
class Stack:
    def __init__(self):
        self._count = 0
        self._items = {}

    def push(self, element):
        self._items[self._count] = element
        self._count += 1
    
    def size(self):
        return len(self._items)
    
    def is_empty(self):
        return len(self._items) == 0
    
    def pop(self):
        if self.is_empty():
            return None
        self._count -= 1
        result = self._items[self._count]
        del self._items[self._count]
        return result
    
    def peek(self):
        if not (self.is_empty()):
            return self._items[self._count - 1]
        else:
            return None
    
    def clear(self):
        self._count = 0
        self._items = {}

    def to_string(self):
        if self.is_empty():
            return ""
        objString = f"{self._items[0]}"
        for i in range(1, self._count):
            objString = f"{objString}, {self._items[i]}"
        return objString
    
# Algoritmo conversor de base
def base_converter(dec_number, base):
    rem_stack = Stack()
    digits = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    number = dec_number
    base_string = ""
    if (not (base >= 2 and base <= 36)):
        return ""
    while (number > 0):
        rem = number % base
        rem_stack.push(rem)
        number = number // base
    while (not rem_stack.is_empty()):
        base_string += digits[rem_stack.pop()]
    return base_string

print(base_converter(100345, 2)) # 11000011111111001
print(base_converter(100345, 8)) # 303771
print(base_converter(100345, 16)) # 187F9
print(base_converter(100345, 35)) # 2BW0