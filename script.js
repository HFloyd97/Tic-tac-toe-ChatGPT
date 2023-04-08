const cells = document.querySelectorAll('.cell');
const status = document.querySelector('#status');
const reset = document.querySelector('#reset');

let currentPlayer = 'X';
let gameEnded = false;

cells.forEach(cell => {
  cell.addEventListener('click', () => {
    if (gameEnded || cell.textContent !== '') {
      return;
    }
    cell.textContent = currentPlayer;
    checkGameStatus();
    switchPlayer();
  });
});

reset.addEventListener('click', () => {
  cells.forEach(cell => {
    cell.textContent = '';
  });
  currentPlayer = 'X';
  gameEnded = false;
  status.textContent = "Player 1's turn (X)";
});

function checkGameStatus() {
  const winPatterns = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // rows
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // columns
    [0, 4, 8], [2, 4, 6] // diagonals
  ];
  for (let pattern of winPatterns) {
    const [a, b, c] = pattern;
    if (cells[a].textContent === currentPlayer &&
        cells[b].textContent === currentPlayer &&
        cells[c].textContent === currentPlayer) {
      status.textContent = `${currentPlayer} wins!`;
      gameEnded = true;
      return;
    }
  }
  if (Array.from(cells).every(cell => cell.textContent !== '')) {
   
