function getKnightMoves(chessboard, row, col) {
  const directions = [
    [2, 1],
    [1, 2],
    [-1, 2],
    [-2, 1],
    [-2, -1],
    [-1, -2],
    [1, -2],
    [2, -1]
  ];
  const moves = [];

  for (let [dr, dc] of directions) {
    const moveRow = row + dr;
    const moveCol = col + dc;
    if (
      moveRow >= 0 &&
      moveRow < chessboard.length &&
      moveCol >= 0 &&
      moveCol < chessboard[0].length
    ) {
      moves.push([moveRow, moveCol]);
    }
  }

  return moves;
}

function findMinimumMoves(chessboard, start, target) {
  const queue = [[...start, 0]]; // (row, col, moveCount)
  const visited = new Set([`${start[0]},${start[1]}`]);

  while (queue.length > 0) {
    const [row, col, moveCount] = queue.shift();

    if (row === target[0] && col === target[1]) return moveCount;

    const moves = getKnightMoves(chessboard, row, col);
    for (let [moveRow, moveCol] of moves) {
      if (!visited.has(`${moveRow},${moveCol}`)) {
        queue.push([moveRow, moveCol, moveCount + 1]);
        visited.add(`${moveRow},${moveCol}`);
      }
    }
  }

  return -1; // If no path is found
}

const chessboardSize = 8; // 8x8 chessboard
const chessboard = Array.from({ length: chessboardSize }, () =>
  Array(chessboardSize).fill(0)
);
const start = [0, 0]; // starting position of the knight
const target = [7, 7]; // target position to reach
console.log(findMinimumMoves(chessboard, start, target)); // Outputs 6

const verySmallChessboardSize = 2;
const verySmallChessboard = Array.from(
  { length: verySmallChessboardSize },
  () => Array(verySmallChessboardSize).fill(0)
);
console.log(findMinimumMoves(verySmallChessboard, start, target)); // Outputs -1
