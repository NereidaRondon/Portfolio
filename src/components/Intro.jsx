import React, { useRef, forwardRef } from 'react';
import Image from 'react-bootstrap/Image';
import {Container, Typography } from '@mui/material';

import bitmoji from '../assets/bitmoji.svg';

function Intro(props, refAbout){

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
        
        <Typography className='title' sx={{pt:2}} bgcolor='dark' variant='h1' fontFamily={'Shadows Into Light Two'}>Nereida Rondon</Typography>
        
        <Typography className='subtitle' sx={{pt:1, pb:5, fontSize:'2.25rem'}} fontFamily={'Poppins'} >
          Frontend Software Engineer
        </Typography>
        
        <Typography className='' sx={{pb:5, fontSize:'1.5rem'}} fontFamily={'Poppins'}>
          Fueling my passion for web design, one pixel at a time
        </Typography>
    
    </Container>
    

  );
}
export default forwardRef(Intro);       