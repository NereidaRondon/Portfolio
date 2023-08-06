import hamster from '../assets/hamster.webp';
import { Container } from '@mui/material';

export default function Error(){


  return(
    <>
      <Container sx={{bgcolor:'#bdbdbd', pt:5,}} maxWidth="md">

        <img className='error' src={hamster} width='500'/>
        
      </Container>
      <Container sx={{bgcolor:'#bdbdbd', pb:5}} maxWidth="md">
        <a href="http://www.freepik.com">Designed by stories / Freepik</a>
      </Container>

    </>
  );
  
} 