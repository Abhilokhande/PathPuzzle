import React, { useState } from 'react';

const AStarAlgorithmVisualization = () => {
  const ROWS = 10;
  const COLS = 10;

  const [grid, setGrid] = useState(() => {
    const initialGrid = [];
    for (let i = 0; i < ROWS; i++) {
      initialGrid.push(Array.from({ length: COLS }, () => 'empty'));
    }
    return initialGrid;
  });

  const [startNode, setStartNode] = useState({ x: null, y: null });
  const [goalNode, setGoalNode] = useState({ x: null, y: null });

  const setNode = (row, col) => {
    if (startNode.x === null && grid[row][col] !== 'obstacle') {
      setStartNode({ x: col, y: row });
      grid[row][col] = 'start';
    } else if (goalNode.x === null && grid[row][col] !== 'obstacle' && (col !== startNode.x || row !== startNode.y)) {
      setGoalNode({ x: col, y: row });
      grid[row][col] = 'goal';
    } else if (grid[row][col] !== 'start' && grid[row][col] !== 'goal') {
      grid[row][col] = grid[row][col] === 'obstacle' ? 'empty' : 'obstacle';
    }
    setGrid([...grid]);
  };

  const startAStar = () => {
    if (startNode.x === null || goalNode.x === null) {
      alert('Please set both start and goal nodes.');
      return;
    }

    const openList = [];
    const closedList = [];

    const startNodeObj = { x: startNode.x, y: startNode.y, g: 0, h: 0, f: 0, parent: null };
    const goalNodeObj = { x: goalNode.x, y: goalNode.y };

    openList.push(startNodeObj);

    while (openList.length > 0) {
      let currentNode = openList[0];
      let currentIndex = 0;
      for (let i = 1; i < openList.length; i++) {
        if (openList[i].f < currentNode.f) {
          currentNode = openList[i];
          currentIndex = i;
        }
      }

      openList.splice(currentIndex, 1);
      closedList.push(currentNode);

      if (currentNode.x === goalNodeObj.x && currentNode.y === goalNodeObj.y) {
        let path = [];
        let current = currentNode;
        while (current !== null) {
          path.push({ x: current.x, y: current.y });
          current = current.parent;
        }
        path.reverse();
        visualizePath(path);
        return;
      }

      const neighbors = [];
      const directions = [[-1, 0], [1, 0], [0, -1], [0, 1]];
      for (let dir of directions) {
        const neighborX = currentNode.x + dir[0];
        const neighborY = currentNode.y + dir[1];
        if (neighborX >= 0 && neighborX < COLS && neighborY >= 0 && neighborY < ROWS && grid[neighborY][neighborX] !== 'obstacle') {
          neighbors.push({ x: neighborX, y: neighborY });
        }
      }

      for (let neighbor of neighbors) {
        if (closedList.find(node => node.x === neighbor.x && node.y === neighbor.y)) {
          continue;
        }

        const gScore = currentNode.g + 1;
        const hScore = Math.abs(neighbor.x - goalNodeObj.x) + Math.abs(neighbor.y - goalNodeObj.y);
        const fScore = gScore + hScore;

        const openNode = openList.find(node => node.x === neighbor.x && node.y === neighbor.y);
        if (openNode && gScore >= openNode.g) {
          continue;
        }

        const neighborObj = { x: neighbor.x, y: neighbor.y, g: gScore, h: hScore, f: fScore, parent: currentNode };
        if (!openNode) {
          openList.push(neighborObj);
        } else {
          openNode.g = gScore;
          openNode.f = fScore;
          openNode.parent = currentNode;
        }
      }
    }

    alert('No path found.');
  };

  const visualizePath = (path) => {
    let delay = 100;
    path.forEach((node, index) => {
      setTimeout(() => {
        const newGrid = grid.slice();
        newGrid[node.y][node.x] = 'path';
        setGrid(newGrid);
      }, delay * index);
    });
  };

  const resetGrid = () => {
    setGrid((prevGrid) => {
      const newGrid = prevGrid.map((row) => row.map(() => 'empty'));
      return newGrid;
    });
    setStartNode({ x: null, y: null });
    setGoalNode({ x: null, y: null });
  };

  return (
    <div>
       <nav className="navbar bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img src={process.env.PUBLIC_URL + 'Image/A.jpg'} alt="Logo" width="30" height="24" className="d-inline-block align-text-top" />
            *Algorithm
          </a>
        </div>
      </nav>
      <div class="card text-bg-dark">
        <img src={process.env.PUBLIC_URL + 'Image/Ai1.jpg'} class="card-img" alt="..." />
        <div class="card-img-overlay">
          <h1>A* Algorithm Visualization</h1>



          <div style={{ display: 'inline-grid', gridTemplateColumns: 'repeat(10, 50px)', gridGap: '1px', marginTop: '20px' }}>
            {grid.map((row, rowIndex) => (
              row.map((cell, colIndex) => (
                <div
                  key={`${rowIndex}-${colIndex}`}
                  style={{
                    width: '50px',
                    height: '50px',
                    backgroundColor: cell === 'start' ? '#00f' : cell === 'goal' ? '#f00' : cell === 'obstacle' ? '#000' : cell === 'path' ? 'yellow' : '#ddd',
                    border: '1px solid #999',
                    transition: 'background-color 0.3s',
                  }}
                  onClick={() => setNode(rowIndex, colIndex)}
                ></div>
              ))
            ))}
          </div><br />
          <button type="button" class="btn btn-danger" style={{ margin: '20px' }} onClick={startAStar}>Start</button>
          <button type="button" class="btn btn-warning" onClick={resetGrid}>Reset</button><br />
        </div>
      </div>
    </div>
  );
};

export default AStarAlgorithmVisualization;
