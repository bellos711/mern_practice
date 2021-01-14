import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from '@reach/router';

export default props => {
    const { removeFromDom } = props;
    const [pets, setPets] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/api/pets/')
        .then(res => setPets(res.data.pets))
        .catch(err => {console.log(err)});
        console.log(pets)
    }, [] );

    return (
        <div>
            <h1>Shelter of the Pets!</h1>
            <Link to={'/newPet'}>add a pet to the shelter</Link>
            <h2>These cool pets are looking for a forever home!</h2>
            <table>
                <tbody>
                    <tr>
                        <th>Name</th>
                        <th>Type</th>
                        <th>Actions</th>
                    </tr>
                    {
                        pets.map( pet =>
                            <tr key={pet._id}>
                                <td>{pet.petName}</td>
                                <td>{pet.petType}</td>
                                <td>
                                <Link to={`/pets/${pet._id}`}>Details</Link> | {' '}
                                    <Link to={`/pets/update/${pet._id}`}>
                                        Edit
                                    </Link>
                                </td>
                            </tr>
                            )
                    }
                </tbody>
            </table>
        </div>
    )

}