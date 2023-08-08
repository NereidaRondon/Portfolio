import React from 'react';
import { Link } from "react-router-dom";
import { Container, Typography, CardActionArea, Card, CardMedia, Paper, Box,  } from '@mui/material';
import { experimentalStyled as styled } from '@mui/material/styles';
import { LinkContainer } from 'react-router-bootstrap';
import Grid from '@mui/material/Unstable_Grid2';
import gradebook from '../assets/gradebook.svg';
import weather from '../assets/weather.svg';
import movie from '../assets/movie.svg';
import tictactoe from '../assets/tictactoe.svg';
import todo from '../assets/todo.svg';
import kinda from '../assets/Kinda.svg';

export default function Projects() {

    const Item = styled(Paper)(({ theme }) => ({
      backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
      ...theme.typography.body2,
      padding: 0,
      textAlign: 'center',
      color: theme.palette.text.secondary,
    }));
    
    const projectDetails = [
        {
          link: 'https://myweatherdashboard.netlify.app/',
          image: weather,
          alt: 'Weather Dashboard App'
        },
        {
          link: 'https://nereidarondon.github.io/MCUMovies/',
          image: movie,
          alt: 'Movie Review App'
        },
        {
          link: 'https://nereidarondon.github.io/Gradebook/',
          image: gradebook,
          alt: 'Gradebook Application'
        },
        {
          link: 'https://xoxotictactoe.netlify.app/',
          image: tictactoe,
          alt: 'JavaScript and JQuery Tic Tac Toe game.'
        },
        {
          link: 'https://clicklist.netlify.app/',
          image: todo,
          alt: 'To Do List App coded with JavaScript.'
        },
        {
          link: 'https://nereidarondon.github.io/Game-Kinda/',
          image: kinda,
          alt: 'Coded a Word Game, Kinda like Wordle.'
         }
        // {
        //   link: '',
        //   image: ,
        //   alt: ''
        // }
      ];

    function ProjectTile() {

      return(

        projectDetails.map((item, index)=>(

            <Grid key={index} item xs={12} sm={6}>
              <Link to={item.link} target='_blank'>
                <Item sx={{ boxShadow: 10 }}>
                  <Card sx={{ boxShadow: 10 }}>
                      <CardActionArea>
                        <CardMedia
                          className='cards'
                          component='img'
                          height='200'
                          image={item.image}
                          alt={item.alt}
                          />
                      </CardActionArea>
                  </Card>    
                </Item>
              </Link>
            </Grid>
        ))

      );
    }

  return (

    <Container className='projects--container shadow' sx={{bgcolor:'#bdbdbd', pb:10, boxShadow: 20}} maxWidth='md'> 
      
      <Typography className='title' sx={{py:6}} variant='h3' fontFamily={'Shadows Into Light Two'}>Projects</Typography>

      <Box sx={{ flexGrow: 1 }}>
        <Grid className='m-0' container spacing={{ xs:3, md:6, lg:9 }} > 

          <ProjectTile />
  
        </Grid>
      </Box>
    </Container>

  );
}