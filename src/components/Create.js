import React, { useState } from 'react';
import { Button, Checkbox, Form } from 'semantic-ui-react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '/Users/sarangaghara/Desktop/crud/crud/src/components/create.css'
 function Create() {
    const navigate=useNavigate();
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [contact, setContact] = useState('');
    const [checkbox, setCheckbox] = useState(false);
    console.log(checkbox)
    const postData = () => {
        axios.post(`https://65a77a1094c2c5762da6bf7e.mockapi.io/fakedata`, {
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
            <h1>Create Page</h1>
            <div>
                <Form className="create-form">
                    <label>First Name</label><br/>
                    <input placeholder='First Name' value={firstName} onChange={(e) => setFirstName(e.target.value)}/><br/>
                    <label>Last Name</label><br/>
                    <input placeholder='Last Name' value={lastName} onChange={(e) => setLastName(e.target.value)}/><br/>
                    <label>Contact Number</label><br/>
                    <input placeholder='Contact Number' value={contact} onChange={(e) => setContact(e.target.value)}/>
                    <Checkbox label='I agree to the Terms and Conditions' checked={checkbox} onChange={(e) => setCheckbox(e.target.checked)}/>
                    <Button className='submit' onClick={postData} type='submit'>Submit</Button>
                </Form>
            </div>
        </div>
    )
}

export default Create;  