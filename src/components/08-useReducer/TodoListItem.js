
import React from 'react'

export const TodoListItem = ({todo ,index , handleToggle, handleDelette}) => {
    return (
                 
        <li

                key={todo.id}
                className= "list-group-item"
            >
            <p
                onClick = {()=>{handleToggle(todo.id)}}
                className= {`${todo.done && "complete" }`} //here complete is a class name, which toggle the sentence.
                > 
                {index + 1}.{todo.desc} 
            </p>
            <button
                onClick = {() => handleDelette (todo.id)}
                className = "btn btn-danger"
            >
            Borrar
            </button>

        </li>


        
    )
}
