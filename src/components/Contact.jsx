import React from 'react';
import { TextField, Button, Container, Typography, Stack } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import { purple } from '@mui/material/colors';
import { grey } from '@mui/material/colors';

export default function Contact(){
  const color1 = grey[300];

  return(
    
    <Container id='contact' className='shadow' sx={{backgroundColor:'#c7c7c7', boxShadow: 20, my:3, px:2}} maxWidth='md'>
        
    <Typography className='title2' sx={{pt:3, pb:1, mx:2}} variant='h2' fontFamily={'Shadows Into Light Two'}>Want to work together? <br></br>Contact me!</Typography>

      <Container sx={{bgcolor:{color1}, pt:4 }} maxWidth='md'>
        <form name="contact" method="POST" action="/contact">
          <input type="hidden" name="form-name" value="contact" />
          <Stack spacing={3} direction="row" sx={{mb:4}} className='form--bg'>
              <TextField
                type="text"
                variant='outlined'
                color= 'secondary'
                label="First Name"
                name='firstname'
                fullWidth
                required
              />
              <TextField
                type="text"
                variant='outlined'
                color='secondary'
                label="Last Name"
                name='lastname'
                fullWidth
                required
              />
          </Stack>
          <TextField
            type="email"
            variant='outlined'
            color='secondary'
            label="Email"
            name='email'
            fullWidth
            required
            sx={{mb: 4}}
          />

          <TextField
            id="outlined-textarea"
            label='Message'
            name='message'
            color='secondary'
            multiline
            rows={5}
            fullWidth
            spellCheck="true"
            required
            sx={{fontSize:'1.25rem'}}
          />

          <Button sx={{my:4, px:3, fontSize:'1.25rem',}} 
                  variant="contained"  
                  endIcon={<SendIcon />} 
                  size="large" 
                  color="secondary" 
                  elevation='5' 
                  type="submit"
          >SEND
          </Button>

        </form>

      </Container>
      
    </Container>
  );
}