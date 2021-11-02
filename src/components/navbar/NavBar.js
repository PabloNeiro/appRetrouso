import React from 'react';
import { Navbar, NavbarBrand, Container } from 'reactstrap';
import './navbar.css';

function NavBar() {
  return (
    // <Navbar color='dark' dark expand='md'>
    <Navbar className='bgNavbar' dark expand='md'>
      {/* <Container> */}
      <NavbarBrand>INICIO</NavbarBrand>
      {/* </Container> */}
    </Navbar>
  );
}

export default NavBar;
