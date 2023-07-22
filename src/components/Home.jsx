import React, { useRef } from 'react';
import Tech from './Tech';
import bitmoji from '../assets/bitmoji.svg';
import { Box, Container, Typography, Paper, styled } from '@mui/material';
import Image from 'react-bootstrap/Image';

export default function Home(){


  return(
    <>
      <Container id='home' className='' sx={{bgcolor:'#bdbdbd'}} maxWidth="xxl">
        <Image className='bitmoji' src={bitmoji} alt="Nereida's bitmoji" />
        
        <Typography className='title' sx={{pt:2,}} bgcolor='dark' variant='h2' fontFamily={'Shadows Into Light Two'}>Nereida Rondon</Typography>
        
        <Typography className='subtitle' sx={{py:0}} bgcolor='dark' variant='h4'>
        Frontend Developer</Typography>


          <Box className=''>
            <Typography  sx={{py:2, pt:8}} bgcolor='dark' variant='h4' >Hello!</Typography>
          </Box>
          <Box className=''>
            <Typography variant='h6' sx={{px:2, py:2, textAlign: 'left'}}>
            As a former high school mathematics teacher, I've spent over a decade honing my skills in creating and refining digital content, activities, and video lessons. My passion for teaching and learning has allowed me to develop a deep understanding of research based learning practices, while my technical expertise in web design with HTML, CSS, and JavaScript and learning technologies such as Camtasia and Articualte has given me the leverage to enhance the learning experiences I deliver. </Typography>
            <Typography variant='h6' sx={{px:2, py:2, textAlign: 'left'}}>
            Working with LMS platforms such as Moodle and authoring tools such as Articulate Storyline, I have been able to design and develop engaging and accessible courses for adult learners. I look forward to expanding my knowledge further into the adult learning space!
            </Typography>
          </Box>

          


      <Tech />

      </Container>
      

    </>

    
    
  );
}