import React, { useContext, useRef, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { AuthContext } from '../../../../context/AuthProvider/AuthProvider';
// import AuthContext from '../../../../context/AuthProvider/AuthProvider'

const Profile = () => {
    const { user } = useContext(AuthContext)
    const [name, setName] = useState(user.displayName);
    const photoURLRef = useRef(user.photoURL)
   

    const handleSubmit = (event) => {
        event.preventDefault()
        console.log( name, );
    }

    const handleNameChange = (event) => {
        setName(event.target.value)
    }


    return (
        <div>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control readOnly defaultValue={user.email} type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>User Name</Form.Label>
                    <Form.Control onChange={handleNameChange} defaultValue={name} type="text" placeholder="Enter your name" />
                </Form.Group>
                
                <Form.Group className="mb-3" controlId="formBasicPhoto">
                    <Form.Label>photoURL</Form.Label>
                    <Form.Control ref={photoURLRef} defaultValue={user.photoURL} name='photoURL' type="text" placeholder="PhotoURL" />
                </Form.Group>


                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    );
};

export default Profile;