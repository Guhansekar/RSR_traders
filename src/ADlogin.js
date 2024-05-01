import React from 'react'
import "./adlog.css"
import { Link,useNavigate} from 'react-router-dom'

const ADlogin = () => {
  const nav=useNavigate();

const log=()=>{
  const name=document.getElementById("adname").value;
  const pass=document.getElementById("adpass").value;
  
  if(pass=="admin"){
   nav("/admin");
  }
  else{
    alert("Wrong Password");
  }

}


  return (
    <div className='main1'>
    <div className='adcontainer'>
        <h2 className='adminh2'>Admin Login</h2>
        <input type="text"id="adname" className='input' placeholder='Your Name'></input>
        <input type="password" id="adpass" className='input' placeholder='your password'></input>
        <button className='btn1' onClick={()=>log()}>login</button>
        <Link className='btn1 can' to="/">cancel</Link>
      
    </div>
    </div>
  )
}

export default ADlogin
