import React from 'react';
import { Link } from "react-router-dom";
import Box from '@mui/material/Box';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import GitHubIcon from '@mui/icons-material/GitHub';
import { pink } from '@mui/material/colors';
import { Container, Typography } from '@mui/material';


export default function SocialIcons() {
  const date = new Date();
  const year = date.getFullYear();
  
  return (
    <Container className='bg-dark' maxWidth='xxl'>

      <Box className='' sx={{ py: 4}}>
        
        <Link to='mailto: nereida.rondon5@gmail.com' target='_blank'><AlternateEmailIcon sx={{ fontSize: 50, mx: 6 }} color="secondary"/></Link>
    
        <Link to='https://www.linkedin.com/in/nereidarondon/' target='_blank'><LinkedInIcon sx={{ fontSize: 50, mx: 6 }} color="info"/></Link>
        
        <Link to='https://github.com/NereidaRondon' target='_blank'><GitHubIcon sx={{ fontSize: 50, mx: 6, color: pink[200] }} /></Link>

      </Box>

      <Typography sx={{ py: 1, color:'primary.main'}}>
        Website coded by Nereida Rondon ©️{year}
      </Typography>

      <Typography sx={{color:'grey', paddingBottom:'1rem'}} xmlns:cc="http://creativecommons.org/ns#" >This work is licensed under <a href="http://creativecommons.org/licenses/by-nc-nd/4.0/?ref=chooser-v1" target="_blank" rel="license noopener noreferrer" style={{display:'inline-block'}}>CC BY-NC-ND 4.0<img style={{height:'22px', marginLeft:'3px',verticalAlign:'text-bottom'}} src="https://mirrors.creativecommons.org/presskit/icons/cc.svg?ref=chooser-v1"/><img style={{height:'22px', marginLeft:'3px',verticalAlign:'text-bottom'}} src="https://mirrors.creativecommons.org/presskit/icons/by.svg?ref=chooser-v1"/><img style={{height:'22px',marginLeft:'3px', verticalAlign:'text-bottom'}} src="https://mirrors.creativecommons.org/presskit/icons/nc.svg?ref=chooser-v1"/><img style={{height:'22px', marginLeft:'3px', verticalAlign:'text-bottom'}} src="https://mirrors.creativecommons.org/presskit/icons/nd.svg?ref=chooser-v1"/></a></Typography>

    </Container>
  );
}