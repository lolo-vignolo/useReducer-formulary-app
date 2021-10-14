import React, { useState } from 'react';
import { Small } from './small';
import { useCounter } from '../../Hooks/useCounter';
import "../01-useState/Counter.css"


export const Memorize = () => {

    const {counter, increment} = useCounter(10);
    const [show, setShow] = useState(true);


    return (
        <div>
         <h1> Memorize </h1>
         <hr />
        <h3> counter:<Small value={counter} /> </h3> 

         <button
         className = "btn btn-outline-secondary"
         onClick = {increment}
         >
          +1
         </button>

         <button
         className = "btn btn-outline-primary"
         onClick = {()=>setShow(!show)}
         >
          hide/show {JSON.stringify(show)}
         </button>

        </div>
    )
}
