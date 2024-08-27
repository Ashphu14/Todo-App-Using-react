import React from 'react'
import tick from '../assets/tick.png'
import not_tick from '../assets/not_tick.png'
import delete_icon from '../assets/delete.png'
import todo_icon from '../assets/todo_icon.png'

const TodoItems = ({ text, id, isCompleted, toggleComplete, deleteTodo }) => {
  return (
    <div className='flex items-center my-3 gap-2'>
       <img src={todo_icon} alt='Task Icon' className='w-7 h-7' />
      <div className='flex flex-1 items-center cursor-pointer' onClick={() => toggleComplete(id)}>
        <img src={isCompleted ? tick : not_tick} alt={isCompleted ? 'Completed' : 'Not Completed'} className='w-7'/>
        <p className={`ml-4 text-[17px] ${isCompleted ? 'line-through text-slate-400' : 'text-slate-700'}`}>
          {text}
        </p>
      </div>

      <img 
        onClick={() => deleteTodo(id)} 
        src={delete_icon} 
        alt='Delete' 
        className='w-3.5 cursor-pointer' 
      />
    </div>
  )
}

export default TodoItems
