import React from 'react';
import { TextField, Button, Container, Typography, Stack } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import { FormControl, FormLabel } from '@mui/material';
import { purple } from '@mui/material/colors';
import { grey } from '@mui/material/colors';

export default function Contact(){
  const color1 = grey[300];


  // add back in later (data-netlify="true")
  return(
    
    <Container id='contact' className='shadow' sx={{bgcolor:'#bdbdbd', boxShadow: 20}} maxWidth='md'>
        
    <Typography className='title' sx={{py:6}} variant='h3' fontFamily={'Shadows Into Light Two'} >Want to work together? Contact me!</Typography>

      <Container sx={{bgcolor:{color1} }} maxWidth='md'>
        <form name="contact" method="POST" action="/contact">
          <input type="hidden" name="form-name" value="contact" />
                <Stack spacing={3} direction="row" sx={{mb:4}}>
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
                  sx={{fontSize:'1.25rem', pb:1}}
                  />

                <Button sx={{my:3, px:4, fontSize:'1.25rem',}} 
                  variant="contained"  
                  endIcon={<SendIcon />} 
                  size="large" 
                  color="secondary" 
                  elevation='5' 
                  type="submit"
                >
                  SEND
                </Button>

            </form>

      </Container>
      
  
      {/*
        <div className="contact-form bg-secondary">

          <FormControl name="contact" method="POST" data-netlify="true">
            <FormLabel>Enter Name</FormLabel>
                   
                <input type="text" id="name" name="name" placeholder="Name:" autoFocus required/>
                      
                
                <input sx={{border: '1px solid black', borderRadius: '8px',}} type="email" id="email" name="email" placeholder="Email address:" required/>
                
                <TextField
                  id="outlined-textarea"
                  label='Message'
                  multiline
                  rows={5}
                  spellCheck="true"
                  required
                  sx={{border: '1px solid black', borderRadius: '8px',}}
                  />

                <Button sx={{p:3, my:1, border: '1px solid black', borderRadius: '8px',}}
                variant='outlined' type="submit" value="SEND"/>

                <Button sx={{p:3, my:1, border: '1px solid black', borderRadius: '8px',}}
                variant='outlined' type="reset" value="CLEAR"/>
            
            </FormControl> */}


    </Container>
  );
}