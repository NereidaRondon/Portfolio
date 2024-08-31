import React from 'react';
import { Container } from '@mui/material';
import icp from '../assets/ICP_cert.pdf';

export default function ICPCert(){
  return(
    <Container sx={{bgcolor:'#111111', my:6}} maxWidth="lg">

      <embed width="100%" height="850" src={icp} type="application/pdf"></embed>
    </Container>

  );
}