import axios  from 'axios';
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {useNavigate} from 'react-router-dom'

const Add_Stock = () => {
  const nav=useNavigate();
   const[newStock,setStock]=useState({
     
    stockName:"",
    mrp:"",
    quantity:"",
    supplier:""
     }
  );
 const{stockName,mrp,quantity,supplier,}=newStock;
 
  const onInput=(e)=>{
    setStock({...newStock,[e.target.name]:e.target.value})

  }
  const back=()=>{
    nav("/stock")
  }



  const addStock=async(e)=>{
    e.preventDefault();

    
    await axios.post("http://localhost:8080/addStock",newStock);
    nav("/");
  }
  return (
    <div className='main1'>
   
        <div className='mb-3'>
          <h1 className='add'>Add New Stock</h1>
        <Link id="bbb"className='btn btn-primary' to={"/admin "}>Back</Link>

            <form onSubmit={(e)=>addStock(e)}>
              <input type='text'className='inputx'placeholder='StockName'name="stockName"value={stockName} onChange={(e)=>onInput(e)}></input>
              <input type='text'className='inputx'placeholder='MRP'name="mrp" value={mrp}onChange={(e)=>onInput(e)}></input>
              <input type='text'className='inputx'placeholder='Quantity'name="quantity"value={quantity}onChange={(e)=>onInput(e)}></input>
              <input type='text'className='inputx'placeholder='Supplier'name="supplier"value={supplier}onChange={(e)=>onInput(e)}></input>
              
              
              <button type="submit" className='btn btn-primary bottu'>submit</button>
              <button  className='btn btn-outline-danger bottu' onClick={()=>back()}>cancel</button>
              
            </form>
          
    </div></div>
       
  )
}

export default Add_Stock
