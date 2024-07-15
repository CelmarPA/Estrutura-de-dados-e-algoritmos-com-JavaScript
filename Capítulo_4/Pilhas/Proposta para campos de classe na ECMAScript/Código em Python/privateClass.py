# Em Python, não há um mecanismo direto equivalente ao uso do # para tornar atributos privados, como no JavaScript. Python possui uma convenção de nomenclatura e um conceito de "name mangling" que são frequentemente usados para indicar que um atributo deve ser tratado como privado. 

# Em Python, uma convenção amplamente aceita para indicar que um atributo ou método é privado é prefixar seu nome com um sublinhado único (_).
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
    
stack = Stack()
print(stack.is_empty()) # True

stack.push(5)
stack.push(8)

print(stack.peek()) # 8

stack.push(11)
print(stack.size()) # 3
print(stack.is_empty()) # False

stack.push(15)

stack.pop()
stack.pop()
print(stack.size()) # 2

print(stack.to_string()) # 5, 8

stack.clear()
print(stack.is_empty()) # True


# Python também suporta um mecanismo chamado "name mangling" usando dois sublinhados (__) antes do nome do atributo. Isso modifica o nome do atributo na classe para incluir o nome da classe, ajudando a evitar colisões de nomes em subclasses. No entanto, isso não torna o atributo completamente privado, mas sim o torna mais difícil de ser acessado fora da classe.

class Stack1:
    def __init__(self):
        self.__count = 0
        self.__items = {}

    def push(self, element):
        self.__items[self.__count] = element
        self.__count += 1
    
    def size(self):
        return len(self.__items)
    
    def is_empty(self):
        return len(self.__items) == 0
    
    def pop(self):
        if self.is_empty():
            return None
        self.__count -= 1
        result = self.__items[self.__count]
        del self.__items[self.__count]
        return result
    
    def peek(self):
        if not (self.is_empty()):
            return self.__items[self.__count - 1]
        else:
            return None
    
    def clear(self):
        self.__count = 0
        self.__items = {}

    def to_string(self):
        if self.is_empty():
            return ""
        objString = f"{self.__items[0]}"
        for i in range(1, self.__count):
            objString = f"{objString}, {self.__items[i]}"
        return objString
    
stack1 = Stack1()
print(stack1.is_empty()) # True

stack1.push(5)
stack1.push(8)

print(stack1.peek()) # 8

stack1.push(11)
print(stack1.size()) # 3
print(stack1.is_empty()) # False

stack1.push(15)

stack1.pop()
stack1.pop()
print(stack1.size()) # 2

print(stack1.to_string()) # 5, 8

stack1.clear()
print(stack1.is_empty()) # True
