import React, { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import LeftSideNav from '../LeftSideNav/LeftSideNav';
import { FaUserAlt} from "react-icons/fa";
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';
import Image from 'react-bootstrap/Image'

const Header = () => {
    const { user,logOut } = useContext(AuthContext)
    console.log(user)
    const handleLogOut = ()=>{
        logOut()
        .then(()=>{})
        .catch((error)=>console.error(error))
    }
    return (
        <div>
            <Navbar collapseOnSelect className='mb-4' expand="lg" bg="light" variant="light">
                <Container>
                    <Navbar.Brand><Link to='/'>Dragon-News</Link></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#features">Features</Nav.Link>
                            <Nav.Link href="#pricing">Pricing</Nav.Link>
                            <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">
                                    Another action
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">
                                    Separated link
                                </NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                        <>
                            {
                                user?.uid ?
                                    <> 
                                        <Nav.Link >
                                            {
                                                user?.photoURL ?
                                                    <Image style={{ height: '35px' }} roundedCircle src={user?.photoURL}></Image>
                                                    :
                                                    <FaUserAlt />
                                            }

                                        </Nav.Link>
                                        <Link  to='/profile'>
                                            {user?.displayName}
                                        </Link>
                                        <Nav.Link  onClick={handleLogOut}>LogOut</Nav.Link>
                                    </>
                                    :
                                    <>
                                      <Link to='/login'> Login</Link>
                                      <Link to='/register'> Register</Link>
                                    </>
                            }
                        </>
                        <div className='d-lg-none'>
                            <LeftSideNav>

                            </LeftSideNav>
                        </div>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;