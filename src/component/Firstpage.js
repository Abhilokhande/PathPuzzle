import React from 'react'
import { Link } from 'react-router-dom';
export default function Firstpage() {
    const buttonStyle = {
        fontSize: '16px',
        padding:"8px",
        backgroundColor: 'black',
        color: 'White',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        transition: 'background-color:red'
      };
  return (
    <div>
      <nav className="navbar bg-body-tertiary">
       <div className="container-fluid">
      <a className="navbar-brand" href="#" >
       <img src={process.env.PUBLIC_URL + 'Image/A.jpg'} alt="Logo" width="30" height="24" className="d-inline-block align-text-top"/>
        *Algorithm
       </a>
     </div>
      </nav>
      <div className="card text-bg-dark">
  <img src={process.env.PUBLIC_URL + 'Image/Ai.jpg'} className="card-img" alt="..."/>
  <div className="card-img-overlay">
  <div style={{ maxWidth: '800px', margin: '0 auto', padding: '20px',color:'white'}}>
      <h2 style={{color:'red',fontWeight: 'bold',fontSize:'50px'}}>A* Algorithm Overview</h2>
      <div style={{ fontSize: '16px', lineHeight: '1.6', textAlign: 'left' }}>
        <h3 style={{color:'yellow' ,fontWeight: 'bold'}}>Introduction</h3>
        <p>The A* algorithm is a widely used pathfinding algorithm that efficiently finds the shortest path between two points in a graph. It considers both the cost of reaching a node and an estimated cost to the destination.</p>
        
        <h3 style={{color:'yellow' ,fontWeight: 'bold'}}>Key Components</h3>
        <ul style={{ marginLeft: '20px' }}>
          <li><strong>Heuristic Function (h):</strong> Estimates cost from a node to the goal.</li>
          <li><strong>Cost Function (g):</strong> Actual cost of reaching a node from the start.</li>
          <li><strong>Evaluation Function (f):</strong> Total cost (g + h) guiding the search.</li>
        </ul>
        
        <h3 style={{color:'yellow' ,fontWeight: 'bold'}}>Algorithm Steps</h3>
        <ol style={{ marginLeft: '20px' }}>
          <li>Initialization:</li>
          <ul>
            <li>Open List: Start with the starting node in an open list.</li>
            <li>Closed List: Initialize an empty closed list.</li>
            <li>Node Representation: Each node contains position, cost to reach (g), estimated cost to goal (h), and total cost (f = g + h).</li>
          </ul>
          <li>Algorithm Steps:</li>
          <ul>
            <li>While the open list is not empty:</li>
            <li>Select the node with the lowest f value as the current node.</li>
            <li>If the current node is the goal, terminate and reconstruct the path.</li>
            <li>Move the current node from the open list to the closed list.</li>
            <li>Explore neighbors:</li>
            <ul>
              <li>Ignore unwalkable or already explored neighbors.</li>
              <li>Add new neighbors to the open list if not present, updating their costs if necessary.</li>
            </ul>
          </ul>
          <li>Path Reconstruction:</li>
          <ul>
            <li>If the goal is reached, trace back from the goal node to the start using parent pointers.</li>
          </ul>
        </ol>
        
        <h3 style={{color:'yellow' ,fontWeight: 'bold'}}>Benefits and Limitations</h3>
        <p>By balancing node costs and estimated goal costs, A* efficiently navigates graphs to find optimal paths, making it essential in various applications. However, it has limitations such as memory usage and reliance on the quality of the heuristic function.</p>
      </div>
    </div>
     </div>
</div>
    </div>
  )
}

