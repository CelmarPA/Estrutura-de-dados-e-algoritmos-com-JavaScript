class Queue:
    def __init__(self):
        self.count = 0
        self.lowest_count = 0
        self.items = {}

    def enqueue(self, element):
        self.items[self.count] = element
        self.count += 1

    def dequeue(self):
        if (self.is_empty()):
            return None
        result = self.items[self.lowest_count]
        del self.items[self.lowest_count]
        self.lowest_count += 1
        return result
    
    def peek(self):
        if (self.is_empty()):
            return None
        return self.items[self.lowest_count]
    
    def is_empty(self): 
        return self.count - self.lowest_count == 0
    
    def size(self):
        return self.count - self.lowest_count
    
    def clear(self):
        self.items = {}
        self.count = 0
        self.lowest_count = 0

    def to_string(self):
        if (self.is_empty()):
            return ""
        obj_string = f"{self.items[self.lowest_count]}"
        for i in range(self.lowest_count + 1, self.count):
            obj_string = f"{obj_string}, {self.items[i]}"
        return obj_string
    
queue = Queue()
print(queue.is_empty()) # True

queue.enqueue("John")
queue.enqueue("Jack")
print(queue.to_string()) # John, Jack

queue.enqueue("Camila")

print(queue.to_string()) # John, Jack, Camila
print(queue.size()) # 3
print(queue.is_empty()) # False
queue.dequeue() # remove John
queue.dequeue() # remove Jack
print(queue.to_string()) # Camila

queue.clear()
print(queue.is_empty()) # True