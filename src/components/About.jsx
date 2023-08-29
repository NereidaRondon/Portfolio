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

              My journey has encompassed a diverse range of skills, from curriculum development and data analysis to project management. I excel in creating engaging, accessible learning experiences by blending technical expertise with educational insight. I'm eager to learn and dedicated to staying current with emerging technologies.
            </Typography>

            <Typography sx={{px:1, py:1, textAlign: 'left', fontSize:'1.5rem'}} fontFamily={'Poppins'}>
            Explore my projects and experience. Whether you're seeking a dedicated team member or looking to collaborate, I'm just a message away. Let's connect!
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