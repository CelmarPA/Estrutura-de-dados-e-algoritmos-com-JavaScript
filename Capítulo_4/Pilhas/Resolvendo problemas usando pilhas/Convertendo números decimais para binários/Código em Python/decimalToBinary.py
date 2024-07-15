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

# Convertendo números decimais para binários
def decimal_to_binary(dec_number):
    rem_stack = Stack()
    number = dec_number
    binary_string = ""
    while (number > 0): # enquanto o resultado da divisão não for zero
        rem = number % 2 # vamos obter o resto da divisão
        rem_stack.push(rem)
        number = number // 2 # atualizamos o número que será dividido por 2
    while (not rem_stack.is_empty()): # fazemos pop dos elementos da pilha até que ela esteja vazia, concatenando os elementos removidos em uma string
        binary_string += str(rem_stack.pop())
    return binary_string

print(decimal_to_binary(233)) # 11101001
print(decimal_to_binary(10)) # 10
print(decimal_to_binary(1000)) # 1111101000