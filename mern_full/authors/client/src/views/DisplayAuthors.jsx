import React, {useEffect, useState} from 'react'
import axios from "axios";
import { Link } from '@reach/router';

const DisplayAuthors = props => {

    const apiUrl =  "http://localhost:8000/api/authors";
    const [authors, setAuthors] = useState(null);
    
    //---------------DISPLAY ALL AUTHORS-----------------------
    useEffect(() => {
        axios
        .get(apiUrl)
        .then((res) => {
            setAuthors(res.data.author); 
            console.log("grabbing all authors using getmethod in backend: ", res);
          })
          .catch((err) => {
            console.error(err);
          });

      }, []);
    console.log("testing log of authors info: ",authors);



    //-----------------DELETE---------------------------
    const deleteHandler = (delId)=> {
      axios
      .delete("http://localhost:8000/api/authors/delete/" + delId)
      .then((res) => {
        console.log("this isdeleted author", res.data.author);
        const filterAuthors = authors.filter((author) => {
          return author._id !== delId;
        });

        setAuthors(filterAuthors);
      })
      .catch((err) => {
        console.log(err);
      });
    };

    if (authors === null) {
        return (
          
        <div className="ifNull-container">
        
        <h1>Loading data.. please standby</h1>
        </div>
        )}

    return (
        <div className="displayAuthor-container">
        <h1>All authors</h1>
        { authors.map((author) => {
        return (
          <ul key={author._id}>

              <li>
                <Link to={"/authors/" + author._id}><h4>{author.name} </h4></Link>
                <div className="option-container">
                  <Link to={`/authors/${author._id}/edit`}>edit</Link>
                  <button 
                  onClick={() => {deleteHandler(author._id)}}>Delete</button>
                </div>
              </li>         

          </ul>
        );
        })}
        </div>
    )
}

export default DisplayAuthors
