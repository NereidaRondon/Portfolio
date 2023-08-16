import React from 'react';
import { Container } from '@mui/material';
import resume from '../assets/Resume.pdf';

export default function Resume(){
  return(
    <Container sx={{bgcolor:'#111111', mt:2}} maxWidth="lg">

      <embed width="100%" height="700" src={resume} type="application/pdf"></embed>
    </Container>

  );
}