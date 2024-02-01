class Sudoku {
    constructor() {
        this.board = this.generateBoard();
    }

    generateBoard() {
        const board = [];
        const values = [1, 2, 3, 4, 5, 6, 7, 8, 9];

        for (let i = 0; i < 9; i++) {
            const row = [];
            for (let j = 0; j < 9; j++) {
                const randomIndex = Math.floor(Math.random() * values.length);
                const randomValue = values.splice(randomIndex, 1)[0];
                row.push(randomValue);
            }
            values.push(row.pop()); // Put the removed value back for the next row
            board.push(row);
        }

        this.shuffleRows(board);
        this.shuffleColumns(board);
        this.maskCells(board, 40); // Adjust the difficulty by changing the number of masked cells

        return board;
    }


    shuffleRows(board) {
        // ... (mismo código que antes)
    }

    shuffleColumns(board) {
        // ... (mismo código que antes)
    }

    maskCells(board, numCellsToMask) {
        // ... (mismo código que antes)
    }

    printBoard() {
        console.log('Sudoku Board:');
        for (let i = 0; i < 9; i++) {
            console.log(this.board[i].map(cell => (cell === null ? ' ' : cell)).join(' '));
        }
    }

    isBoardComplete() {
        for (let i = 0; i < 9; i++) {
            for (let j = 0; j < 9; j++) {
                if (this.board[i][j] === null) {
                    return false;
                }
            }
        }
        return true;
    }

    isValidMove(row, col, value) {
        // Check if the move is valid (no conflicts in the row, column, and 3x3 subgrid)
        for (let i = 0; i < 9; i++) {
            if (this.board[row][i] === value || this.board[i][col] === value) {
                return false;
            }
        }

        const subgridRow = Math.floor(row / 3) * 3;
        const subgridCol = Math.floor(col / 3) * 3;

        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                if (this.board[subgridRow + i][subgridCol + j] === value) {
                    return false;
                }
            }
        }

        return true;
    }

    makeMove(row, col, value) {
        if (this.isValidMove(row, col, value)) {
            this.board[row][col] = value;
            return true;
        } else {
            console.log('Invalid move. Try again.');
            return false;
        }
    }
}

function getUserInput(prompt) {
    const readline = require('readline-sync');
    return readline.question(prompt);
}

// Main game loop
function playSudoku() {
    const sudokuGame = new Sudoku();
    sudokuGame.printBoard();

    while (!sudokuGame.isBoardComplete()) {
        const row = parseInt(getUserInput('Enter row (1-9): '), 10) - 1;
        const col = parseInt(getUserInput('Enter column (1-9): '), 10) - 1;
        const value = parseInt(getUserInput('Enter value (1-9): '), 10);

        if (row >= 0 && row < 9 && col >= 0 && col < 9 && value >= 1 && value <= 9) {
            sudokuGame.makeMove(row, col, value);
            sudokuGame.printBoard();
        } else {
            console.log('Invalid input. Try again.');
        }
    }

    console.log('Congratulations! You solved the Sudoku!');
}

// Run the game
playSudoku();
