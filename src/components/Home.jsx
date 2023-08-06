import React, { useRef } from 'react';
import Tech from './Tech';
import bitmoji from '../assets/bitmoji.svg';
import { Box, Container, Typography, Paper, styled } from '@mui/material';
import Image from 'react-bootstrap/Image';

export default function Home(){


  return(
    <>
      <Container id='home' className='shadow' sx={{bgcolor:'#bdbdbd', boxShadow: 20}} maxWidth="md">
        <Image className='bitmoji animated animatedFadeInUp fadeInUp' src={bitmoji} alt="Nereida's bitmoji" />
        
        <Typography className='title' sx={{pt:2,}} bgcolor='dark' variant='h3' fontFamily={'Shadows Into Light Two'}>Nereida Rondon</Typography>
        
        <Typography className='subtitle' sx={{py:0, pb:5}} bgcolor='dark' variant='h5'>
        Frontend Developer</Typography>



          <Box className=''>
            <Typography variant='h6' sx={{px:8, py:1, textAlign: 'left'}}>
            Bringing a unique blend of technical expertise and creative problem-solving to the table, I'm all about building efficient, accessible, and visually captivating software solutions. As a Frontend Developer, I'm committed to lifelong learning, staying on top of emerging technologies and trends in software development. With an insatiable drive for innovation, I adapt quickly to new tools and techniques, delivering effective solutions that meet the needs of the business.
            </Typography>

            <Typography variant='h6' sx={{px:8, py:1, textAlign: 'left'}}>
            Take a moment to browse through my projects and work experience. If you're seeking a passionate, dedicated team member, or interested in collaborating, let's connect!
            </Typography>
          </Box>

          


      <Tech />

      </Container>
      

    </>

    
    
  );
}