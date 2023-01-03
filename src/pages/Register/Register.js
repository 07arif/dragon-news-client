import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { toast } from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';

const Register = () => {
    const { createUser, updateUserProfile, verifyEmail } = useContext(AuthContext)
    const [error, setError] = useState('')
    const [accepted, setAccepted] = useState()


    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state?.from?.pathname;

    const handleSubmit = (event) => {
        event.preventDefault()

        const form = event.target
        const name = form.name.value;
        const photoURL = form.photoURL.value;
        const email = form.email.value;
        const password = form.password.value;
        form.reset()
        console.log(name, email, password, photoURL);

        //create user:
        createUser(email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                console.log(user);
                setError('')
                //navigate 
                navigate(from, { replace: true })
                handleUpdateUserProfile(name, photoURL);
                handleEmailVerification();
               

                // ...
            })
            .catch((error) => {
                const errorMessage = error.message;
                setError(errorMessage)
                // ..
            });
    }

    //Update Profile
    const handleUpdateUserProfile = (name, photoURL) => {
        const profile = {
            displayName: name,
            photoURL: photoURL
        }
        updateUserProfile(profile)
            .then(() => { })
            .catch(error => { console.log(error) })
    }
    //accept term and condition
    const handleAccepted = event => {
        setAccepted(event.target.checked)
    }

    // email verification
    const handleEmailVerification = () => {
        verifyEmail()
            .then(() => {
                toast.success('Please verify your emil address')
            });
    }

    return (
        <div>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control name='name' type="text" placeholder="Enter Name" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPhoto">
                    <Form.Label>photoURL</Form.Label>
                    <Form.Control name='photoURL' type="text" placeholder="PhotoURL" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control name='email' type="email" placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control name='password' type="password" placeholder="Password" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check onClick={handleAccepted} type="checkbox" label={<>accept <Link to='/terms'>terms and condition</Link></>} />
                </Form.Group>

                <Button variant="primary" type="submit" disabled={!accepted}>
                    Register
                </Button>
                <Form.Text className="text-danger">
                    {error}
                </Form.Text>
            </Form>
        </div>
    );
};

export default Register;