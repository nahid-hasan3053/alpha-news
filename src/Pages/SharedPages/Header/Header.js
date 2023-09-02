import { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider';
import { Image } from 'react-bootstrap';
import { FaImage } from 'react-icons/fa';

const Header = () => {

    const {user, logOut} = useContext(AuthContext);

    const handleLogOut = () =>{
        logOut()
        .then(()=>{

        })
        .catch(error => console.error(error))
    }

    return (
        <div>
            <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
                <Container>
                    <Navbar.Brand > <Link to={'/'}>Alpha News 24/7</Link> </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link><Link>Categories</Link></Nav.Link>
                            <Nav.Link href="#pricing">News</Nav.Link>
                        </Nav>
                    <Nav>
                        <Nav.Link className='mt-1' href="#deets">
                            {
                                user?.uid ?
                                <>
                                    <small>{user?.displayName}</small>
                                    <button onClick={handleLogOut}>Logout</button>
                                </>
                                :
                                <>
                                    <Link to='/login'>Login</Link>
                                    <Link to='/register'>Register</Link>
                                </>
                            }
                        </Nav.Link>
                        <Nav.Link eventKey={2} href="#memes">
                        {
                            user?.photoURL?
                            <Image roundedCircle style={{width: '35px'}} src={user.photoURL}></Image> 
                            :
                            <FaImage></FaImage>
                        }
                        </Nav.Link>
                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;