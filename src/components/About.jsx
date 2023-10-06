import React, { forwardRef } from 'react';
import { Box, Container, Typography, Button } from '@mui/material';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';

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

              I encompass a diverse range of skills, from teaching to curriculum development and project management to programming. I've taken the initiative in my professional development by continuing to learn and grow as a software engineer on my free time because I believe in forging my own path rather than waiting for opportunities to come knocking. My non-traditional background brings a fresh perspective to problem-solving, with a deep commitment to self-growth.
            </Typography>

            <Typography sx={{px:1, py:1, textAlign: 'left', fontSize:'1.5rem'}} fontFamily={'Poppins'}>

              As a first-generation Hispanic woman and the first in my family to earn a college degree, my path has been carved with resilience. My early career in teaching was inspired by the educators who served as my role models. While a tech career once seemed out of reach, I'm now confidently pivoting. I'm fueled by a belief in my own capabilities and hoping to show my own children what is possible.
            </Typography>

          </Box>

          
            <Button sx={{my:6, px:5, fontSize:'1.25rem', boxShadow:8}} 
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
    export default forwardRef(About);