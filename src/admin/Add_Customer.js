import axios from 'axios'
import React, { useState } from 'react'
import { Link, } from 'react-router-dom'
import {useNavigate}from'react-router-dom'

const Add_Customer = () => {

    const nav=useNavigate();
    const[newDealer,setDealer]=useState({
        deal_Name:"",
        store:"",
        contact:"",
        location:""
        });

        const{deal_Name,store,contact,location}=newDealer;


    const onInput=(e)=>{
      
        setDealer({...newDealer,[e.target.name]:e.target.value});
    }

    const addDealer=async(e)=>{
      e.preventDefault();
        await axios.post("http://localhost:8080/addDealer",newDealer);
        nav("/dealer");    
    }
    const back=()=>{
        nav("/customers")
      }

  return (
    <div className='main1'>
    <div className='mb-3'>
      <Link id="bbb"className='btn btn-primary' to={"/admin"}>Back</Link>
      <h1 className='add'>Add Customer</h1>
        
          <div className='container1'>
            

            <form onSubmit={(e)=>addDealer(e)}>
              <input type='text'className='inputx'placeholder='Name'name="deal_Name" value={deal_Name} onChange={(e)=>onInput(e)}></input>
              <input type='text'className='inputx'placeholder='Store'name="store" value={store} onChange={(e)=>onInput(e)}></input>
              <input type='text'className='inputx'placeholder='Contact'name="contact" value={contact} onChange={(e)=>onInput(e)}></input>
              <input type='text'className='inputx'placeholder='Location'name="location" value={location} onChange={(e)=>onInput(e)}></input>
              
              
              <button type="submit" className='btn btn-outline-primary bottu'>submit</button>
              <button className='btn btn-outline-danger mx-3 bottu' onClick={()=>back()} >cancel</button>
            </form>
          </div>
        </div></div>
      
  )
}

export default Add_Customer
