import React, { forwardRef } from 'react';
import { Container, Typography, Box } from '@mui/material';
import router from '../assets/react-router.svg';

function Tech(props, refTech){

  return (
   
      <Container className='' ref={refTech} sx={{pt:15, pb:10}} >
        <Container className='skills--wrapper' sx={{p:1}} 
            data-aos="fade-up"
            data-aos-offset="50"
            data-aos-delay="25"
            data-aos-duration="750"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="false"
            data-aos-anchor-placement="top-center">

          <Typography className='title2 m-auto' sx={{pt:2, pb:3}} variant='h2' fontFamily={'Shadows Into Light Two'}>Technologies I am skilled in...</Typography>

          <Container className='skills--container' maxWidth="lg" sx={{display: 'flex', py:1, mb:2, justifyContent:'center'}}>   
                 

             <Box className='skill' sx={{m:2 }}><a  href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noreferrer"><img className='skill-icon' src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/javascript-colored.svg" width="60" height="60" alt="JavaScript" /></a></Box>

            <Box className='skill' sx={{m:2 }}><a  href="https://git-scm.com/" target="_blank" rel="noreferrer"><img className='skill-icon' src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/git-colored.svg" width="60" height="60" alt="Git" /></a></Box>

            <Box className='skill' sx={{m:2 }}><a  href="https://developer.mozilla.org/en-US/docs/Glossary/HTML5" target="_blank" rel="noreferrer"><img className='skill-icon' src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/html5-colored.svg" width="60" height="60" alt="HTML5" /></a></Box>

            <Box className='skill' sx={{m:2 }}><a  href="https://www.w3.org/TR/CSS/#css" target="_blank" rel="noreferrer"><img className='skill-icon' src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/css3-colored.svg" width="60" height="60" alt="CSS3" /></a></Box>

            <Box className='skill' sx={{m:2 }}><a  href="https://getbootstrap.com/" target="_blank" rel="noreferrer"><img className='skill-icon' src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/bootstrap-colored.svg" width="60" height="60" alt="Bootstrap" /></a></Box>

            <Box className='skill' sx={{m:2 }}><a  href="https://jquery.com/" target="_blank" rel="noreferrer"><img className='skill-icon' src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/jquery-colored.svg" width="60" height="60" alt="JQuery" /></a></Box>

            <Box className='skill' sx={{m:2 }}><a  href="https://reactjs.org/" target="_blank" rel="noreferrer"><img className='skill-icon' src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/react-colored.svg" width="60" height="60" alt="React" /></a></Box>

            <Box className='skill' sx={{m:2 }}><a  href="https://vitejs.dev/" target="_blank" rel="noreferrer"><img className='skill-icon' src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/vite-colored.svg" width="60" height="60" alt="Vite" /></a></Box>



            <Box className='skill' sx={{m:2 }}><a  href="https://https://create-react-app.dev/" target="_blank" rel="noreferrer"><img className='skill-icon' src="https://create-react-app.dev/img/logo.svg" width="60" height="60" alt="Create React App" /></a></Box>

            <Box className='skill' sx={{m:2 }}><a  href="https://react-bootstrap.github.io/" target="_blank" rel="noreferrer"><img className='skill-icon' src="https://react-bootstrap.github.io/img/logo.svg" width="60" height="60" alt="React-Bootstrap" /></a></Box>

            <Box className='skill' sx={{m:2 }}><a  href="https://mui.com/" target="_blank" rel="noreferrer"><img className='skill-icon' src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/materialui-colored.svg" width="60" height="60" alt="Material UI" /></a></Box>

            <Box className='skill' sx={{m:2 }}><a href="https://tailwindcss.com/" target="_blank" rel="noreferrer"><img className='skill-icon' src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/tailwindcss-colored.svg" width="60" height="60" alt="TailwindCSS" /></a></Box>


            {/* <Box className='skill' sx={{m:2 }}><a  href="https://webpack.js.org/" target="_blank" rel="noreferrer"><img className='skill-icon' src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/webpack-colored.svg" width="60" height="60" alt="Webpack" /></a></Box> */}

            {/* <Box className='skill' sx={{m:2 }}><a  href="https://nodejs.org/en/" target="_blank" rel="noreferrer"><img className='skill-icon' src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/nodejs-colored.svg" width="60" height="60" alt="NodeJS" /></a></Box> */}

            {/* <Box className='skill' sx={{m:2 }}><a  href="https://firebase.google.com/" target="_blank" rel="noreferrer"><img className='skill-icon' src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/firebase-colored.svg" width="60" height="60" alt="Firebase" /></a></Box> */}
            

            <Box className='skill' sx={{m:2 }}><a href="https://www.figma.com/" target="_blank" rel="noreferrer"><img className='skill-icon' src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/figma-colored.svg" width="60" height="60" alt="Figma" /></a></Box>

            <Box className='skill' sx={{m:2 }}><a  href="https://www.adobe.com/products/photoshop.html" target="_blank" rel="noreferrer"><img className='skill-icon' src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/photoshop-colored.svg" width="60" height="60" alt="Photoshop" /></a></Box>
 
            <Box className='skill' sx={{m:2 }}><a href="https://www.adobe.com/products/illustrator.html" target="_blank" rel="noreferrer"><img className='skill-icon' src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/illustrator-colored.svg" width="60" height="60" alt="Illustrator" /></a></Box>

            <Box className='skill' sx={{m:2 }}><a  href="https://www.mysql.com/" target="_blank" rel="noreferrer"><img className='skill-icon' src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/mysql-colored.svg" width="60" height="60" alt="MySQL" /></a></Box>

            <Box className='skill' sx={{m:2 }}><a  href="https://firebase.google.com/" target="_blank" rel="noreferrer"><img className='skill-icon' src="https://axios-http.com/assets/logo.svg" width="120" height="50" alt="Firebase" /></a></Box>

          </Container>

        </Container>
        
      </Container>
    
    );
}
export default forwardRef(Tech);
