import React from 'react';
import { Link } from "react-router-dom";
import { Container, Typography, CardActionArea, Card, CardMedia, Paper, Box,  } from '@mui/material';
import { experimentalStyled as styled } from '@mui/material/styles';
import Grid from '@mui/material/Unstable_Grid2';
import addiegraphic from '../assets/addiegraphic.svg';
import blooms from '../assets/blooms.svg';

export default function Media() {

    const Item = styled(Paper)(({ theme }) => ({
      backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
      ...theme.typography.body2,
      padding: 0,
      textAlign: 'center',
      color: theme.palette.text.secondary,
    }));

  return (

    <Container className='media--container shadow' sx={{bgcolor:'#eeeeee', pb:10, boxShadow:20}} maxWidth='md'> 
      
      <Typography className='title' sx={{py:6}} variant='h3' fontFamily={'Shadows Into Light Two'}>Videos</Typography>

      <Box sx={{ flexGrow: 1 }}>
      
        <Grid className='m-0' container spacing={{ xs: 3, sm: 6 }} columns={{ xs: 12, lg: 6}}>

          
          <Grid item xs={12} lg={6}>
            <iframe className='video' width="560" height="315" src="https://www.youtube.com/embed/aBe0dyqJVPw" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
          </Grid>

          <Grid item xs={12} lg={6}>
            <iframe className='video' width="560" height="315" src="https://www.youtube.com/embed/-HlqCOQSOS4" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
          </Grid>

          <Grid item xs={12} lg={6}>
            <iframe className='video' width="560" height="315" src="https://www.youtube.com/embed/wA9rmMTNssA" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
          </Grid>
      
          {/* <Grid item xs={12} lg={6}>
            <iframe className='video' width="560" height="315" src="https://www.youtube.com/embed/yKwq6Ai6skI" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
          </Grid> */}
          
        </Grid>
      </Box>
    </Container>

  );
}