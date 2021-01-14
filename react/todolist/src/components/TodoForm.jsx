import { render } from '@testing-library/react';
import React from 'react';

const TodoForm= (props) =>{
    const {todo, setTodo}= props;

    const AddItem= e =>{
        e.preventDefault();
        setTodo({todo, item:""});
    }
    return(
        <div>
            <h3>Add an Item todo</h3>
            <form onSubmit={AddItem}>
                
                <input type="text" name="item"/>
                <br/>
                <input type="submit" value="Add"/>
            </form>
        </div>
    )
}

export default TodoForm;