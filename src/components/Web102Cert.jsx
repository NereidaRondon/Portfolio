import React from 'react';
import { Container } from '@mui/material';
//import web102 from '../assets/web102_certificate.pdf';
import progress from '../assets/course_in_progress.svg';

export default function Web102Cert(){
  return(
    //  <Container sx={{bgcolor:'#111111', my:6}} maxWidth="lg">
    //   <embed width="100%" height="850" src={web102} type="application/pdf"></embed>

    <Container sx={{my:6}} maxWidth="lg">
      <img src={progress} width="600" height="400" alt='Course is still in progress, come back later.'></img>

    </Container>

  );
}