import React, { useEffect, useReducer } from 'react';
import { todoReducer } from './todoReducer';
import "./styless.css";

import { TodoList } from './TodoList';
import { TodoAdd } from './TodoAdd';



const init = ()=>{

    return JSON.parse(localStorage.getItem("todos")) || [];
//    return [{
//         id: new Date().getTime(),
//         desc: "aprender react",
//         done: false
//     }];

}

export const TodoApp = () => {


    const [todos,dispatch] = useReducer(todoReducer, [], init);
    
 
    
    useEffect(() => {
      localStorage.setItem("todos", JSON.stringify(todos) )
    }, [todos]);


    const handleDelette = (todoID) =>{
        console.log(todoID)
        
        const actionDelete = {
            type: "delete",
            payload : todoID ,
        };
        dispatch (actionDelete);

    }

    const handleToggle= (todoID) =>{
        dispatch({
            type: "toggle",
            payload:todoID,
        })
    }

    const handleAddTodo = (newTodo) => {
      
        dispatch( {type: "add",
        payload: newTodo});
        
        };

    



  



    return (
        <div>
            <h1>TodoApp ({todos.length})</h1>
            <hr />

                <div className="row">

                    <div className="col-7">

                        <TodoList 
                        todos={todos} 
                        handleToggle= {handleToggle} 
                        handleDelette = {handleDelette}    
                        />

                        </div>
 
                    <div className="col-5">

                           <TodoAdd 
                           handleAddTodo = {handleAddTodo}
                           />

                    </div>

                </div>
            
            </div>
        );
}







// <h4>Agregar TODO</h4>
// <hr />

// <form onSubmit={ handleSubmit } >

//         <input
//             type="text"
//             name="description"
//             className="form-control mt-20"
//             placeholder="agregar texto"
//             autoComplete="off"
//             value = {description}
//             onChange = {handleInputChange}
//          />
     
//     <button
//         type="submit"
//         className = "btn btn-outline-primary mt-1 btn-block"
       
//     >
//         Agregar
//     </button>     

// </form>


// import React, { useEffect, useReducer } from 'react';
// import { todoReducer } from './todoReducer';
// import "./styless.css";
// import { useForm } from '../../Hooks/useForm';



// const init = ()=>{

//     return JSON.parse(localStorage.getItem("todos")) || [];
// //    return [{
// //         id: new Date().getTime(),
// //         desc: "aprender react",
// //         done: false
// //     }];

// }





// export const TodoApp = () => {


//     const [todos,dispatch] = useReducer(todoReducer, [], init);
    
//     const [{description} , handleInputChange , reset] = useForm({
//         description: ""

//     });
    
//     useEffect(() => {
//       localStorage.setItem("todos", JSON.stringify(todos) )
//     }, [todos]);


//     const handleDelette = (todoID) =>{
//         console.log(todoID)
        
//         const actionDelete = {
//             type: "delete",
//             payload : todoID ,
//         };
//         dispatch (actionDelete);

//     }

//     const handleToggle= (todoID) =>{
//         dispatch({
//             type: "toggle",
//             payload:todoID,
//         })
//     }



//     const hanleAdd = (event) =>{
//         event.preventDefault();
        
//         if(description.length <= 2){
//             return;
//         }
      
//         const newTodo = {
//             id: new Date().getTime(),
//             desc:description,
//             done:false
//         };

//         const action = {
//             type: "add",
//             payload: newTodo
//         };

//         dispatch(action);
//         reset();


//     };



//     return (
//         <div>
//             <h1>TodoApp ({todos.length})</h1>
//             <hr />

//                 <div className="row">

//                     <div className="col-7">

//                         <ul className = "list-group list-group-flush">
//                             {
//                                 todos.map((todo, i)=>(
//                                 <li
//                                     key={todo.id}
//                                     className= "list-group-item"
//                                 >
//                                 <p
//                                     onClick = {()=>{handleToggle(todo.id)}}
//                                     className= {`${todo.done && "complete" }`} //here complete is a class name, which toggle the sentence.
//                                  > {i + 1}.{todo.desc} </p>
//                                 <button
//                                     onClick = {() => handleDelette (todo.id)}
//                                     className = "btn btn-danger"

//                                 >Borrar
//                                 </button>
//                                 </li>
//                             ))
//                             }
//                         </ul>

//                         </div>
 
//                     <div className="col-5">

//                         <h4>Agregar TODO</h4>
//                         <hr />

//                         <form onSubmit={ hanleAdd } >

//                                 <input
//                                     type="text"
//                                     name="description"
//                                     className="form-control mt-20"
//                                     placeholder="agregar texto"
//                                     autoComplete="off"
//                                     value = {description}
//                                     onChange = {handleInputChange}
//                                  />
                             
//                             <button
//                                 type="submit"
//                                 className = "btn btn-outline-primary mt-1 btn-block"
                               
//                             >
//                                 Agregar
//                             </button>     

//                         </form>
                           

//                     </div>

//                 </div>
            
//             </div>
//         );
// }
