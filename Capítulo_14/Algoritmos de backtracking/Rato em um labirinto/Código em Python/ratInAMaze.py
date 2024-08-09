# Algoritmo rat_in_a_maze
def rat_in_a_maze(maze):
    solution = []
    for i in range(len(maze)):
        solution.append([0] * len(maze[i]))
    
    if find_path(maze, 0, 0, solution) == True:
        return solution
    
    return "NO PATH FOUND"

# Função find_path
def find_path(maze, x, y, solution):
    n =  len(maze)
    if x == n - 1 and y == n - 1:
        solution[x][y] = 1
        return True
    
    if is_safe(maze, x, y) == True:
        solution[x][y] = 1
        if find_path(maze, x + 1, y, solution):
            return True
        if find_path(maze, x, y + 1, solution):
            return True
        solution[x][y] = 0
        return False
    
# Função is_safe
def is_safe(maze, x, y):
    n = len(maze)
    if x >= 0 and y >= 0 and x < n and y < n and maze[x][y] != 0:
        return True
    
    return False

# Testando algoritmo ratInAMaze
maze = [
    [1, 0, 0, 0],
    [1, 1, 1, 1],
    [0, 0, 1, 0],
    [0, 1, 1, 1],
]

print(rat_in_a_maze(maze))

"""
 [[1, 0, 0, 0],
 [1, 1, 1, 0],
 [0, 0, 1, 0],
 [0, 0, 1, 1]]
"""