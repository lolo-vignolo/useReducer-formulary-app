import React from 'react'

export const ButtonIncrement = React.memo(({funtionIncr}) => {
    console.log("again");
    return (
        <button
        className = "btn btn-outline-secondary"
        onClick = {funtionIncr}
        >
         +1   
        </button>
    )
})
