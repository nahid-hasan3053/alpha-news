import React, { useContext } from 'react';
import { Button, ButtonGroup, ListGroup } from 'react-bootstrap';
import { FaFacebook, FaGithub, FaGoogle, FaInstagram, FaLinkedin, FaTwitter, FaWhatsapp } from "react-icons/fa";
import { AuthContext } from '../../../contexts/AuthProvider';
import { GoogleAuthProvider } from 'firebase/auth';

const RightSideNav = () => {

    const{providerLogin} = useContext(AuthContext);

    const googleProvider = new GoogleAuthProvider;

    const handleGoogle = () =>{
        providerLogin(googleProvider)
        .then(result =>{
            const user = result.user;
            console.log(user)
        })
        .catch(error => console.error(error))
    }

    
    return (
        <div>
            <ButtonGroup className='mt-3' vertical>
                <Button onClick={handleGoogle} variant="outline-primary"><FaGoogle className='me-1'></FaGoogle>  Sign up with Google</Button>
                <Button variant="outline-info"> <FaGithub className='me-1'></FaGithub>  Sign up with Github</Button>
            </ButtonGroup>

            <p className='mt-3 mb-2'>Find us on!</p>
            <ListGroup>
                <ListGroup.Item> <FaFacebook></FaFacebook> Facebook</ListGroup.Item>
                <ListGroup.Item> <FaLinkedin></FaLinkedin> Linkedin</ListGroup.Item>
                <ListGroup.Item> <FaWhatsapp></FaWhatsapp> Whatsapp</ListGroup.Item>
                <ListGroup.Item> <FaInstagram></FaInstagram> Instagram</ListGroup.Item>
                <ListGroup.Item> <FaTwitter></FaTwitter> Twitter</ListGroup.Item>
            </ListGroup>
        </div>
    );
};

export default RightSideNav;