import React, { useState } from 'react';
import { MultipleCustomHooks } from '../03-examples/MultipleCustomHooks';
import "../01-useState/Counter.css";

export const RealExampleRef = () => {
const [show, setshow] = useState(false);


    return (
        <div>
            <h1>Real example Ref</h1>
            <hr/>

           {show && <MultipleCustomHooks /> }

           <button 
           onClick= {()=>setshow(!show)}
           className= "btn btn-outline-secondary mt-5">
               Show/hide
           </button>
           

        </div>
    )
}
