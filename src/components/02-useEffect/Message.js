import React, { useEffect, useState } from 'react'

export const Message = () => {
    
    const [coords, setcoords] = useState({x:0, y:0})
    const {x, y} = coords;


    useEffect(() => {

        const mouseMove = (event)=>{
            const coors = {x:event.x, y:event.y}
            setcoords(coors)
            console.log(event.x)
        }
        window.addEventListener("mousemove", mouseMove)
        
 
        return () => {
           window.removeEventListener("mousemove", mouseMove)
        }
    },[])

    return (
        <div>
         <h1>Genialll!!!!</h1>
         <p> x : {x} and y: {y}</p>
        </div>
    )
}
