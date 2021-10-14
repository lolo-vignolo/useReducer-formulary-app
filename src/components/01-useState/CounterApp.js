import React, { useState } from 'react';
import "./Counter.css"


const CounterApp = () => {
    
    const [state, setstate] = useState({
        counter_1:10,
        counter_2:20,
        counter_3:30,
        counter_4:40
    });

    const {counter_1,counter_2} = state;

    const countHabdle = ()=>{
        setstate({
            ...state,
            counter_1: counter_1 + 1,
            
        });
    }


    return (
        <>
            <h1>counter 1 = {counter_1}</h1>
            <h1>counter 2 =  {counter_2}</h1>
            <hr />


            <button className="btn btn-primary" onClick= {countHabdle}>click</button>
        </>
    )
}

export default CounterApp