import React from 'react';

const Input= props =>{
    const { list, setList } = props;

    let task= {
        name: "",
        isComplete: false,
    };

    const handleChange= (event)=>{
        task.name= event.target.value;
    };

    const onClickEvent= (event) =>{
        setList([...list, task]);
        event.target.value="";
    };

    return(
        <div className="container">
            <input onChange={handleChange} type="text" name="task"/>
            <button onClick={onClickEvent} type="submit" >Add</button>
        </div>
    )
}

export default Input;