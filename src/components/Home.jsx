import React, { useRef } from 'react';
import Tech from './Tech';
import bitmoji from '../assets/bitmoji.svg';
import { Box, Container, Typography, Paper, styled } from '@mui/material';
import Image from 'react-bootstrap/Image';

export default function Home(){


  return(
    <>
      <Container id='home' className='' sx={{bgcolor:'#bdbdbd'}} maxWidth="xxl">
        <Image className='bitmoji animated animatedFadeInUp fadeInUp' src={bitmoji} alt="Nereida's bitmoji" />
        
        <Typography className='title' sx={{pt:2,}} bgcolor='dark' variant='h3' fontFamily={'Shadows Into Light Two'}>Nereida Rondon</Typography>
        
        <Typography className='subtitle' sx={{py:0, pb:5}} bgcolor='dark' variant='h5'>
        Frontend Developer</Typography>



          <Box className=''>
            <Typography variant='h6' sx={{px:8, py:1, textAlign: 'left'}}>
            I bring a unique combination of technial expertise and problem solving experience to the table. I am passionate about building efficient, accessible, and visually appealing software solutions. Similarly to education, I will continue to be a life-long learner as a Frontend Developer, as I keep up with emerging technologies and trends in software development. With an insatiable drive for learning and innovation, I can quickly adapt to new tools and techniques, delivering effective solutions to meet the need of the business.

            </Typography>

            <Typography variant='h6' sx={{px:8, py:1, textAlign: 'left'}}>
            Please take a moment to browse through my projects and work experience. If you're looking for a passionate, driven, and dedicated team member, or would like to work together, let's connect!
            </Typography>
          </Box>

          


      <Tech />

      </Container>
      

    </>

    
    
  );
}