import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link ,useParams} from 'react-router-dom'

const Customers = () => {

const {id}=useParams();
  const[Dealers,setDealer]=useState([]);

  useEffect(()=>{
    loadDealer();

  },[])

  const loadDealer=async()=>{
  const result=await axios.get("http://localhost:8080/getDealers");
    setDealer(result.data);

  }
  const remove=async(id)=>{
    await axios.delete(`http://localhost:8080/removeDealer/${id}`);
    loadDealer();
  }

  

  return (
    <div className='main1'>
    <div className='container1'>
    <h1 id="hhh">Retailers</h1>
    <Link id="bbb"className='btn btn-primary' to={"/add_Customer"}>Add_Customer</Link>
    <table className="table border shadow my-3">
<thead>
  <tr>
    <th scope="col">Customer_Id</th>
    <th scope="col">Name</th>
    <th scope="col">Store</th>
    <th scope="col">Contact</th>
    <th scope='col'>Location</th>
    <th scope="col">Action</th>
  </tr>
</thead>
<tbody>
 {
  Dealers.map((dealer)=>(
  <tr>
    
    <th scope="row">{dealer.deal_Id}</th>
    <td>{dealer.deal_Name}</td>
    <td>{dealer.store}</td>
    <td>{dealer.contact}</td>
    <td>{dealer.location}</td>
    <td><button onClick={()=>remove(dealer.deal_Id)} className='btn btn-danger'>Delete</button></td>
     
    
  </tr>))}
</tbody>
</table> 
      
    </div></div>
  )
}

export default Customers
