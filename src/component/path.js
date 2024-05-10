import React from 'react'
import { Link, BrowserRouter as Router } from 'react-router-dom';
export default function path() {
  return (<div>
     <nav className="navbar bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">
      <img src={process.env.PUBLIC_URL + 'Image/A.jpg'} alt="Logo" width="30" height="24" className="d-inline-block align-text-top" />
      *Algorithm
    </a>
  </div>
</nav>
    <div style={{margin:'30px',marginBottom:'50px'}}>
      <div id="carouselExampleFade" class="carousel slide carousel-fade">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img  src={process.env.PUBLIC_URL + 'Image/12.jpg'} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img  src={process.env.PUBLIC_URL + 'Image/1.jpg'} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img  src={process.env.PUBLIC_URL + 'Image/2.jpg'} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img  src={process.env.PUBLIC_URL + 'Image/3.jpg'} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item ">
      <img  src={process.env.PUBLIC_URL + 'Image/4.jpg'} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img  src={process.env.PUBLIC_URL + 'Image/5.jpg'} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img  src={process.env.PUBLIC_URL + 'Image/6.jpg'} class="d-block w-100"  alt="..."/>
      <Link type="button" class="btn btn-primary" to={{pathname:'/Aiplay'}}>Apply</Link>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div></div>
    </div>
  )
}
