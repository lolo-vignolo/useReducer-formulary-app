import React, { useCallback, useState } from 'react';
import '../01-useState/Counter.css';
import { ButtonIncrement } from './ButtonIncrement';


export const CallBackHook = () => {

    const [counter, setcounter] = useState(10);

    const increment = useCallback(
        () => {
            setcounter((count)=> count + 1)
        },
        [setcounter],
    )


    return (
        <div>
           <h1>Use callBack Hook</h1> 
           <hr />
           <h3>{counter}</h3>
           <ButtonIncrement funtionIncr = {increment} />
        </div>
    )
}
