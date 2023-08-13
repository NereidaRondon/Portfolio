import React, { useRef } from 'react';
import Image from 'react-bootstrap/Image';
import {Typography } from '@mui/material';
import bitmoji from '../assets/bitmoji.svg';

export default function Intro(){

  return(
    <>
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
        
        <Typography className='title' sx={{pt:2,}} bgcolor='dark' variant='h3' fontFamily={'Shadows Into Light Two'}>Nereida Rondon</Typography>
        
        <Typography className='subtitle' sx={{py:1, pb:5}} variant='h5'>
          Instructional Design & Frontend Development
        </Typography>
        
        <Typography className='' sx={{py:2, mx:4, pb:5}} variant='h5'>
          Blending the realms of education and software development by crafting web learning experiences...
        </Typography>
    </>

  );
}
       