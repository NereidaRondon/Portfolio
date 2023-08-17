import React from 'react';
import { Container, Typography } from "@mui/material";
import { LinkContainer } from 'react-router-bootstrap';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export default function NavBar() {


  return (
    
    <Navbar className='pt-3 sticky-top header m-auto justify-content-center ' expand="md" collapseOnSelect variant="dark" sticky="top">
             
        <Typography variant='h4' className='' fontFamily={'Shadows Into Light Two'}>
        
        <Navbar.Toggle aria-controls="responsive-navbar-nav" className='hamburger'/>
          <Navbar.Collapse id="responsive-navbar-nav hamburger" className=''>

            <Nav className="m-auto py-2 justify-content-center navbar--container">
              
              <LinkContainer to="/">
                <Nav.Link className='ps-5 pe-5'><div className='menu--link px-1'>Home</div></Nav.Link>
              </LinkContainer>

              <LinkContainer to="/projects"> 
                <Nav.Link  className='ps-5 pe-5' ><div className='menu--link px-1'>Projects</div></Nav.Link>
              </LinkContainer> 

              <LinkContainer to="/videos">
                <Nav.Link className='ps-5 pe-5' ><div className='menu--link px-1'>Videos</div></Nav.Link>
              </LinkContainer>  

              <LinkContainer to="/contact">
                <Nav.Link className='ps-5 pe-5' ><div className='menu--link'>Contact</div></Nav.Link>
              </LinkContainer>

            </Nav>

          </Navbar.Collapse>
        </Typography>

    </Navbar>
  

);
}
