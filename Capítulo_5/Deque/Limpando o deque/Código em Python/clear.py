# Para limpar todos os elementos do deque, podemos chamar o método removeFront até que ele devolva undefined, ou podemos simplesmente reiniciar o valor das propriedades da classe Deque com os mesmos valores declarados em seu construtor:
class Deque:
    def __init__(self):
        self.count = 0
        self.lowest_count = 0
        self.items = {}

    def clear(self):
        self.items = {}
        self.count = 0
        self.lowest_count = 0
        