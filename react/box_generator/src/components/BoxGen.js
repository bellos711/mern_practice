import React, {useState} from "react";


const BoxGen = (props)=> {

    const {colorBoxState, setColorBoxState} = useState({color: "TADA"});

    const handleSubmit = (event)=> {
        
        console.log(`This is what you typed in the form ${event.target.colorForm.value}`);
        
        
        event.preventDefault();
    };
    


    return(
    <div>
        <form onSubmit={handleSubmit}>
            <div>
                <h3>
                    <label htmlFor="">Color: </label>
                    <input type="text" name="colorForm"/>
                    <button type="submit" style={{marginLeft: 15}}>Add</button>
                </h3>
            </div>
        </form>
        <div style={{marginTop: 25}}>
            <h1>fuck you{colorBoxState}</h1>
        </div>
    </div>
    );
};

export default BoxGen;