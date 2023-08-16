import hamster from '../assets/hamster.webp';
import { Container, Box } from '@mui/material';

export default function Error(){


  return(
    
    <Container sx={{pt:5, height:'100dvh'}} maxWidth="md">

      <Box sx={{bgcolor:'', pt:5}} maxWidth="md">

        <img className='error' src={hamster} width='450'/>
        
      </Box>
      <Box sx={{ pb:5}} maxWidth="md">
        <a href="http://www.freepik.com">Designed by stories / Freepik</a>
      </Box>

    </Container>
    
  );
  
} 