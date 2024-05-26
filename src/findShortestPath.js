//     1
//    / \
//   2   3
//  / \ / \
// 4   5   6
//      |
//      7

const graph = [[], [2, 3], [1, 4, 5], [1, 5, 6], [2], [2, 3, 7], [3], [5]];

function findShortestPath(graph, source, destination) {
  let queue = [[source]];
  let visited = new Set([source]);

  while (queue.length > 0) {
    let path = queue.shift();
    let node = path[path.length - 1];

    if (node === destination) {
      return path;
    }

    for (let neighbor of graph[node]) {
      if (!visited.has(neighbor)) {
        visited.add(neighbor);
        queue.push([...path, neighbor]);
      }
    }
  }

  return null;
}

let path = findShortestPath(graph, 4, 7);
console.log("Shortest path from 4 to 7:", path); // Logs [ 4, 2, 5, 7 ]
