import React from 'react'
import './Header.css'

const Task = ({title, description, deleteTask, index}) => {
  return (
    <div className='task'>
      <div>
        <p>{title}</p>
        <p className='description'>{description}</p>
      </div>
      <button className='btntask' onClick={() => deleteTask(index)}>-</button>
    </div>
  )
}

export default Task
