import React from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import './navbar.css';

function NavBar() {
  return (
    // <Navbar color='dark' dark expand='md'>
    <Navbar className='bgNavbar' dark expand='md'>
      <NavbarBrand>INICIO</NavbarBrand>
    </Navbar>
  );
}

export default NavBar;
