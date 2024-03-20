import React from 'react'
import { CiEdit } from "react-icons/ci";
import { MdOutlineDangerous } from "react-icons/md";
import './Todolist.css'

const  Todolist = () => {
  return (
    <div className='list'>
      todo
      <div className="icons">
        <CiEdit className='icon'/>
        <MdOutlineDangerous className='icon'/>
      </div>
    </div>
  )
}

export default Todolist
