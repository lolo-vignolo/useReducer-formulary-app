import React from 'react'

//This function memo allows me avoid to render the DOM if this is not necessary.

export const Small = React.memo(({value}) => {
    return (
        <div>
            <h3>{value}</h3>
            {console.log("I was called :)")}
        </div>
    );
});
