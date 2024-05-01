import React, { useEffect, useState} from 'react'
import "./admin.css";
import { Link, useNavigate } from 'react-router-dom';
import  axios  from 'axios';
const Admin = () => {
const nav=useNavigate();
    const gostock=()=>{
        nav("/stock");
    }
    const goCustomer=()=>{
        nav("/customers");
    }
    const goSupplier=()=>{
        nav("/suppliers");
    }
    const goHistory=()=>{
        nav("/history")
    }
  
    useEffect(()=>{
        
        getOrders();
    
      },[])
    
      
      const[order,setOrder]=useState([]);
    
     
      const getOrders=async()=>{
       const orde= await axios.get("http://localhost:8080/getOrders");
       setOrder(orde.data);
        
      }
      
    
    
      return (
        <div className='main1 mpage'>
            <h1 className='boss'>Welcome Boss</h1>
    <div className='page'>
        <h2 className='container1'>Orders</h2>
        <table className="table border shadow my-3 taback" >
            <tr>
                <th>Customer Id</th>
                <th>Product</th>
                <th>Quantity</th>
                <th>Date</th>
            </tr>
            {order.map((product)=>(<tr>
                <td>{product.dealer_id}</td>
                <td>{product.product}</td>
                <td>{product.quantity}</td>
                <td>{product.date_of_order}</td>
            </tr>))}
            
            
        </table>
    </div>
    <div className='page rigth'>
    <div className='xx stock0'><button>###</button></div>
    <div className='xx ustomer0'><button>###</button></div>
    <div className='xx supplier0'><button>###</button></div>
    <div className='xx history0'><button>###</button></div>

    <button className='zzz stock' onClick={()=>gostock()}>Goto Stocks</button>
    <button className='zzz customer' onClick={()=>goCustomer()}>Customer</button>
    <button className='zzz supplier' onClick={()=>goSupplier()}>Supplier</button>
    <button className='zzz history' onClick={()=>goHistory()}>History</button></div>
            
           </div>
  )
}

export default Admin
