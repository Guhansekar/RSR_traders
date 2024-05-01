import React from 'react'
import './RSRcss.css';
import { Link } from 'react-router-dom';

const RSRHome = () => {
  return (
    <div className="main">
    <div className="img">
        <p>When Inventories contain a surplus of product,it creates a distribution to the overall flow and knoks the supply-deand balanve out of orders.</p>
    </div>
    <div className="login">
        <h1 className='h'>-Login-</h1>
       
        <Link className="admin" to={"/adlogin"}>Only Admin</Link>
        <div className="cost">Go To Order</div>
        
        <div className="addnew">Request Retailer</div>

    </div>
</div>
  )
}

export default RSRHome
