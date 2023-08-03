import hamster from '../assets/hamster.webp';
import { Container } from '@mui/material';

export default function Error(){


  return(
    <>
      <Container className='' sx={{bgcolor:'#bdbdbd', pt:10,}} maxWidth="xxl">

        <img src={hamster} width='400'/>
        
      </Container>
      <Container className='' sx={{bgcolor:'#bdbdbd', pb:10}} maxWidth="xxl">
        <a href="http://www.freepik.com">Designed by stories / Freepik</a>
      </Container>

    </>
  );
  
} 