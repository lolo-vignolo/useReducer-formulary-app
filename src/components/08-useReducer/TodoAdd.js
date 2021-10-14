

import React from 'react'
import { useForm } from '../../Hooks/useForm';

export const TodoAdd = ({handleAddTodo}) => {

    const [{description} , handleInputChange , reset] = useForm({
        description: ""

    });


    const handleSubmit = (e)=>{
        e.preventDefault();

        if(description.length <= 2){
            return;
        }
        
        const newTodo = {
            id: new Date().getTime(),
            desc:description,
            done:false
        };


        handleAddTodo(newTodo);
        reset();
 
    }
    return (

        <>
            <h4>Agregar TODO</h4>
                        <hr />

                        <form onSubmit={ handleSubmit } > 
                                <input
                                    type="text"
                                    name="description"
                                    className="form-control mt-20"
                                    placeholder="agregar texto"
                                    autoComplete="off"
                                    value = {description}
                                    onChange = {handleInputChange}
                                 />
                             
                            <button
                                type="submit"
                                className = "btn btn-outline-primary mt-1 btn-block"
                               
                            >
                                Agregar
                            </button>     

                        </form> 
        </>
    )
}




                       