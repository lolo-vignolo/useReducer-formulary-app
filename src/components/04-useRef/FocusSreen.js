import React, { useRef } from 'react';
import { useCounter } from '../../Hooks/useCounter';
import "../01-useState/Counter.css";

export const FocusSreen = () => {

    const refValue = useRef();

    const handleClick = ()=>{

        //first using JQuerry from Js, and then using a hook.

        // document.querySelector("input").focus();
        // document.querySelector("input").select();
        refValue.current.select();
    }


    return (
        <div>
            <h1>Focus Screen</h1>
            <hr/>
            <input 
                ref = {refValue}
                className="form-control"
                placeholder="write your name"
            />

            <button
             onClick={handleClick}
             className="btn btn-outline-primary mt-5">
                Focus
            </button>

        </div>
    )
}
