import React from 'react';
import { Link } from "react-router-dom";
import Box from '@mui/material/Box';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import GitHubIcon from '@mui/icons-material/GitHub';
import medium from '../assets/medium.svg';
import { pink } from '@mui/material/colors';
import { Container, Typography } from '@mui/material';


export default function SocialIcons() {
  const date = new Date();
  const year = date.getFullYear();
  
  return (
    <Container className='footer shadow' maxWidth='md' sx={{ boxShadow: 20}}>

      <Box className='' sx={{ py: 2}}>
        
        <Link to='mailto: nereida.rondon5@gmail.com' target='_blank'><AlternateEmailIcon sx={{ fontSize: 50, mx: 4 }} color="secondary"/></Link>
    
        <Link to='https://www.linkedin.com/in/nereidarondon/' target='_blank'><LinkedInIcon sx={{ fontSize: 50, mx: 4 }} color="info"/></Link>
        
        <Link to='https://github.com/NereidaRondon' target='_blank'><GitHubIcon sx={{ fontSize: 50, mx: 4, color: pink[200] }} /></Link>

        <Link to='https://medium.com/@nereidarondon' target='_blank'><img className='medium--logo animate__animated animate__tada animate__slower animate__delay-2s animate__repeat-2' src={medium} width='50' /></Link>

      </Box>

      <Typography sx={{ pb:4, color:'primary.main'}}>
        Website coded by Nereida Rondon ©️{year}
      </Typography>

    </Container>
  );
}