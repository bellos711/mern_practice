import React from 'react';

const Task= props =>{
    const { task, index, list, setList }= props;

    const onClickDelete = () =>{
        // function filterTaskF(task) {return list.indexOf(task) !== index}
        const filterTask = (taskItem)=> {return list.indexOf(taskItem) !== index}

        setList(()=> {
            return list.filter(filterTask);
        });
    };

    

    const onChange= () => {
        console.log(list[index].isComplete);
        list[index].isComplete = !(list[index].iscomplete);
        
        console.log(list[index]);
        console.log(list[index].iscomplete);
        if(list[index].iscomplete === true)
        {
            list[index].name += " ✔"
        }
        setList([...list]);
    };

    return(
        <div className="container">
            <h4>{task.name}</h4>
            <div className="container">
                <label htmlFor="checkbox">Complete</label>
                <input type="checkbox" onChange={onChange} checked={task.isComplete}/>
                <button onClick={onClickDelete} >Remove</button>
            </div>
        </div>
    )
}

export default Task;