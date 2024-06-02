const gameBoard = document.getElementById('gameBoard');
const cells = document.querySelectorAll('.cell');
const resetButton = document.getElementById('resetButton');
const message = document.getElementById('message');

let currentPlayer = 'X';
let board = Array(9).fill(null);

function handleClick(event) {
    const cell = event.target;
    const index = cell.getAttribute('data-index');

    if (board[index] !== null || checkWinner(board)) {
        return;
    }

    board[index] = currentPlayer;
    cell.textContent = currentPlayer;

    if (checkWinner(board)) {
        alert(`Player ${currentPlayer} wins!`);
        return;
    }

    if (board.every(cell => cell !== null)) {
        alert(`It's a draw!`);
        return;
    }
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
}

function checkWinner(board) {
    const winningCombinations = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    for (let combination of winningCombinations) {
        const [a, b, c] = combination;
        if (board[a] && board[a] === board[b] && board[a] === board[c]) {
            return true;
        }
    }

    return false;
}

function resetGame() {
    board.fill(null);
    cells.forEach(cell => (cell.textContent = ''));
    currentPlayer = 'X';
    message.textContent = '';
}

resetButton.addEventListener('click', resetGame);
gameBoard.addEventListener('click', handleClick);