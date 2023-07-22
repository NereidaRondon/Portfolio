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

    <Container className='media--container' sx={{bgcolor:'#bdbdbd', pb:10}} maxWidth='xxl'> 
      
      <Typography className='title' sx={{py:6}} variant='h3' fontFamily={'Shadows Into Light Two'}>Camtasia Videos</Typography>

      <Box sx={{ flexGrow: 1 }}>
      
      <Grid className='m-0' container spacing={{ xs: 2, sm: 5, lg: 8 }} columns={{ xs: 12, sm: 8, md: 12, lg: 12}}>

          <Grid item xs={12} md={12} lg={6}>
            <iframe className='video' width="560" height="315" src="https://www.youtube.com/embed/aBe0dyqJVPw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          </Grid>

          <Grid item xs={12} md={12} lg={6}>
            <iframe className='video' width="560" height="315" src="https://www.youtube.com/embed/-HlqCOQSOS4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          </Grid>

          <Grid item xs={12} md={12} lg={12}>
            <iframe className='video' width="560" height="315" src="https://www.youtube.com/embed/wA9rmMTNssA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          </Grid>
      
      </Grid>
    </Box>

    {/* --------------------------CANVA GRAPHICS-------------------------- */}

    <Typography className='title' sx={{py:6}} variant='h3' fontFamily={'Shadows Into Light Two'}>Canva Graphics</Typography>

      <Box sx={{ flexGrow: 1 }}>
      <Grid className='m-0' container spacing={{ xs: 6, md: 8, lg: 10, xl:12 }} >

        <Grid item xs={12} md={6}>
          <Link to="https://www.canva.com/design/DAFUrgAYBQA/view" target='_blank'>
            <Item sx={{ boxShadow: 10 }}>
              <Card sx={{ boxShadow: 10 }}>
                  <CardActionArea>
                    <CardMedia
                      className='cards'
                      component='img'
                      height='350'
                      image={addiegraphic}
                      alt="ADDIE Infographic"
                      />
                  </CardActionArea>
              </Card>    
            </Item>
          </Link>
        </Grid>

        <Grid item xs={12} md={6}>
          <Link to="https://www.canva.com/design/DAFU4Imclbg/view" target='_blank'>
            <Item sx={{ boxShadow: 10 }}>
              <Card sx={{ boxShadow: 10 }}>
                  <CardActionArea>
                    <CardMedia
                      className='cards'
                      component='img'
                      height='350'
                      image={blooms}
                      alt="Bloom's Taxonomy Infographic"
                      />
                  </CardActionArea>
              </Card>    
            </Item>
          </Link>
        </Grid>
                       
      </Grid>
    </Box>

    </Container>

  
  );
}