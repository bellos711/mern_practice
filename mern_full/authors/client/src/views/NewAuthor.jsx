import React, {useState} from 'react';
import axios from "axios";
import {navigate} from "@reach/router";

const DisplayAuthors = props => {

    const [name, setName] = useState();

    function handleSubmit(e){
        e.preventDefault();

        const newAuthor = {
        name: name,
        };
        console.log(newAuthor);

        axios
        .post("http://localhost:8000/api/authors", newAuthor)
        .then((res) => {
            console.log("then results",res);
            navigate("/authors");

        })
        .catch((err) => {console.log(err);
        });
        console.log("new author handle event");
    }

    return (
        <div>
            <h1>New Authors</h1>
            <form onSubmit={(e)=> {handleSubmit(e);}} >
                <input 
                type="text"
                placeholder="Type author's name here"   
                onChange={e => {setName(e.target.value)}}/>
                <button>+</button>
            </form>
        </div>
    )
}

export default DisplayAuthors
