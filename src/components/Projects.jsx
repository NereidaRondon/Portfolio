import React from 'react';
import { Link } from "react-router-dom";
import { Container, Typography, CardActionArea, Card, CardMedia, Paper, Box,  } from '@mui/material';
import { experimentalStyled as styled } from '@mui/material/styles';
import { LinkContainer } from 'react-router-bootstrap';
import Grid from '@mui/material/Unstable_Grid2';
import addie from '../assets/addie.svg';
import adult from '../assets/adult.svg';
import phish from '../assets/phish.svg';
import parallel from '../assets/parallel.svg';
import micro from '../assets/micro.svg';
import microlearning from '../assets/microlearning.svg';
//import github from '../assets/github.svg';
import sam from '../assets/sam.svg';
import tour from '../assets/tour.svg';
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

  return (

    <Container className='projects--container' sx={{bgcolor:'#bdbdbd', pb:10}} maxWidth='xxl'> 
      
      <Typography className='title' sx={{py:6}} variant='h3' fontFamily={'Shadows Into Light Two'}>eLearning</Typography>

      <Box sx={{ flexGrow: 1 }}>
      <Grid className='m-0' container spacing={{ xs: 3, sm:4, md: 8, lg: 8 }} columns={{ xs: 12, sm: 4, md: 12, lg: 12}}>

      {/* <LinkContainer to="/adultlearning">
          <Grid item xs={12} md={6} lg={4}>
            <Item sx={{ boxShadow: 10 }}>
              <Card sx={{ boxShadow: 10 }}>
                  <CardActionArea>
                    <CardMedia
                      className='cards'
                      component='img'
                      height='300'
                      image={adult}
                      alt="Adult Learning Theory eLearning Course"
                      elevation={24}
                    />
                  </CardActionArea>
              </Card>    
            </Item>
          </Grid>
      </LinkContainer> */}
      
      <LinkContainer to="/adultlearning">
          <Grid item xs={12} md={6} lg={4}>
            <Item sx={{ boxShadow: 10 }}>
              <Card sx={{ boxShadow: 10 }}>
                  <CardActionArea>
                    <CardMedia
                      className='cards'
                      component='img'
                      height='300'
                      image={adult}
                      alt="Adult Learning Theory eLearning Course"
                      elevation={24}
                    />
                  </CardActionArea>
              </Card>    
            </Item>
          </Grid>
      </LinkContainer>

      <LinkContainer to="/phishing">
        <Grid item xs={12} md={6} lg={4}>
          <Item sx={{ boxShadow: 10 }}>
  
            <Card sx={{ boxShadow: 10 }}>
                <CardActionArea>
                  <CardMedia
                    className='cards'
                    component="img"
                    height='300'
                    image={phish}
                    alt="Phishing eLearning Course"
                    />
                </CardActionArea>
            </Card>    
          </Item>
        </Grid>
      </LinkContainer>

      <LinkContainer to="/parallel">
          <Grid item xs={12} md={6} lg={4}>
            <Item sx={{ boxShadow: 10 }}>
              <Card sx={{ boxShadow: 10 }}>
                  <CardActionArea>
                    <CardMedia
                      className='cards'
                      component="img"
                      height='300'
                      image={parallel}
                      alt="Parallel Lines eLearning Activity"
                      />
                  </CardActionArea>
              </Card>    
            </Item>
          </Grid>
      </LinkContainer>

      <LinkContainer to="/addie">
          <Grid item xs={12} md={6} lg={4}>
            <Item sx={{ boxShadow: 10 }}>
              <Card sx={{ boxShadow: 10 }}>
                  <CardActionArea>
                    <CardMedia
                      className='cards'
                      component='img'
                      height='300'
                      image={addie}
                      alt="green iguana"
                      elevation={24}
                    />
                  </CardActionArea>
              </Card>    
            </Item>
          </Grid>
      </LinkContainer>

      <LinkContainer to="/tour">
        <Grid item xs={12} md={6} lg={4}>
          <Item sx={{ boxShadow: 10 }}>
  
            <Card sx={{ boxShadow: 10 }}>
                <CardActionArea>
                  <CardMedia
                    className='cards'
                    component="img"
                    height='300'
                    image={tour}
                    alt="green iguana"
                    />
                </CardActionArea>
            </Card>    
          </Item>
        </Grid>
      </LinkContainer>

      <LinkContainer to="/sam">
          <Grid item xs={12} md={6} lg={4}>
            <Item sx={{ boxShadow: 10 }}>
              <Card sx={{ boxShadow: 10 }}>
                  <CardActionArea>
                    <CardMedia
                      className='cards'
                      component="img"
                      height='300'
                      image={sam}
                      alt="SAM Model eLearning Course"
                      />
                  </CardActionArea>
              </Card>    
            </Item>
          </Grid>
      </LinkContainer>

        {/* ------------ MICRO MASTERS PORTFOLIO ---------------- */}

        <Grid item xs={12} md={6} lg={4}>
          <Link to="https://rondonidportfolio.netlify.app/" target='_blank'>
            <Item sx={{ boxShadow: 10 }}>
              <Card sx={{ boxShadow: 10 }}>
                  <CardActionArea>
                    <CardMedia
                      className='cards'
                      component='img'
                      height='300'
                      image={micro}
                      alt="Micro Masters Portfolio Website"
                      />
                  </CardActionArea>
              </Card>    
            </Item>
          </Link>
        </Grid>

        {/* ------------ MICROLEARNING ---------------- */}


        <Grid item xs={12} md={6} lg={4}>
          <Link to="https://app.7taps.com/lbOkiEvQue" target='_blank'>
            <Item sx={{ boxShadow: 10 }}>
              <Card sx={{ boxShadow: 10 }}>
                  <CardActionArea>
                    <CardMedia
                      className='cards'
                      component="img"
                      height='300'
                      image={microlearning}
                      alt="7taps Microlearning"
                      />
                  </CardActionArea>
              </Card>    
            </Item>
          </Link>
        </Grid> 

      </Grid>
    </Box>

    {/* --------------------------WEB DESIGN-------------------------- */}

    <Typography className='title' sx={{py:6}} variant='h3' fontFamily={'Shadows Into Light Two'}>Web Design</Typography>

      <Box sx={{ flexGrow: 1 }}>
      <Grid className='m-0' container spacing={{ xs: 5, md: 7, lg: 9 }} columns={{ xs: 12, sm: 8, md: 12, lg: 12}}>


          <Grid item xs={12} md={6} lg={4}>
            <Link to="https://myweatherdashboard.netlify.app/" target='_blank'>
              <Item sx={{ boxShadow: 10 }}>
                <Card sx={{ boxShadow: 10 }}>
                    <CardActionArea>
                      <CardMedia
                        className='cards'
                        component="img"
                        height='300'
                        image={weather}
                        alt="Weather Dashboard App"
                        />
                    </CardActionArea>
                        
                </Card>
              </Item>
            </Link>
          </Grid>

          <Grid item xs={12} md={6} lg={4}>
            <Link to="https://nereidarondon.github.io/MCUMovies/" target='_blank'>
              <Item sx={{ boxShadow: 10 }}>
                <Card sx={{ boxShadow: 10 }}>
                    <CardActionArea>
                      <CardMedia
                        className='cards'
                        component="img"
                        height='300'
                        image={movie}
                        alt="Movie Review App"
                        />
                    </CardActionArea>
                </Card>    
              </Item>
            </Link>
          </Grid>

         <Grid item xs={12} md={6} lg={4}>
          <Link to="https://nereidarondon.github.io/Gradebook/" target='_blank'>
            <Item sx={{ boxShadow: 10 }}>
              <Card sx={{ boxShadow: 10 }}>
                  <CardActionArea>
                    <CardMedia
                      className='cards'
                      component="img"
                      height='300'
                      image={gradebook}
                      alt="Gradebook JavaScript Application"
                      />
                  </CardActionArea>
              </Card>    
            </Item>
          </Link>
        </Grid>

          <Grid item xs={12} md={6} lg={4}>
            <Link to="https://xoxotictactoe.netlify.app/" target='_blank'>
              <Item sx={{ boxShadow: 10 }}>
                <Card sx={{ boxShadow: 10 }}>
                    <CardActionArea>
                      <CardMedia
                        className='cards'
                        component="img"
                        height='300'
                        image={tictactoe}
                        alt="Coded Tic Tac Toe game with JavaScript."
                        />
                    </CardActionArea>
                </Card>    
              </Item>
            </Link>
          </Grid>

          <Grid item xs={12} md={6} lg={4}>
            <Link to="https://clicklist.netlify.app/" target='_blank'>
              <Item sx={{ boxShadow: 10 }}>
                <Card sx={{ boxShadow: 10 }}>
                    <CardActionArea>
                      <CardMedia
                        className='cards'
                        component="img"
                        height='300'
                        image={todo}
                        alt="To Do List App coded with JavaScript"
                        />
                    </CardActionArea>
                </Card>    
              </Item>
            </Link>
          </Grid>

          <Grid item xs={12} md={6} lg={4}>
            <Link to="https://nereidarondon.github.io/Game-Kinda/" target='_blank'>
              <Item sx={{ boxShadow: 10 }}> 
                <Card sx={{ boxShadow: 10 }}>
                    <CardActionArea>
                      <CardMedia
                        className='cards'
                        component="img"
                        height='300'
                        image={kinda}
                        alt="Coded a Word Game, Kinda like Wordle"
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

