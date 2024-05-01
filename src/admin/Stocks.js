import React, { useEffect, useState } from 'react'
import { Link ,useParams} from 'react-router-dom'
import axios from 'axios';


const Stocks = () => {

    const [stocks,setStocks]=useState([]);

    const {id}=useParams();
    

        useEffect(()=>{
          
        loadStock(); 
        console.log(stocks);
        },[]);

    const loadStock= async()=>{
     const result=await axios.get("http://localhost:8080/getStocks");
      setStocks(result.data);
    }

    const removeStock=async(id)=>{
      await axios.delete(`http://localhost:8080/deleteStock/${id}`)
      loadStock();

    }

  return (
    <div className='main1'>
    <div className='container1'>
      <h1 id="hhh">Stocks</h1>
      <Link id="bbb"className='btn btn-primary' to={"/Add_Stock"}>Add_Stocks</Link>
      <table className="table border shadow my-3">
  <thead>
    <tr>
      <th scope="col">ID</th>
      <th scope="col">StockName</th>
      <th scope="col">MRP</th>
      <th scope="col">Quantity</th>
      <th scope='col'>Supplier</th>
      <th scope='col'>Refilled</th>
      <th scope='col'>Action</th>
    </tr>
  </thead>
  <tbody>
    {
      stocks.map((stock)=>(
    <tr>
      <th scope="row">{stock.id}</th>
      <td>{stock.stockName}</td>
      <td>{stock.mrp}</td>
      <td>{stock.quantity}</td>
      <td>{stock.supplier}</td>
      <td>{stock.reFilled}</td>
      <td><button className='btn btn-danger' onClick={()=>removeStock(stock.id)}>Delete</button></td>
      
    </tr>))}
  </tbody>
</table>
    </div></div>
  )
}

export default Stocks
