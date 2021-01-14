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

    
    const headerStyle = {
        display: "flex",
        backgroundColor: "#77B7D0",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "0px 20px"
    }

    const tableRowStyle = {
        borderTop: "1px solid #77B7D0",
        borderBottom: "1px solid #77B7D0",
        borderCollapse: "collapse",
        textTransform: "uppercase",
        fontSize: "15px",
        marginBottom: "15px",
        textAlign: "center",
        width: "800px",
        margin: "auto"
    }

    const tableDataStyle = {
        padding: "7px 0",
        textAlign: "center",
        borderLeft: "2px solid #77B7D0",
        borderRight: "2px solid #77B7D0",
        borderBottom: "2px solid #77B7D0",
    }

    return (
        <div>
            <div style={headerStyle}>
                <h1 style={{color: "white"}}>Pet Shelter</h1>
                <Link to={'/newPet'} style={{border: "2px solid white", padding: 10, color: "white"}}>Add a pet to the shelter</Link>
            </div>
            <h2>These pets are looking for a good home 🥺</h2>
            <table style={{width: "50%", margin: "0 auto", marginTop: 40 }}>
                <tbody>
                    <tr>
                        <th>Name</th>
                        <th>Type</th>
                        <th>Actions</th>
                    </tr>
                    {
                        pets.map( pet =>
                            <tr style={tableRowStyle} key={pet._id}>
                                <td style={tableDataStyle}>{pet.petName}</td>
                                <td style={tableDataStyle}>{pet.petType}</td>
                                <td style={tableDataStyle}>
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