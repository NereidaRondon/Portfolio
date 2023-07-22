import React from 'react';
import { Container, Typography, Paper } from '@mui/material';
import tech from '../assets/tech.svg';

export default function Intro() {

  return (
    <React.Fragment>
        <Typography className='title' sx={{pt:10, pb:6}} variant='h3' fontFamily={'Shadows Into Light Two'}>Technologies I am skilled in...</Typography>
      <Container maxWidth="xxl" sx={{pb:10, bgcolor:'#bdbdbd'}}>
        <img 
          className='tech'
          src={tech} 
          width='1000'
          alt='Technologies Nereida is skilled in: Articulate Storyline, Camtasia, Snagit, Microsoft word, Powerpoint, Google Docs, Google sheets, Google Slides, Google Forms, Canva, Figma, YouTube, Affinity Designer'/>
        
        
      </Container>
    </React.Fragment>

  );
}

