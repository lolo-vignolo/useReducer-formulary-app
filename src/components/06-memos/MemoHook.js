import React, { useMemo, useState } from 'react';

import { useCounter } from '../../Hooks/useCounter';
import "../01-useState/Counter.css"
import { procesoPesado } from '../Helpers/ProcesoPesado';


export const MemoHook = () => {

    const {counter, increment} = useCounter(1000);
    const [show, setShow] = useState(true);

    

    const memoProcesoPesado = useMemo(() => procesoPesado(counter), [counter]);



    return (
        <div>
         <h1> MemoHook </h1>
         <hr />
        <h3> counter:<small> {counter} </small> </h3> 
        <hr />

            <p> {memoProcesoPesado}</p>
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