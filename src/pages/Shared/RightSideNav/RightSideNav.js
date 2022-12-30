import React, { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { FaDiscord, FaFacebook, FaGithub, FaGoogle, FaTwitter, FaWhatsapp, FaYoutube } from "react-icons/fa";
import ListGroup from 'react-bootstrap/ListGroup';
import BrandCarousel from '../BrandCarousel/BrandCarousel';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';
import { GoogleAuthProvider } from 'firebase/auth';


const RightSideNav = () => {
    const {providerLogin} = useContext(AuthContext)
    const googleProvider = new GoogleAuthProvider()
    const handleGoogleSignIn = ()=>{
        providerLogin(googleProvider)
        .then(result=>{
            console.log(result.user)
        })
        .catch((error)=>{console.error(error)})

    }
    return (
        <div>
            <h2>This is R NAV </h2>
            <ButtonGroup vertical>
                <Button onClick={handleGoogleSignIn} className='mb-2 p-2' variant="outline-primary"><FaGoogle /> Log in with Google</Button>
                <Button className=' p-2' variant="outline-dark"><FaGithub /> Log in with Github</Button>
            </ButtonGroup>
            <h4>Find Us on</h4>
            <ListGroup>
                <ListGroup.Item className='mb-3'><FaFacebook /> Facebook</ListGroup.Item>
                <ListGroup.Item className='mb-3'><FaYoutube /> Youtube</ListGroup.Item>
                <ListGroup.Item className='mb-3'><FaTwitter /> Twitter</ListGroup.Item>
                <ListGroup.Item className='mb-3'><FaWhatsapp /> Whatsapp</ListGroup.Item>
                <ListGroup.Item className='mb-3'><FaDiscord /> Discord</ListGroup.Item>
            </ListGroup>
            <BrandCarousel></BrandCarousel>
        </div>
    );
};

export default RightSideNav;