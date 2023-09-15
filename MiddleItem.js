import React from 'react'


export const MiddleItem = (todo) => {
 return (
    <div>
      {/* {console.log(todo)} */}
        <h4>{todo.todo.Name}</h4>
        <p>{todo.todo.discription}</p> 
        <button className="btn btn-sm btn-danger" onClick={()=>{todo.onDelete(todo.todo)}}>Delete</button>
       


    </div>
  )
}
