import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { toast } from 'react-hot-toast';
import { useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';


const Login = () => {
    const [error, setError] = useState('')
    const { signIn,  setLoading } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation()

    const from = location.state?.from?.pathname  || '/'

    const handleSignIn = (e) => {
        e.preventDefault()

        const form = e.target
        const name = form.name.value;

        const email = form.email.value;
        const password = form.password.value;
        form.reset()
        console.log(name, email, password);


        //SignIn With Email and Password
        signIn(email, password)
            .then(result => {
                console.log(result.user);
                if (result.user.emailVerified) {
                    navigate(from,({replace:true}))
                    toast.success('Welcome back')
                }
                else{
                    toast.error('please verify your email')
                }

            })
            .catch((error) => {
                console.log(error)
                setError(error.message)
            })
            .finally(()=>{
                setLoading(false)
            })
    }
    return (
        <div>
            <Form onSubmit={handleSignIn}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control name='email' type="email" placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control name='password' type="password" placeholder="Password" required />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Login
                </Button>
                <Form.Text className="text-danger">
                    {error}
                </Form.Text>
            </Form>
        </div>
    );
};

export default Login;