import logo from '../assets/myLogo.svg';
import { Link } from "react-router-dom";
import { LinkContainer } from 'react-router-bootstrap';
import Navbar from 'react-bootstrap/Navbar';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import GitHubIcon from '@mui/icons-material/GitHub';
import medium from '../assets/medium.svg';
import { pink } from '@mui/material/colors';
import { Box } from "@mui/material";
export default function Socials(){

  return(
    <>

      <Box className='icon-div' sx={{ py: 2}}>
      
        <Box className='logo-div' sx={{ py: 2}}>

          <LinkContainer to="/"> 
            <Navbar.Brand href='#home' className='logo m-0 p-0 justify-content-start'>
              <img src={logo} className='logo m-0 p-0 bounce' alt='Click to go back to home' />
            </Navbar.Brand>
          </LinkContainer>
        </Box>

        <Box className='' sx={{ py: 10}}>

        </Box>

        <Link to='mailto: nereida.rondon5@gmail.com' target='_blank' className='icon' aria-label='Send me an email.'>
            <AlternateEmailIcon sx={{ fontSize: 40}} color="secondary" />
        </Link>
    
        <Link to='https://www.linkedin.com/in/nereidarondon/' target='_blank' className='icon' aria-label='View my 
        LinkedIn profile.'>
            <LinkedInIcon sx={{ fontSize: 40}} color="info" />
        </Link>
        
        <Link to='https://github.com/NereidaRondon' target='_blank' className='icon' aria-label='See my GitHub account.'>
            <GitHubIcon sx={{ fontSize: 40, color: pink[200] }}   
            data-aos="flip-down" />
        </Link>

        <Link to='https://medium.com/@nereidarondon' target='_blank' aria-label='Visit my Medium blog.'>
            <img className='medium pt-1' src={medium} width='40' alt='Visit my Medium blog.'/>
        </Link>

      </Box>
    </>
  );
}