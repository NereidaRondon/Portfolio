import React, { useRef } from 'react';
import Intro from './Intro';
import About from './About';
import Tech from './Tech';
import chevron from '../assets/chevron-down-solid.svg';
import { Box, Container } from '@mui/material';
import Image from 'react-bootstrap/Image';

export default function Home(){
  
  const refAbout = useRef(null);
  const refTech = useRef(null);

  const handleAboutScroll = () => {
    refAbout.current?.scrollIntoView({ behavior: 'smooth', block: "start"});
  }
  const handleTechScroll = () => {
    refTech.current?.scrollIntoView({ behavior: 'smooth', block: "start"});
  }

  return(
    <>
      <Container id='home' className='shadow' sx={{bgcolor:'#eeeeee', boxShadow: 20}} maxWidth="md">
          
          <Box className='section' sx={{my:0, py:0}}>
            <Intro />

            <Image aria-roledescription='button' onClick={handleAboutScroll} className='chevron animate__animated animate__pulse animate__delay-5s animate__slower	animate__infinite' src={chevron} alt="scroll down" width='50'/>
          </Box>

          <Box className='section'>
            <About ref={refAbout}/>         

            <Image aria-roledescription='button' onClick={handleTechScroll} className='chevron animate__animated animate__pulse animate__delay-5s animate__slower	animate__infinite' src={chevron} alt="scroll down" width='50'/>
          </Box>


            <Tech ref={refTech} />
        
      </Container>
      

    </>

    
    
  );
}