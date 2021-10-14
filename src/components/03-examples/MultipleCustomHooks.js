import React from 'react';
import { useCounter } from '../../Hooks/useCounter';
import { useFetch } from '../../Hooks/useFetch';
import "../02-useEffect/SimpleForm.css"

export const MultipleCustomHooks = () => {

    const {counter, increment} =useCounter(1);

    const {loading, data} = useFetch (`https://www.breakingbadapi.com/api/quotes/${counter}`);
    
    const {author, quote} = !!data&&data[0];

    return (
        
        <div>
            <h1>BrekingBad Quotes</h1>
            <hr/>

            {loading 
            ?
                (
                <div className= "alert alert-info text-center" >
                ...loading
                </div> 
                ) 
            :
                (
                <blockquote className="row">
                    <p className="mb-0" > {quote} </p>
                    <footer className="blockquote-footer">{author}</footer>
                </blockquote>
                )
             }

             <button className="btn btn-secondary" onClick={incremen}>Next</button>

         



        </div>
    )      
}
