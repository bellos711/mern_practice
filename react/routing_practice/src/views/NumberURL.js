import React from "react";


const NumberURL = (props)=>{
    if(isNaN(props.variable)){
        return(
            <div>
                <h1>the word is{props.variable}</h1>
            </div>
        )
        
    }
    else{
        return(
            <div>
                <h1>The number is: {props.variable}</h1>
            </div>
        )
    }

    
}

export default NumberURL;