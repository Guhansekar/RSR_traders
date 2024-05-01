import React from 'react'
import { Link } from 'react-router-dom'

const Add_Supplier = () => {
  return (
    <div className='main1'>
        
        <div className='mb-3'><h1 className='add'>Add Supplier</h1>
      
       
          <Link id="bbb"className='btn btn-primary my-2' to={"/admin"}>Back</Link>

          <form>
            <input type='text'className='inputx'placeholder='Supplier_Name'name="stockName"></input>
            <input type='text'className='inputx'placeholder='Product'name="mrp" ></input>
            <input type='text'className='inputx'placeholder='Contact'name="Contact"></input>
            <input type='text'className='inputx'placeholder='Location'name="supplier"></input>
            
            
            <button type="submit" className='btn btn-outline-primary bottu'>submit</button>
            <button className='btn btn-outline-danger mx-3 bottu'>cancel</button>
          </form>
        </div>
      </div>
    
  )
}

export default Add_Supplier
