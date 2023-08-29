import React from 'react';
import { Container } from '@mui/material';
import pt from '../assets/Promineo Certificate.pdf';

export default function PTCertificate(){
  return(
    <Container sx={{bgcolor:'#111111', my:6}} maxWidth="lg">

      <embed width="100%" height="850" src={pt} type="application/pdf"></embed>
    </Container>

  );
}