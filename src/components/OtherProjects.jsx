import React from 'react';
import { Link } from "react-router-dom";
import { Box, IconButton, Card, CardActionArea, CardActions, CardContent, CardMedia, Container, Paper, Typography } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import Grid from '@mui/material/Grid';



export default function OtherProjects() {
 
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


  function OtherProjectTiles(){

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
    <> 
      <Typography className='title' sx={{py:5, pt:16}} variant='h3' fontFamily={'Shadows Into Light Two'}>More of my Project Work</Typography>

        <Grid class='ml-0' container spacing={1} columns={{ xs: 4, sm: 8, md: 12, lg:12, xl:12 }}>
          <OtherProjectTiles />
        </Grid>
    </>

  );
}