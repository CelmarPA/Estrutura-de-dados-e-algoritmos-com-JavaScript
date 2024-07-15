import weakref

class Stack:
    def __init__(self):
        self._items = weakref.WeakKeyDictionary()
        self._items[self] = []

    def push(self, element):
        s = self._items[self]
        s.append(element)

    def pop(self):
        s = self._items[self]
        if s:
            r = s.pop()
            return r
        else:
            return None
        
stack = Stack()

stack.push(5)
stack.push(8)
print(stack.pop()) #