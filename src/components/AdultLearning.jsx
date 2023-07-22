import React from 'react';
import Card from './Card';

export default function AdultLearning(){

  const adult = {
    title:'Adult Learning Theory', 
    iframe:'https://nereidarondon.github.io/Adult-Learning-Theory/', 
    role:'Research, Designer, Developer', 
    tech:'Articualte Storyline, GitHub',
    details:'This eLearning course presents information on Adult Learning Principles and the differences between andragogy and pedagogy. By the end of the course, learners will be able to define andragogy, describe characteristics of adult learners, and apply principles of adult learning.', 
    link:'https://nereidarondon.github.io/Adult-Learning-Theory/',
    storyboard:'',
    story: false
  };

  return(
    <>      
      <Card project={adult} />
    </>
  );
}
