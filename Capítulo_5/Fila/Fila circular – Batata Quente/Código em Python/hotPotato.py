# Classe Queue
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
    
# Simulação do jogo de Batata Quente:
def hotPotato(elements_list, num):
    queue = Queue() # Usa a classe Queue
    eliminated_list = []
    for i in range(0, len(elements_list)):
        queue.enqueue(elements_list[i]) # Obtém uma lista de nomes e enfileira todos eles
    
    while (queue.size() > 1):
        for i in range(0, num):
            queue.enqueue(queue.dequeue()) # Removemos um item do início da fila e o adicionamos no final para simular a batata quente
        eliminated_list.append(queue.dequeue()) # Uma vez que o número for alcançado, a pessoa que tiver a batata quente será eliminada
    
    return {
        "eliminated": eliminated_list,
        "winner": queue.dequeue() # Quando restar apenas uma pessoa, ela será declarada a vencedora
    }

# Funçao gerar um valor aleátorio:
from random import randint

def random_number(min = 7, max = 50):
    return randint(min, max)

# Podemos usar o código a seguir para testar o algoritmo hotPotato:
names = ["John", "Jack", "Camila", "Ingrid", "Carl"]
num = random_number() # Adquire um número aleátorio

# Obtém o nome das pessoas eliminadas e o vencendor
result = hotPotato(names, num)

for name in result["eliminated"]:
    print(f"{name} was eliminated from the Hot Potato game.")

print(f"The winner is {result["winner"]}")
