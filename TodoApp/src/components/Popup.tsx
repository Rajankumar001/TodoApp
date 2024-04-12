import React, { useState } from 'react';
import axios from 'axios';
import '../App.css'
import {RxCross1} from 'react-icons/rx';
import { baseURL } from '../utils/constant';
const Popup = ({setShowpopup,popupcontent,setUpdateUI}):any => {
    const [input,setInput]=useState(popupcontent.text);
    const updatetodo=()=>{
    axios.put(`${baseURL}/update/${popupcontent.id}`,{toDo:input}).then((res)=>{
      console.log(res.data);
      setUpdateUI((prevState:any)=>!prevState);
      setShowpopup(false);
    })
    }
  return (
    <div className='backdrop'>
    <div className="popup">
        <RxCross1 className='cross' onClick={()=>setShowpopup(false)} />
        <h2>Update a Todo</h2>
        <div className="popup__input_holder">
        <input
          type="text"
          placeholder="update a todo"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button  onClick={updatetodo}>Update</button>
        </div>
    </div>
    </div>
  )
}

export default Popup
