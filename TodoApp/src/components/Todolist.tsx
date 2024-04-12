import React from 'react'
import { CiEdit } from "react-icons/ci";
import { MdOutlineDangerous } from "react-icons/md";
import './Todolist.css';
import { baseURL } from '../utils/constant';
import axios from 'axios';
interface TodoProps {
  id:string,
  text: string; 
  setPopupcontent:React.Dispatch<React.SetStateAction<any>>
  setShowpopup: React.Dispatch<React.SetStateAction<boolean>>;// Specify the type of 'text' as string
  setUpdateUI: React.Dispatch<React.SetStateAction<boolean>>;
}
const  Todolist: React.FC<TodoProps> = ({ text,id,setUpdateUI,setShowpopup,setPopupcontent}) => {
  const Tododelete=()=>{
    axios.delete(`${baseURL}/delete/${id}` )
        .then((res) => {
          console.log("Todo saved:", res.data);
          setUpdateUI((prevState)=>!prevState)
        })
        .catch((err) => {
          console.error("Error while saving todo:", err);
        });
  }
  const updateTodo=()=>{
    setPopupcontent({text,id})
    console.log("item clicked");
    setShowpopup(true)
  }
  return (
    <div className='list'>
    {text}
      <div className="icons">
        <CiEdit className='icon' onClick={updateTodo}/>
        <MdOutlineDangerous className='icon' onClick={Tododelete}/>
      </div>
    </div>
  )
}

export default Todolist
