const board = [
    ['', '', ''],
    ['', '', ''],
    ['', '', '']
  ];
  
  let currentPlayer = 'X';
  
  function makeMove(row, col) {
    if (board[row][col] === '') {
      board[row][col] = currentPlayer;
      updateBoard();
      
      if (checkWinner(row, col)) {
        alert(currentPlayer + ' wins!');
        resetBoard();
      } else if (isBoardFull()) {
        alert('It\'s a draw!');
        resetBoard();
      } else {
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
      }
    }
  }
  
  function updateBoard() {
    const cells = document.querySelectorAll('.cell');
    let i = 0;
    for (const row of board) {
      for (const cell of row) {
        cells[i].textContent = cell;
        i++;
      }
    }
  }
  
  function checkWinner(row, col) {
    // Check row
    if (board[row][0] === currentPlayer && board[row][1] === currentPlayer && board[row][2] === currentPlayer) {
      return true;
    }
    
    // Check column
    if (board[0][col] === currentPlayer && board[1][col] === currentPlayer && board[2][col] === currentPlayer) {
      return true;
    }
    
    // Check diagonals
    if (board[0][0] === currentPlayer && board[1][1] === currentPlayer && board[2][2] === currentPlayer) {
      return true;
    }
    
    if (board[0][2] === currentPlayer && board[1][1] === currentPlayer && board[2][0] === currentPlayer) {
      return true;
    }
    
    return false;
  }
  
  function isBoardFull() {
    for (const row of board) {
      for (const cell of row) {
        if (cell === '') {
          return false;
        }
      }
    }
    return true;
  }
  
  function resetBoard() {
    for (let row = 0; row < 3; row++) {
      for (let col = 0; col < 3; col++) {
        board[row][col] = '';
      }
    }
    updateBoard();
  }