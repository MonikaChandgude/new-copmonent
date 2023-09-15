import React from 'react'
import { MiddleItem } from './MiddleItem'


export const Middle = (props) => {
  return (
  <div className="container">
     <h3 className='text-center my-3'>ToDos List</h3>
     {props.todos.length===0? "No todos to display":
     props.todos.map((todo)=>{
         return   <MiddleItem todo={todo} key={todo.sno} onDelete={props.onDelete}/>

     })
     }
    
     </div>
  )
}
