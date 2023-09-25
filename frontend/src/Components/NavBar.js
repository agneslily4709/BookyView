import React from 'react'
import {Link} from 'react-router-dom';
import {FaPlusSquare} from 'react-icons/fa';
const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg py-3 navbar-light fixed-top" style={{backgroundColor: "navy"}}>
    <div className="container">
        <h1 className="navbar-brand text-white">BOOKYVIEW</h1>
        <button className="navbar-toggler btn btn-outline-primary"style={{backgroundColor:"white"}}><Link className="nav-link" to="/createView">Add Review  <FaPlusSquare size={20}/></Link></button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <button className="btn btn-outline-primary" style={{backgroundColor:"white"}}><Link className="nav-link" to="/createView">Add Review  <FaPlusSquare size={20}/></Link></button>
        </ul>
        </div>
    </div>
    </nav>
  )
}

export default NavBar