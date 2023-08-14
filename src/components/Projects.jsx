import React from 'react';
import { Link } from "react-router-dom";
import { Box, IconButton, Card, CardActionArea, CardActions, CardContent, CardMedia, Container, Paper, Typography } from '@mui/material';
import { experimentalStyled as styled } from '@mui/material/styles';
import GitHubIcon from '@mui/icons-material/GitHub';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import Grid from '@mui/material/Unstable_Grid2';
import gradebook from '../assets/gradebook.svg';
import weather from '../assets/weather.svg';
import movie from '../assets/movie.svg';
import tictactoe from '../assets/tictactoe.svg';
import todo from '../assets/todo.svg';
import kinda from '../assets/Kinda.svg';
import { grey } from '@mui/material/colors';


export default function Projects() {


  const accent = grey[900];

    
    const projectDetails = [
        {
          link: 'https://myweatherdashboard.netlify.app/',
          image: weather,
          alt: 'View Weather Dashboard App',
          ghlink:'https://github.com/NereidaRondon/weather-dashboard.git',
          title: 'Weather Dashboard',
          tech: 'React.js, JavaScript, JSX, HTML, CSS, Bootstrap, Axios, Open Weather API, Google Maps API, Google GeoLocation API, Netlify, GitHub'
        },
        {
          link: 'https://nereidarondon.github.io/MCUMovies/',
          image: movie,
          alt: 'View Movie Review App',
          ghlink:'https://github.com/NereidaRondon/MCUMovies.git',
          title: 'Movie Review App',
          tech: 'React.js, JavaScript, JSX, HTML, CSS, Bootstrap, GitHub, Create React App'
        },
        {
          link: 'https://nereidarondon.github.io/Gradebook/',
          image: gradebook,
          alt: 'View Gradebook Application',
          ghlink:'https://github.com/NereidaRondon/Gradebook.git',
          title: 'Gradebook App',
          tech: 'React.js, JavaScript, JSX, HTML, CSS, Bootstrap, mockAPI, Create React App GitHub'
        },
        {
          link: 'https://xoxotictactoe.netlify.app/',
          image: tictactoe,
          alt: 'View Tic Tac Toe game.',
          ghlink:'https://github.com/NereidaRondon/Tic-Tac-Toe.git',
          title: 'Tic Tac Toe',
          tech: 'JavaScript, JQuery, HTML, CSS, Bootstrap, Netlify, GitHub'
        },
        {
          link: 'https://clicklist.netlify.app/',
          image: todo,
          alt: 'View To Do App.',
          ghlink:'https://github.com/NereidaRondon/To-Do.git',
          title: 'Click List To Do App',
          tech: 'JavaScript, JQuery, HTML, CSS, Bootstrap, Netlify, GitHub'
        },
        {
          link: 'https://nereidarondon.github.io/Game-Kinda/',
          image: kinda,
          alt: 'View my Word Game, Kinda like Wordle.',
          ghlink:'https://github.com/NereidaRondon/Game-Kinda.git',
          title: 'Kinda like Wordle',
          tech: 'JavaScript,  HTML, CSS, Bootstrap, GitHub'
         }
        
    ];

    function ProjectTile() {

      return(

        projectDetails.map((item, index)=>(

            <Grid key={index} xs={12} md={6} xl={4} container item spacing={2}>
              

                <Card className='card--style' sx={{ maxWidth: 400, boxShadow: 10, borderRadius:6, bgcolor:'#c7c7c7'}}>
                  <Link to={item.link} target='_blank'>
                      <CardActionArea >
                        <CardMedia
                          className='project--img'
                          sx={{ mx:0, height:200 }}
                          image={item.image}
                          alt={item.alt}
                          />
                      </CardActionArea>
                  </Link>

                  <CardContent sx={{ height:160 }}>
                    <Typography gutterBottom variant="h4" component="div" fontFamily={'Shadows Into Light Two'}>
                      {item.title}
                    </Typography>
                    <Typography variant="body" color="text.primary" >
                      {item.tech}
                    </Typography>
                  </CardContent>
                  
                  <CardActions >

                    <Link to={item.ghlink} target='_blank'>
                      <IconButton aria-label="View code on GitHub">
                        <GitHubIcon  sx={{ fontSize:30}} />
                      </IconButton >
                    </Link>
                    
                    <Link to={item.link} target='_blank'>
                      <IconButton aria-label="View wesbite">
                        <OpenInNewIcon  sx={{ fontSize:30}} color='secondary'/>
                      </IconButton>
                    </Link>

                  </CardActions>

                </Card>

              
            </Grid>

        ))

      );
    }

  return (

    <Container id='projects' className='' sx={{pb:10, textAlign:'center'}} maxWidth='lg'> 
      
      <Typography className='title' sx={{py:5}} variant='h3' fontFamily={'Shadows Into Light Two'}>Projects</Typography>

      <Box sx={{ flexGrow: 1 }}>
        <Grid className='m-0' container spacing={{ xs:3, md:6, lg:9 }} > 

          <ProjectTile />
  
        </Grid>
      </Box>
    </Container>

  );
}