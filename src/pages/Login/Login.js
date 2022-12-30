import React, { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';


const Login = () => {
    const navigate =useNavigate()
    const {signIn}= useContext(AuthContext)
    const handleSignIn=(e)=>{
        e.preventDefault()

        const form = e.target
        const name = form.name.value;
        
        const email = form.email.value;
        const password = form.password.value;
        form.reset()
        console.log(name, email, password);
        navigate('/')

        signIn(email,password)
        .then(result =>{
            console.log(result.user);
        })
        .catch((error)=>{console.log(error)})
    }
    return (
        <div>
            <Form onSubmit={handleSignIn}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control name='email' type="email" placeholder="Enter email" required/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control name='password' type="password" placeholder="Password" required/>
                </Form.Group>
                
                <Button variant="primary" type="submit">
                   Login
                </Button>
                <Form.Text className="text-danger">
                       
                    </Form.Text>
            </Form>
        </div>
    );
};

export default Login;