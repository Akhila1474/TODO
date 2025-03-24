import React from 'react'
import { useState } from 'react'
import axios from 'axios';
import './Head.css';
function Head() {
  const [task,setTask]=useState(" ");
  const handleAdd=()=>{
   axios.post('http://localhost:3001/add',{task:task})
   .then((result)=>{console.log(result)
    location.reload();
   })
   .catch((err)=>{console.log(err)})
  }
  return (
    <>
    <div className='header'>
       <h3>TODO LIST APP</h3>
  <label htmlFor="taskInput"></label>
  <input type="text" name="task" id="taskInput"  onChange={(e)=>{setTask(e.target.value)}}/>
  <button onClick={handleAdd} className='button'>ADD</button>
</div>
</>
  )
}

export default Head