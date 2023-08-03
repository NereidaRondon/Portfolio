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
        
        <Typography className='subtitle' sx={{py:0, pb:5}} bgcolor='dark' variant='h4'>
        Frontend Developer</Typography>



          <Box className=''>
            <Typography variant='h6' sx={{px:8, py:1, textAlign: 'left'}}>
            As a software developer, I bring a unique combination of technical expertise and experience in education and digital content design to the table. With a solid foundation in building with HTML and CSS, I am skilled in JavaScript and other relevant frameworks like Bootstrap and React. I am passionate about building efficient, user-friendly, and visually appealing software solutions. Keeping up with emerging technologies and trends in software development is my top priority. With an insatiable drive for learning and innovation, I can quickly adapt to new tools and techniques, delivering the most effective solutions to clients.

            </Typography>

            <Typography variant='h6' sx={{px:8, py:1, textAlign: 'left'}}>
             As a former educator, I spent over a decade honing my skills in creating and refining digital content. As a Content Developer and Instructional Designer, I've been able to design courses on the web with HTML, CSS, and Bootstrap. I continue to hone my JavaScript and React skills with my own projects and volunteer work.
            </Typography>

            <Typography variant='h6' sx={{px:8, py:1, textAlign: 'left'}}>
            Currently, I'm seeking opportunities to apply my skills and create meaningful digital content, from designing web pages and applications to developing and maintaining technical documentation.
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