import React from 'react'
import {Link}from "react-router-dom"
import "./nav.css"

const Nav = () => {
  return (
    <div className="nav">
        <div className="logo"> <Link to="/">RSR Traders</Link></div>
            <ul>
                <li><Link className="link" to={""}>Order</Link></li>
                <li><Link className="link" to={""}>History</Link></li>
                <li><Link className="link" to={""}>About</Link></li>
            </ul>
        
    </div>
  )
}

export default Nav
