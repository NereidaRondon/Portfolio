import React, { forwardRef } from 'react';
import { Box, Container, Typography } from '@mui/material';

function About(props, refAbout){
      return(
        
        <Container ref={refAbout} sx={{pt:15}} maxWidth="md">
          <Box className=''
            data-aos="fade-up"
            data-aos-offset="20"
            data-aos-delay="20"
            data-aos-duration="750"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="false"
            data-aos-anchor-placement="top-center">

            <Typography className='title' sx={{pt:2, pb:2}} bgcolor='dark' variant='h2' fontFamily={'Shadows Into Light Two'}>About Me</Typography>

            <Typography sx={{px:1, py:1, textAlign: 'left', fontSize:'1.5rem'}} fontFamily={'Poppins'}>

              As a first-generation Hispanic-American and the first in my family to earn a college degree, my journey is built on resilience. Inspired by my teachers, I began in education and confidently pivoted into tech as an instructional designer. I aim to inspire my children by being a role model close to home.
            </Typography>
            <Typography sx={{px:1, py:1, textAlign: 'left', fontSize:'1.5rem'}} fontFamily={'Poppins'}>

              I bring a diverse skill set, from teaching and curriculum development to project management and programming. My non-traditional background offers a fresh perspective on problem-solving, driven by a commitment to continuous learning. I aim to contribute to a company's goals, enhance existing projects, and be a collaborative team player.
            </Typography>


          </Box>
      

        </Container>
      );
    }
    export default forwardRef(About);