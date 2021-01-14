import React, { useEffect, useState } from 'react';
import {navigate} from '@reach/router';
import {Link} from '@reach/router';
import axios from 'axios';

export default props => {
    const { id } = props;
    const [petName, setPetName] = useState('');
    const [petType, setPetType] = useState('');
    const[petDescription, setPetDescription] = useState('');
    const [skillOne, setSkillOne] = useState('');
    const [skillTwo, setSkillTwo] = useState('');
    const [skillThree, setSkillThree] = useState('');
    const [errors, setErrors] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:8000/api/pets/${props.id}`)
        .then(res => {
            setPetName(res.data.pet.petName);
            setPetType(res.data.pet.petType);
            setPetDescription(res.data.pet.petDescription);
            setSkillOne(res.data.pet.skillOne);
            setSkillTwo(res.data.pet.skillTwo);
            setSkillThree(res.data.pet.skillThree);
        }).catch(err => console.log(err))
    }, [props._id] )

    const updatePet = e => {
        const updatePet = {
            petName: petName,
            petType: petType,
            petDescription: petDescription,
            skillOne: skillOne,
            skillTwo: skillTwo,
            skillThree: skillThree
        }
        // e.preventDefault();
        axios.put(`http://localhost:8000/api/pets/update/${props.id}`, updatePet)
        .then(res => {
            console.log(res.data);
            const errorRes = res.data.error.errors;
            const errorArr = [];
            for(const key of Object.keys(errorRes)){
                errorArr.push(errorRes[key].message);
            }
            setErrors(errorArr);
            navigate(`/pets/${props.id}`)
        })
        .catch(err => {
            console.log(err)
        });
    }
    return(
        <div>
            <h1>Shelter of the Pets!</h1>
            <h2>Edit {petName}</h2>
            <Link to={'/'}>back to home</Link>
            <form onSubmit={updatePet}>
                {errors.map((err, i) => <p key={i}>{err}</p>)}
                {/* //======== */}
                <label>Pet Name</label>
                <input type='text' name='petName' value={petName} onChange = {e => setPetName(e.target.value)} />
                {/* //======== */}
                <label>Pet Type</label>
                <input type='text' name='petType' value={petType} onChange = {e => setPetType(e.target.value)} />
                {/* //========= */}
                <label>Pet Description</label>
                <input type='text' name='petDescription' value={petDescription} onChange = {e => setPetDescription(e.target.value)} />
                {/* //========== */}
                <label>Pet Skill I</label>
                <input type='text' name='skillOne' value={skillOne} onChange = {e => setSkillOne(e.target.value)} />
                {/* //======== */}
                <label>Pet Skill II</label>
                <input type='text' name='skillTwo' value={skillTwo} onChange = {e => setSkillTwo(e.target.value)} />
                {/* //======== */}
                <label>Pet Skill III</label>
                <input type='text' name='skillThree' value={skillThree} onChange = {e => setSkillThree(e.target.value)} />
                {/* //======== */}
                <input type='submit' value='Edit Pet' />
                <button onClick={e => {navigate('/')}} >
                    Cancel
                </button>
            </form>
        </div>
    )


}