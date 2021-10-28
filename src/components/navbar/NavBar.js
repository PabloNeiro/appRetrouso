import React, { useState } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, Container } from 'reactstrap';

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <Navbar color='dark' dark expand='md'>
      <Container>
        <NavbarBrand href='/'>INICIO</NavbarBrand>
        {/* <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className='ml-auto' navbar>
            <NavItem>
              <NavLink to='/login'>Inicia sesión</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to='/register'>Regístrate</NavLink>
            </NavItem>
          </Nav>
        </Collapse> */}
      </Container>
    </Navbar>
  );
}

export default NavBar;
