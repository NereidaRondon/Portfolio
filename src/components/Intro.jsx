import React, { useRef, forwardRef } from 'react';
import Image from 'react-bootstrap/Image';
import {Container, Typography } from '@mui/material';

import bitmoji from '../assets/bitmoji.svg';

function Intro(props, refAbout){

  return(
    
    <Container ref={refAbout} sx={{mt:1, pt:3}} maxWidth="md">


        <Image className='bitmoji' src={bitmoji} alt="Nereida's bitmoji" 
              data-aos="zoom-in"
              data-aos-offset="20"
              data-aos-delay="20"
              data-aos-duration="750"
              data-aos-easing="ease-in-out"
              data-aos-mirror="true"
              data-aos-once="false"
              data-aos-anchor-placement="top-center"
              />
        
        <Typography className='title' sx={{pt:2,}} bgcolor='dark' variant='h2' fontFamily={'Shadows Into Light Two'}>Nereida Rondon</Typography>
        
        <Typography className='subtitle' sx={{pt:1, pb:5}} fontFamily={'Poppins'} variant='h4'>
          Instructional Design & Frontend Development
        </Typography>
        
        <Typography className='' sx={{py:2, mx:2, pb:5}} fontFamily={'Poppins'} variant='h5'>
          Blending the realms of education and software development by crafting web learning experiences...
        </Typography>
    
    </Container>
    

  );
}
export default forwardRef(Intro);       