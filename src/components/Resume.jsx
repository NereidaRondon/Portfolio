import React from 'react';
import { Container } from '@mui/material';
import resume from '../assets/Resume.pdf';

export default function Resume(){
  return(
    <Container  sx={{bgcolor:'#111111', mt:1}} maxWidth="md">

      <embed width="100%" height="650" src={resume} type="application/pdf"></embed>
    </Container>

  );
}