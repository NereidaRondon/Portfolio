import React, { useRef } from 'react';
import Tech from './Tech';
import bitmoji from '../assets/bitmoji.svg';
import { Box, Container, Typography, Paper, styled } from '@mui/material';
import Image from 'react-bootstrap/Image';

export default function Home(){

   function About(){
      return(
        <Container sx={{bgcolor:'#eeeeee', my:2}} maxWidth="md">
          <Box className=''
            data-aos="fade-up"
            data-aos-offset="50"
            data-aos-delay="20"
            data-aos-duration="750"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="false"
            data-aos-anchor-placement="top-center">

            <Typography className='title' sx={{pt:2, pb:2}} bgcolor='dark' variant='h3' fontFamily={'Shadows Into Light Two'}>About Me</Typography>

            <Typography variant='h6' sx={{px:8, py:1, textAlign: 'left'}}>

              My journey has encompassed a diverse range of skills, from curriculum development and data analysis to project management. I excel in creating engaging, accessible learning experiences by blending technical expertise with educational insight. I'm also interested in leveraging emerging technologies to optimize learning journeys.
            </Typography>

            <Typography variant='h6' sx={{px:8, py:1, textAlign: 'left'}}>
            Explore my projects and experience below. Whether you're seeking a dedicated team member or looking to collaborate, I'm just a message away. Let's connect!
            </Typography>
          </Box>
        </Container>
      );
    }
  

  return(
    <>
      <Container id='home' className='shadow' sx={{bgcolor:'#eeeeee', boxShadow: 20}} maxWidth="md">
        <Image className='bitmoji animated animatedFadeInUp fadeInUp' src={bitmoji} alt="Nereida's bitmoji" />
        
        <Typography className='title' sx={{pt:2,}} bgcolor='dark' variant='h3' fontFamily={'Shadows Into Light Two'}>Nereida Rondon</Typography>
        
        <Typography className='subtitle' sx={{py:1, pb:5}} variant='h5'>
          Instructional Design & Frontend Technologies
        </Typography>
       
        <Typography className='' sx={{py:2, mx:10, pb:5}} variant='h5'>
          Blending the realms of education and software development by crafting web learning experiences...
        </Typography>

          
        <Box className='space'></Box>

        <About />         

        <Tech />
        
      </Container>
      

    </>

    
    
  );
}