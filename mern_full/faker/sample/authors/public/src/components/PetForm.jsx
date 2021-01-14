import React, { useState } from 'react';
import axios from 'axios';
import { navigate } from '@reach/router';
import {Link} from '@reach/router';

export default () => {
    const [petName, setPetName] = useState('');
    const [petType, setPetType] = useState('');
    const[petDescription, setPetDescription] = useState('');
    const [skillOne, setSkillOne] = useState('');
    const [skillTwo, setSkillTwo] = useState('');
    const [skillThree, setSkillThree] = useState('');
    const [errors, setErrors] = useState([]);

    const onSubmitHandler = e => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/pet/add', {
            petName: petName,
            petType: petType,
            petDescription: petDescription,
            skillOne: skillOne,
            skillTwo: skillTwo,
            skillThree: skillThree
        })
        .then(res => {
            console.log(res.data);
            if(res.data.hasOwnProperty('error')){
            const errorRes = res.data.error.errors;
            const errorArr = [];
            for(const key of Object.keys(errorRes)){
                errorArr.push(errorRes[key].message);
            }
            setErrors(errorArr);}else{
                navigate('/')

            }
        })
        .catch(err => console.log(err))
    }
    return(
        <div className='container'>
            <h1>Pet of the Shelters!</h1>
            <Link to={'/'}>back to home</Link>
            <h2>Know a pet needing a home?</h2>
            <form onSubmit={onSubmitHandler} >
        {errors.map((err, i) => <p key={i}>{err}</p>)}
                {/* //======== */}
                <label>Pet Name</label>
                <input type='text' onChange = {e => setPetName(e.target.value)} />
                {/* //======== */}
                <label>Pet Type</label>
                <input type='text' onChange = {e => setPetType(e.target.value)} />
                {/* //========= */}
                <label>Pet Description</label>
                <input type='text' onChange = {e => setPetDescription(e.target.value)} />
                {/* //========== */}
                <label>Pet Skill I</label>
                <input type='text' onChange = {e => setSkillOne(e.target.value)} />
                {/* //======== */}
                <label>Pet Skill II</label>
                <input type='text' onChange = {e => setSkillTwo(e.target.value)} />
                {/* //======== */}
                <label>Pet Skill III</label>
                <input type='text' onChange = {e => setSkillThree(e.target.value)} />
                {/* //======== */}
                <input type='submit' />
                <button onClick={e => {navigate('/')}} >
                    Cancel
                </button>
            </form>
        </div>
    )






}