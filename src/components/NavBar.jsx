import React from 'react';
import { Container, Typography } from "@mui/material";
import { LinkContainer } from 'react-router-bootstrap';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../assets/myLogo.svg';

export default function NavBar() {


  return (
    

    <Navbar className='m-0 p-0 sticky-top header' expand="md" collapseOnSelect variant="dark" sticky="top">
      <Container className='navbar--comp shadow ' sx={{bgcolor:'#bdbdbd', boxShadow: 0}} maxWidth='md'> 
      
        <LinkContainer to="/"> 
          <Navbar.Brand href='#home' className='logo m-0 p-0 justify-content-start'>
            <img src={logo} className='logo m-0 p-0 bounce' alt='' />
          </Navbar.Brand>
         </LinkContainer>
        
        
        <Navbar.Toggle aria-controls="responsive-navbar-nav" className='hamburger justify-content-end'/>
          <Navbar.Collapse id="responsive-navbar-nav hamburger" className=''>

        <Typography variant='h5' className="m-auto " fontFamily={'Shadows Into Light Two'}>
            <Nav className="m-auto justify-content-center">
              
              <LinkContainer to="/">
                <Nav.Link className='pt-1 ps-4 pe-4 navlink home--link' >Home</Nav.Link>
              </LinkContainer>

              <LinkContainer to="/projects"> 
                <Nav.Link  className='pt-1 ps-4 pe-4 navlink projects--link' >Projects</Nav.Link>
              </LinkContainer> 

              <LinkContainer to="/videos">
                <Nav.Link className='pt-1 ps-4 pe-4 navlink media--link' >Videos</Nav.Link>
              </LinkContainer>  

              <LinkContainer to="/contact">
                <Nav.Link className='pt-1 ps-4 pe-4 navlink contact--link' >Contact</Nav.Link>
              </LinkContainer>

            </Nav>

        </Typography>
          </Navbar.Collapse>
      </Container>
    </Navbar>
  

);
}
