import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
//import Container from 'react-bootstrap/Container';
import { Container, Typography } from '@mui/material';
import vidIntro from '../assets/intro.mp4';
import vid1 from '../assets/1.mp4';
import vid2 from '../assets/2.mp4';
import vid3 from '../assets/3.mp4';
import vid4 from '../assets/4.mp4';
import vid5 from '../assets/5.mp4';
import vid6 from '../assets/6.mp4';
import beep from '../assets/beep.mp3';

// Sound Effect from <a href="https://pixabay.com/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=music&amp;utm_content=96243">Pixabay</a>

export default function Projects() {
  const [index, setIndex] = useState(0);
 
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  
  
  return (
    <Container maxWidth='xxl' sx={{pb:3, bgcolor:'#bdbdbd'}}> 
        
        <Typography className='title' sx={{pt:6, pb:4 }} variant='h3' fontFamily={'Shadows Into Light Two'}>My Instructional Design Approach</Typography>

        <Carousel className='approach--carousel justify-content-center pb-5' activeIndex={index} onSelect={handleSelect} variant="dark">

          <Carousel.Item className='approach--item'>                  
          <video className='approach--videos' src={vidIntro} width="800" height="450" controls="" autoPlay={true} muted>Sorry, your browser doesn't support embedded videos.</video>
          </Carousel.Item>

          <Carousel.Item className='approach--item'>
            <video className='approach--videos' src={vid1} width="800" height="450" controls="" autoPlay={true} muted  />
          </Carousel.Item>

          <Carousel.Item className='approach--item'>
            <video className='approach--videos' src={vid2} width="800" height="450" controls="" autoPlay={true} muted loop />
          </Carousel.Item>

          <Carousel.Item className='approach--item'>
            <video className='approach--videos' src={vid3} width="800" height="450" controls="" autoPlay={true} muted loop />
          </Carousel.Item>

          <Carousel.Item className='approach--item'>
            <video className='approach--videos' src={vid4} width="800" height="450" controls="" autoPlay={true} muted loop />
          </Carousel.Item>

          <Carousel.Item className='approach--item'>
            <video className='approach--videos' src={vid5} width="800" height="450" controls="" autoPlay={true} muted loop />
          </Carousel.Item>

          <Carousel.Item className='approach--item'>
            <video className='approach--videos' src={vid6} width="800" height="450" controls="" autoPlay={true} muted loop />
          </Carousel.Item>

        </Carousel>

    </Container>
  );
}

