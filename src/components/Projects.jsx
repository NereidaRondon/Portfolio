import React from 'react';
import { Link } from "react-router-dom";
import { Box, IconButton, Card, CardActionArea, CardActions, CardContent, CardMedia, Container, Paper, Typography } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import Grid from '@mui/material/Unstable_Grid2';
// import Grid from '@mui/material/Grid';
import gradebook from '../assets/gradebook.svg';
import weather from '../assets/weather.svg';
import movie from '../assets/movie.svg';
import locksmith from '../assets/locksmith.svg';
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
          link: 'https://reyreyslocksmith.netlify.app/',
          image: locksmith,
          alt: 'View Freelance Work',
          ghlink:'https://github.com/NereidaRondon/locksmith',
          title: "Rey Rey's Locksmith",
          tech: 'React, ReactBootstrap, JSX, CSS, Netlify, GitHub, Canva'
        },
        {
          link: 'https://nereidarondon.github.io/Game-Kinda/',
          image: kinda,
          alt: 'View my Word Game, Kinda like Wordle.',
          ghlink:'https://github.com/NereidaRondon/Game-Kinda.git',
          title: 'Kinda like Wordle',
          tech: 'JavaScript, HTML, CSS, Bootstrap, GitHub, GitHub Pages'
         },
        {
          link: 'https://clicklist.netlify.app/',
          image: todo,
          alt: 'View To Do App.',
          ghlink:'https://github.com/NereidaRondon/To-Do.git',
          title: 'Click List To Do App',
          tech: 'JavaScript, JQuery, HTML, CSS, Bootstrap, Netlify, GitHub'
        },
        
    ];

    const otherProjectDetails = [
        {
          link: 'https://www.nereidarondon.com',
          ghlink:'https://github.com/NereidaRondon/portfolio.git',
          title: 'This Portfolio'
        },
        {
          link: 'https://xoxotictactoe.netlify.app/',
          ghlink:'https://github.com/NereidaRondon/Tic-Tac-Toe.git',
          title: 'Tic Tac Toe'
        },
        {
          link: 'https://sugarplumfairy.netlify.app/',
          ghlink:'https://github.com/NereidaRondon/react-nav.git',
          title: 'Basic React SPA with Nav Bar'
          
        },
        {
          link: 'https://convertmyunits.netlify.app/',
          ghlink:'https://github.com/NereidaRondon/unit-converter.git',
          title: 'Unit Converter'
          
        },
        {
          link: 'https://mypasswordmaker.netlify.app/',
          ghlink:'https://github.com/NereidaRondon/password-generator.git',
          title: 'Password Generator'
          
        },
        {
          link: 'https://keepcountcounter.netlify.app/',
          ghlink:'https://github.com/NereidaRondon/counter.git',
          title: 'Basic Counter App'
          
        },
        {
          link: 'https://mybbscoreboard.netlify.app/',
          ghlink:'https://github.com/NereidaRondon/scoreboard.git',
          title: 'Basic JS Scoreboard'
          
        },
        {
          link: 'https://mochilist.netlify.app/',
          ghlink:'https://github.com/NereidaRondon/grocery-list.git',
          title: 'Grocery List'
          
        }
    ];

    function ProjectTile() {

      return(

        projectDetails.map((item, index)=>(

          <Grid key={index} xs={12} md={12} lg={6} xl={4} sx={{display: 'flex', justifyContent: 'center'}}> 
            <Card key={index} className='card--style' sx={{ maxWidth: 450, boxShadow: 10, borderRadius:5, bgcolor:'#c7c7c7', m:2}}>
              <Link to={item.link} target='_blank'>
                  <CardActionArea >
                    <CardMedia
                      className='project--img'
                      sx={{ m:2, height:200 }}
                      image={item.image}
                      alt={item.alt}
                      />
                  </CardActionArea>
              </Link>

              <CardContent sx={{ height:180 }}>
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

    function OtherProjects(){

      return(
        
        otherProjectDetails.map((item, i)=>(

         <Grid key={i} xs={12} sm={6} md={6} lg={4} xl={3} sx={{display: 'flex', justifyContent: 'center'}}>

            <Card className='card--style other--projects' sx={{ width: 275, boxShadow: 10, borderRadius:6, my:2, bgcolor:'#c7c7c7'}}>
             
              <CardContent sx={{ height:90 }}>
                <Typography gutterBottom variant="h4" component="div" fontFamily={'Shadows Into Light Two'}>
                  {item.title}
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
        <Grid container spacing={3} columns={{ xs: 4, sm: 4, md: 8, lg:12 }}>
          <ProjectTile />
        </Grid>

      
      <Typography className='title' sx={{py:6, pt:16}} variant='h3' fontFamily={'Shadows Into Light Two'}>More of my Project Work</Typography>
        <Grid container spacing={3} columns={{ xs: 4, sm: 4, md: 8, lg:12 }}> 
          <OtherProjects />
        </Grid>
     
    </Container>

  );
}