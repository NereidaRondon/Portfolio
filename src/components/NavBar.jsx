import React from 'react';
import { Container, Typography } from "@mui/material";
import { LinkContainer } from 'react-router-bootstrap';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../assets/myLogo.svg';

export default function NavBar() {


  return (
    

    <Navbar className='m-0 p-0 sticky-top' expand="md" collapseOnSelect variant="dark" sticky="top">
      <Container className='navbar--comp shadow' sx={{bgcolor:'#bdbdbd', boxShadow: 0}} maxWidth='md'> 
      
        <LinkContainer to="/"> 
          <Navbar.Brand href='#home' className='logo m-0 p-0'>
            <img src={logo} className='logo m-0 p-0 bounce' alt='' />
          </Navbar.Brand>
         </LinkContainer>
        
        <Typography variant='h5' fontFamily={'Shadows Into Light Two'}>
        
        <Navbar.Toggle aria-controls="responsive-navbar-nav" className='hamburger justify-content-end'/>
          <Navbar.Collapse id="responsive-navbar-nav hamburger" className=''>

            <Nav className="m-auto justify-content-center">
              
              <LinkContainer to="/">
                <Nav.Link className='pt-1 ps-4 pe-4 navlink home--link' >Home</Nav.Link>
              </LinkContainer>

              <LinkContainer to="/projects"> 
                <Nav.Link  className='pt-1 ps-4 pe-4 navlink projects--link' >Projects</Nav.Link>
              </LinkContainer> 

              <LinkContainer to="/media">
                <Nav.Link className='pt-1 ps-4 pe-4 navlink media--link' >Media</Nav.Link>
              </LinkContainer>  

              <LinkContainer to="/contact">
                <Nav.Link className='pt-1 ps-4 pe-4 navlink contact--link' >Contact</Nav.Link>
              </LinkContainer>

            </Nav>

          </Navbar.Collapse>
        </Typography>
      </Container>
    </Navbar>
  

);
}
