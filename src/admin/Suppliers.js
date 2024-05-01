import React from 'react'
import { Link } from 'react-router-dom'

const Suppliers = () => {
  return (
    <div className='container1'>
        <h1 id="hhh">Supplier</h1>
    <Link id="bbb"className='btn btn-primary' to={"/Add_Supplier"}>Add_Supplier</Link>
    <table className="table border shadow my-3">
<thead>
  <tr>
    <th scope="col">Supplier_Id</th>
    <th scope="col">Name</th>
    <th scope="col">product</th>
    <th scope="col">Contact</th>
    <th scope='col'>Location</th>
  </tr>
</thead>
<tbody>
 
  <tr>
    <th scope="row">Supplier_Id</th>
    <td>sgvd</td>
    <td>kjdbejne</td>
    <td>hewbe</td>
    <td>hewbe</td>
     
    
  </tr>
</tbody>
</table> 
      
    </div>
  )
}

export default Suppliers
