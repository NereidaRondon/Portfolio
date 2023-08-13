import React, { useState, useMemo } from 'react';
import useMediaQuery from '@mui/material/useMediaQuery';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Container } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import './App.css';
import NavBar from './components/NavBar';
import AppRouter from './components/AppRouter';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Socials from './components/Socials';

export default function App() {

  return (
    <React.Fragment>
      <CssBaseline />
        <Container className='main--container' maxWidth="xxl">
          
          <Socials />
          <NavBar />
          <ScrollToTop />
          <AppRouter />
          <Footer /> 
        
        </Container>
    </React.Fragment>
  );
}