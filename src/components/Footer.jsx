import React from 'react';
import { Container, Typography } from '@mui/material';

export default function SocialIcons() {
  const date = new Date();
  const year = date.getFullYear();
  
  return (
    <Container className='footer' maxWidth='md' sx={{pt:10 }}>

      <Typography sx={{pb:1}} fontFamily={'Poppins'}>
        Website coded by Nereida Rondon ©️{year}
      </Typography>

    </Container>
  );
}