import React, { useState, useEffect } from 'react';
import { Button, Checkbox, Form } from 'semantic-ui-react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '/Users/sarangaghara/Desktop/crud/crud/src/components/read.css'
 function Update() {
    const navigate = useNavigate();
    const [id, setID] = useState(null);
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState(''); 
    const [contact, setContact] = useState('');
    const [checkbox, setCheckbox] = useState(false);

    useEffect(() => {
        setID(localStorage.getItem('ID'))
        setFirstName(localStorage.getItem('First Name'));
        setLastName(localStorage.getItem('Last Name'));
        setContact(localStorage.getItem('contact'));
        setCheckbox(localStorage.getItem('Checkbox Value'));
    }, []);

    const updateAPIData = () => {
        axios.put(`https://65a77a1094c2c5762da6bf7e.mockapi.io/fakedata/${id}`, {
            firstName,
            lastName,
            contact,
            checkbox
        }).then(() => {
            navigate('/read')
        })
    }
    return (
        <div>
            <h1>Update Page</h1>
            <Form className="create-form">
                    <label>First Name</label><br/>
                    <input placeholder='First Name' value={firstName} onChange={(e) => setFirstName(e.target.value)}/><br/>
                    <label>Last Name</label><br/>
                    <input placeholder='Last Name' value={lastName} onChange={(e) => setLastName(e.target.value)}/><br/>
                    <label>Contact Number</label><br/>
                    <input placeholder='Contact Number' value={contact} onChange={(e) => setContact(e.target.value)}/><br/>
                    <Checkbox label='I agree to the Terms and Conditions' checked={checkbox} onChange={() => setCheckbox(!checkbox)}/>
                <Button className='btn-update' type='submit' onClick={updateAPIData}>Update</Button>
            </Form>
        </div>
    )
}

export default Update;