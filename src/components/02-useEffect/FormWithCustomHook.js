import React, { useEffect } from 'react';
import { useForm } from '../../Hooks/useForm';
import "./SimpleForm.css";


export const FormWithCustomHook  = () => {

    const [values, handleInputChange] = useForm({
        name:"",
        email: "",
        password: "",
    });


    const {name, email, password}= values;
 
    useEffect(() => {
        console.log("the emais changed")
        return () =>{
            console.log("restart")
        }
      
    }, [email]);


    const handleSubmit = (event)=>{
        event.preventDefault();
        console.log(values)
    };



   
    

    return (

        <form onSubmit = {handleSubmit}>
            <h1>Hook Form With customHook</h1>
            <hr/>

            <div className= "form-group">
                <input
                type="text"
                name = "name"
                className= "form-control"
                placeholder = "wirte your name!"
                autoComplete ="off"
                value= {name}
                onChange = {handleInputChange}
                />
            </div>   

            <div className= "form-group">
                <input
                
                type="text"
                name = "email"
                className= "form-control"
                placeholder = "wirte your email!"
                autoComplete ="off"
                value= {email}
                onChange = {handleInputChange}
                />
            </div>  

            <div className= "form-group">
                <input
                
                type="password"
                name = "password"
                className= "form-control"
                placeholder = "************"
                autoComplete ="off"
                value= {password}
                onChange = {handleInputChange}
                />
            </div>  
           
           <button type="submit" className="btn btn-secondary">
           Save
           </button>
           

        </form>
    );
}

