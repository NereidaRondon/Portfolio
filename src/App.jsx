import React from 'react';
import { Container } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import './App.css';
import NavBar from './components/NavBar';
import AppRouter from './components/AppRouter';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Socials from './components/Socials';

export default function App() {
  
  // look in elements in dev tools for an attribute called data-scroll = "position from top" on body tag
  document.addEventListener('scroll', () => {
    document.documentElement.dataset.scroll = window.scrollY;
  });

  
  return (
    <React.Fragment>
      <CssBaseline />
        <Container >
          
          <Socials />
          <NavBar />
          <ScrollToTop />
          <AppRouter />
          <Footer /> 
        
        </Container>
    </React.Fragment>
  );
}