import { useEffect, useRef, useState } from "react"

export const useFetch = (url) => {

    const isMounted = useRef(true);
    const [state, setstate] = useState({data:null, loading: true , error:null})

    useEffect(() => {
    
        return ()=>{
            isMounted.current = false;
        }
    }, [])
    
    useEffect(() => {

        if(isMounted.current){

        setstate({data:null, loading: true , error:null})

        fetch(url)
        .then (resp => resp.json())
        .then(data =>{
            setstate({
              loading: false, 
               error:null,
               data
            })
        })
    }else{
        console.log("setState no se llamo por que esta desmontado")
    }
    }, [url])

    return state;

}


//https://www.breakingbadapi.com/api/quotes/3