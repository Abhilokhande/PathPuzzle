import React, { useRef } from 'react';
import './main.css';
import { Link, BrowserRouter as Router } from 'react-router-dom';
const About = () => {
  const videoRef = useRef(null);

  const handlePlayVideo = () => {
    const video = videoRef.current;
    if (video) {
      video.play().catch(error => console.error('Failed to play video:', error));
    }
  };
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
          <a className="navbar-brand" href="#">
            <img src={process.env.PUBLIC_URL + 'Image/A.jpg'} alt="Logo" width="30" height="24" className="d-inline-block align-text-top" />
            *Algorithm
          </a>
        </div>
      </nav>
      <div className="card text-bg-dark" onClick={handlePlayVideo}>
        <video ref={videoRef} autoPlay loop className="card-img" controls>
          <source src={process.env.PUBLIC_URL + 'Image/Ai3.mp4'} type="video/mp4" />
          
        </video>
        <div className="card-img-overlay">
        <h5 className="card-title" style={{ color: 'Red', fontSize: '70px', fontWeight: 'bold' }}>A* Algorithm </h5>

<br/><br/>
<p className="card-text" style={{ color: 'black', fontSize: '30px', fontWeight: 'bold' }}>"To understand and analyze the A* algorithm's application in pathfinding<br/> and its efficiency compared to other pathfinding algorithms."</p><br/>
<p className="card-text" style={{ color: 'black', fontSize: '30px', fontWeight: 'bold' }}>This aim sets the stage for exploring the A* algorithm's principles, its implementation, <br/>and its performance characteristics, with a focus on its practical applications in real-world scenarios.</p>
<Link type="button" class="btn btn-danger" to={{pathname:'/firstpage'}} style={{margin:'20px'}}>Explore</Link>
<Link type="button" class="btn btn-primary" to={{pathname:'/path'}} style={{margin:'20px'}}>Usage</Link>
</div>
      </div>
      
    </div>
  );
};

export default About;
