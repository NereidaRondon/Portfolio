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

              As a first-generation Hispanic-American woman and the first in my family to earn a college degree, my path has been carved with resilience. My early career in teaching was inspired by the only role models that were present, my teachers. While a tech career once seemed out of reach, I have been able to confidently pivot into Instructional design. Fueled by a belief in my own capabilities, I hope to inspire my own children by giving them a role model close to home.
            </Typography>
            <Typography sx={{px:1, py:1, textAlign: 'left', fontSize:'1.5rem'}} fontFamily={'Poppins'}>

              I encompass a diverse range of skills, from teaching to curriculum development and project management to programming. I've taken the initiative in my professional development by continuing to learn and grow as a software engineer on my free time because I believe in forging my own path rather than waiting for opportunities to come knocking. My non-traditional background brings a fresh perspective to problem-solving, with a deep commitment to self-growth. My perfect role would merge my experience in education and curriculum with my growing skill in software development. 
            </Typography>


          </Box>
      

        </Container>
      );
    }
    export default forwardRef(About);