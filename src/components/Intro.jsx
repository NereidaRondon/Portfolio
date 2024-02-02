import React, { useRef, forwardRef } from 'react';
import Image from 'react-bootstrap/Image';
import {Container, Typography, Button } from '@mui/material';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';

import bitmoji from '../assets/bitmoji.svg';

function Intro(props, refAbout){
  const code = '{ code }';

  return(
    
    <Container ref={refAbout} sx={{mt:1}} maxWidth="md">


        <Image className='bitmoji' src={bitmoji} alt="Nereida's bitmoji" 
              height='300'
              width='350'
              data-aos="zoom-in"
              data-aos-offset="20"
              data-aos-delay="20"
              data-aos-duration="750"
              data-aos-easing="ease-in-out"
              data-aos-mirror="true"
              data-aos-once="false"
              data-aos-anchor-placement="top-center"
              />
        
        <Typography className='title' sx={{pt:1}} bgcolor='dark' variant='h1' fontFamily={'Shadows Into Light Two'}>Nereida Rondon</Typography>
        
        <Typography className='subtitle' sx={{pb:5, fontSize:'2.25rem'}} fontFamily={'Poppins'}>
          Software Designer
        </Typography>
        
        <Typography className='' sx={{pb:5, fontSize:'1.5rem'}} fontFamily={'Poppins'}>
          Fueling my passion for programming, one line of {code} at a time 
        </Typography>

        <Button sx={{my:3, px:5, fontSize:'1.25rem', boxShadow:8}} 
            className='resume--btn' 
            variant='contained'  
            endIcon={<PictureAsPdfIcon />} 
            size='large' 
            color='secondary' 
            elevation='5' 
            href='/resume'
            target = '_blank'
          >Resume
        </Button>
    
    </Container>
    

  );
}
export default forwardRef(Intro);       