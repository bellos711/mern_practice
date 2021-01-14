import React from "react";


const MultiPathURL = (props)=>{
    const pageStyle = {
        color: `${props.color1}`,
        backgroundColor: `${props.color2}`,
        width: "50%",
        margin: "0 auto",
    }
    return(
        <div style={pageStyle}>
            <h1>the word is: {props.theWord}</h1>
        </div>
    )
}

export default MultiPathURL;