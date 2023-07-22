import React, { useRef } from 'react';
import { Container, Typography } from "@mui/material";
import { LinkContainer } from 'react-router-bootstrap';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../assets/myLogo.svg';
import { pink } from '@mui/material/colors';

export default function NavBar() {


  return (
    
      <Navbar collapseOnSelect bg="dark" expand="lg" variant="dark" sticky='top'>
      <Container bg="dark" maxWidth='lg'>

          <Typography variant='h4' fontFamily={'Shadows Into Light Two'}>
          <LinkContainer to="/">
            <Navbar.Brand className='logo m-0 p-0'>
              <img src={logo} className='logo m-0 p-0 bounce' alt='NR logo' />
            </Navbar.Brand>
          </LinkContainer>
          <br/>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" className=''/>
            <Navbar.Collapse id="responsive-navbar-nav" className=''>

              <Nav className="m-auto justify-content-center">
                
                <LinkContainer to="/">
                  <Nav.Link className='pt-1 ps-5 pe-5 navlink' sx={{'&:hover':{color: pink }}}>Home</Nav.Link>
                </LinkContainer>

                <LinkContainer to="/projects">
                  <Nav.Link className='pt-1 ps-5 pe-5 navlink' >Projects</Nav.Link>
                </LinkContainer>

                <LinkContainer to="/approach">  
                  <Nav.Link className='pt-1 ps-5 pe-5 navlink'>Approach</Nav.Link>
                </LinkContainer>

                <LinkContainer to="/media">
                  <Nav.Link className='pt-1 ps-5 pe-5 navlink' >Media</Nav.Link>
                </LinkContainer>  

                <LinkContainer to="/contact">
                  <Nav.Link className='pt-1 ps-5 pe-5 navlink' >Contact</Nav.Link>
                </LinkContainer>


              </Nav>

            </Navbar.Collapse>
          </Typography>

        </Container>
      </Navbar>
    
  );
}
