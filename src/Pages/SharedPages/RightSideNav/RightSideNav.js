import React from 'react';
import { Button, ButtonGroup, ListGroup } from 'react-bootstrap';
import { FaFacebook, FaGithub, FaGoogle, FaInstagram, FaLinkedin, FaTwitter, FaWhatsapp } from "react-icons/fa";

const RightSideNav = () => {
    return (
        <div>
            <ButtonGroup className='mt-3' vertical>
                <Button variant="outline-primary"><FaGoogle className='me-1'></FaGoogle>  Sign up with Github</Button>
                <Button variant="outline-info"> <FaGithub className='me-1'></FaGithub>  Sign up with Google</Button>
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