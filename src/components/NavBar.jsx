import React, { useRef } from 'react';
import { Container, Typography } from "@mui/material";
import { LinkContainer } from 'react-router-bootstrap';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../assets/myLogo.svg';

export default function NavBar() {


  return (
    
      <Container className='navbar--comp shadow' sx={{bgcolor:'#bdbdbd', boxShadow: 20}} maxWidth='md'>
        <Navbar expand="xl" collapseOnSelect  variant="dark" sticky="top">
          <Container>

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
                    <Nav.Link className='pt-1 ps-4 pe-4 navlink home--link' >Home</Nav.Link>
                  </LinkContainer>

                  <LinkContainer to="/projects">
                    <Nav.Link className='pt-1 ps-4 pe-4 navlink projects--link' >Projects</Nav.Link>
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
        </Container>
    
  );
}
