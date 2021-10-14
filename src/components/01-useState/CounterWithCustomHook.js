
import React from 'react';
import { useCounter } from '../../Hooks/useCounter';
import "./Counter.css";


export const CounterWithCustomHook = () => {

    const {state ,reset, increment, decrement} = useCounter();

    return (
        <>
           <h1>Counter using CustomHooks</h1> 
           <h1>{state}</h1>
           <hr/>
           <button className = "btn btn-primary" onClick = {()=>increment(2)}> + </button>
           <button className = "btn btn-primary" onClick = {reset}> Reset </button>
           <button className = "btn btn-primary" onClick= {()=>decrement(2)}> - </button>

        </>
    )
}
