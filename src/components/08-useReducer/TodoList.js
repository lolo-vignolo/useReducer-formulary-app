import React from 'react';
import { TodoListItem } from './TodoListItem';



export const TodoList = ({todos, handleToggle, handleDelette}) => {

    return (
            
            <ul className = "list-group list-group-flush">

            {
                todos.map((todo, i)=>(
                <TodoListItem 
                key = {todo.id}
                index = {i}
                todo={todo}
                handleToggle={handleToggle}
                handleDelette = {handleDelette}
                />
                ))
        }

        </ul>
            
    )

}
                  
    
