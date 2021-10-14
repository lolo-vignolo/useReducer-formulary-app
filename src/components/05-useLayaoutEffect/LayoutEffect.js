import React, { useLayoutEffect, useRef } from 'react';
import { useCounter } from '../../Hooks/useCounter';
import { useFetch } from '../../Hooks/useFetch';
import "./Layout.css";


export const LayOutEffect = () => {

    const {counter, increment} =useCounter(1);

    const { data} = useFetch (`https://www.breakingbadapi.com/api/quotes/${counter}`);
    
    const { quote} = !!data&&data[0];

    const pTag = useRef();

    useLayoutEffect(() => {
        console.log(pTag.current.getBoundingClientRect());
    }, [quote])

    return (
        
        <div>
            <h1>LayoutEffect</h1>
            <hr/>
    
            <blockquote className="row blockquote">
                <p 
                className="mb-0" 
                ref= {pTag}
                >
                 {quote}
                </p>
                
            </blockquote>
            
             

             <button className="btn btn-secondary" onClick={increment}>Next</button>

         



        </div>
    )      
}
