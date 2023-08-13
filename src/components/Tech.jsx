import React, { forwardRef } from 'react';
import { Container, Typography, Box } from '@mui/material';


function Tech(props, refTech){

  const skillIconDetails = [
    {
      link:'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
      image:'https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/javascript-colored.svg',
      alt:'JavaScript'
    },
    {
      link:'https://git-scm.com/',
      image:'https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/git-colored.svg',
      alt:'Git'
    },
    // {
    //   link:,
    //   image:,
    //   alt:
    // },
    // {
    //   link:,
    //   image:,
    //   alt:
    // },
    // {
    //   link:,
    //   image:,
    //   alt:
    // },
    // {
    //   link:,
    //   image:,
    //   alt:
    // }
  ];

  function SkillIcon(){

    return(

      skillIconDetails.map((item, index)=>{
        
        <Box key={index} className='skill' sx={{m:2 }}>
          <a  href={item.link} target="_blank" rel="noreferrer">
            <img src={item.image} width="70" height="70" alt={item.alt} /></a>
        </Box>
        
      })
    );
  }

  return (
   
      <Container className='' ref={refTech} maxWidth="lg" sx={{pt:15, pb:10, bgcolor:'#eeeeee'}} >
        <Container className='skills--wrapper' maxWidth="lg" sx={{p:1}} 
            data-aos="fade-up"
            data-aos-offset="50"
            data-aos-delay="25"
            data-aos-duration="750"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="false"
            data-aos-anchor-placement="top-center">

          <Typography className='title title-dark-bg' sx={{pt:2, pb:3}} variant='h3' fontFamily={'Shadows Into Light Two'}>Technologies I am skilled in...</Typography>

          <Container className='skills--container' maxWidth="lg" sx={{display: 'flex', p:3}}>   
                 
              <SkillIcon />

             <Box className='skill' sx={{m:2 }}><a  href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/javascript-colored.svg" width="70" height="70" alt="JavaScript" /></a></Box>

            <Box className='skill' sx={{m:2 }}><a  href="https://git-scm.com/" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/git-colored.svg" width="70" height="70" alt="Git" /></a></Box>

            <Box className='skill' sx={{m:2 }}><a  href="https://developer.mozilla.org/en-US/docs/Glossary/HTML5" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/html5-colored.svg" width="70" height="70" alt="HTML5" /></a></Box>

            <Box className='skill' sx={{m:2 }}><a  href="https://www.w3.org/TR/CSS/#css" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/css3-colored.svg" width="70" height="70" alt="CSS3" /></a></Box>

            <Box className='skill' sx={{m:2 }}><a  href="https://getbootstrap.com/" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/bootstrap-colored.svg" width="70" height="70" alt="Bootstrap" /></a></Box>

            <Box className='skill' sx={{m:2 }}><a  href="https://reactjs.org/" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/react-colored.svg" width="70" height="70" alt="React" /></a></Box>

            <Box className='skill' sx={{m:2 }}><a  href="https://vitejs.dev/" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/vite-colored.svg" width="70" height="70" alt="Vite" /></a></Box>

            <Box className='skill' sx={{m:2 }}><a  href="https://jquery.com/" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/jquery-colored.svg" width="70" height="70" alt="JQuery" /></a></Box>

            <Box className='skill' sx={{m:2 }}><a  href="https://mui.com/" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/materialui-colored.svg" width="70" height="70" alt="Material UI" /></a></Box>

            {/* <Box className='skill' sx={{m:2 }}><a  href="https://webpack.js.org/" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/webpack-colored.svg" width="70" height="70" alt="Webpack" /></a></Box> */}

            {/* <Box className='skill' sx={{m:2 }}><a  href="https://nodejs.org/en/" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/nodejs-colored.svg" width="70" height="70" alt="NodeJS" /></a></Box> */}

             <Box className='skill' sx={{m:2 }}><a  href="https://www.mysql.com/" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/mysql-colored.svg" width="70" height="70" alt="MySQL" /></a></Box>

            <Box className='skill' sx={{m:2 }}><a  href="https://firebase.google.com/" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/firebase-colored.svg" width="70" height="70" alt="Firebase" /></a></Box>
            
            <Box className='skill' sx={{m:2 }}><a href="https://www.figma.com/" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/figma-colored.svg" width="70" height="70" alt="Figma" /></a></Box>

            <Box className='skill' sx={{m:2 }}><a  href="https://www.adobe.com/uk/products/photoshop.html" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/photoshop-colored.svg" width="70" height="70" alt="Photoshop" /></a></Box>
 
            <Box className='skill' sx={{m:2 }}><a  href="adobe.com/uk/products/illustrator.html" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/illustrator-colored.svg" width="70" height="70" alt="Illustrator" /></a></Box>

          </Container>

        </Container>
        
      </Container>
    

  );
}
export default forwardRef(Tech);
