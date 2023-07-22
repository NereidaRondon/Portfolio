import React from 'react';
import Card from './Card';

export default function Addie(){

  const addie = {
    title:'ADDIE', 
    iframe:'https://nereidarondon.github.io/ADDIE/', 
    role:'Research, Designer, Developer', 
    tech:'Articualte Storyline, Google Slides, GitHub',
    details:'The eLearning course presents information on the 5 phases of ADDIE. By the end of the course, learners will be able to identify all 5 phases and determine what phase is being applied based off of any given scenario. Includes 10 quiz questions, 8 of which are chosen randomly from a Question Bank.', 
    link:'https://nereidarondon.github.io/ADDIE/',
    storyboard:'/addieSB',
    story: true
  };

  return(
    <>      
      <Card project={addie} />
    </>
  );
}
