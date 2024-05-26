function getNeighbors(row, col, rows, cols, maze, visited) {
  const directions = [
    [1, 0],
    [0, 1],
    [-1, 0],
    [0, -1]
  ];

  const neighbors = [];

  for (let [dr, dc] of directions) {
    const neighborRow = row + dr;
    const neighborCol = col + dc;

    if (
      neighborRow >= 0 &&
      neighborRow < rows &&
      neighborCol >= 0 &&
      neighborCol < cols &&
      maze[neighborRow][neighborCol] === 0
    ) {
      neighbors.push([neighborRow, neighborCol]);
    }
  }

  return neighbors;
}

function findShortestPathBinaryMaze(maze) {
  const rows = maze.length;
  const cols = maze[0].length;

  const queue = [[0, 0, 1]];

  const visited = new Set(`0,0`);

  if (maze[0][0] === 1 || maze[rows - 1][cols - 1] === 1) return -1;

  while (queue.length > 0) {
    const [row, col, distance] = queue.shift();

    if (row === rows - 1 && col === cols - 1) return distance;

    const neighbors = getNeighbors(row, col, rows, cols, maze);

    for (let [neighborRow, neighborCol] of neighbors) {
      if (!visited.has(`${neighborRow},${neighborCol}`)) {
        queue.push([neighborRow, neighborCol, distance + 1]);
        visited.add(`${neighborRow},${neighborCol}`);
      }
    }
  }

  return -1;
}

const maze = [
  [0, 1, 0, 0, 0],
  [0, 1, 0, 1, 0],
  [0, 0, 0, 0, 0],
  [0, 1, 1, 1, 0],
  [0, 0, 0, 1, 0]
];

let shortestPath = findShortestPathBinaryMaze(maze);
console.log("Shortest path length:", shortestPath); // Shortest path length: 9

const mazeWithoutPath = [
  [0, 1, 0, 0, 0],
  [0, 1, 0, 1, 0],
  [0, 1, 0, 0, 0],
  [0, 1, 1, 1, 0],
  [0, 0, 0, 1, 0]
];
console.log(
  "Shortest path length",
  findShortestPathBinaryMaze(mazeWithoutPath)
); // Shortest path length: -1
