# Algoritmo sudoku_solver
def sudoku_solver(matrix):
    if solve_sudoku(matrix) == True:
        return matrix
    
    return "NO SOLUTION EXISTS!"



# Função solve_sudoku
def solve_sudoku(matrix):
    # Variável UNASSIGNED
    UNASSIGNED = 0
    row = col = 0
    check_blank_spaces = False
    for row in range(len(matrix)):
        for col in range(len(matrix[row])):
            if matrix[row][col] == UNASSIGNED:
                check_blank_spaces = True
                break
        
        if check_blank_spaces == True:
            break

    if check_blank_spaces == False:
        return True
    
    for num in range(1, 10):
        if is_safe(matrix, row, col, num):
            matrix[row][col] = num
            if solve_sudoku(matrix):
                return True
            
            matrix[row][col] = UNASSIGNED

    return False

# Função is_safe
def is_safe(matrix, row, col, num):
    return (
        not use_in_row(matrix, row, num) and
        not use_in_col(matrix, col, num) and
        not use_in_box(matrix, row - (row % 3), col - (col % 3), num)
    )

# Função use_in_row
def use_in_row(matrix, row, num):
    for col in range(len(matrix)):
        if matrix[row][col] == num:
            return True
    
    return False

# Função use_in_col
def use_in_col(matrix, col, num):
    for row in range(len(matrix)):
        if matrix[row][col] == num:
            return True
        
    return False

# Função use_in_box
def use_in_box(matrix, box_start_row, box_start_col, num):
    for row in range(3):
        for col in range(3):
            if matrix[row + box_start_row][col + box_start_col] == num:
                return True
    
    return False

# Testando o algoritmo sudokuSolver
sudoku_grid = [
    [5, 3, 0, 0, 7, 0, 0, 0, 0],
    [6, 0, 0, 1, 9, 5, 0, 0, 0],
    [0, 9, 8, 0, 0, 0, 0, 6, 0],
    [8, 0, 0, 0, 6, 0, 0, 0, 3],
    [4, 0, 0, 8, 0, 3, 0, 0, 1],
    [7, 0, 0, 0, 2, 0, 0, 0, 6],
    [0, 6, 0, 0, 0, 0, 2, 8, 0],
    [0, 0, 0, 4, 1, 9, 0, 0, 5],
    [0, 0, 0, 0, 8, 0, 0, 7, 9],
]

print(sudoku_solver(sudoku_grid))

"""
 [[5, 3, 4, 6, 7, 8, 9, 1, 2],
 [6, 7, 2, 1, 9, 5, 3, 4, 8],
 [1, 9, 8, 3, 4, 2, 5, 6, 7],
 [8, 5, 9, 7, 6, 1, 4, 2, 3],
 [4, 2, 6, 8, 5, 3, 7, 9, 1],
 [7, 1, 3, 9, 2, 4, 8, 5, 6],
 [9, 6, 1, 5, 3, 7, 2, 8, 4],
 [2, 8, 7, 4, 1, 9, 6, 3, 5],
 [3, 4, 5, 2, 8, 6, 1, 7, 9]]
"""
