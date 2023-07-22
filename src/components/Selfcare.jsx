import React from 'react';
import Card from './Card';

export default function Selfcare(){

  const selfcare = {
    title:'Self Care Training', 
    iframe:'https://nereidarondon.github.io/Self-Care/', 
    role:'Research, Designer, Developer', 
    tech:'Articualte Storyline, GitHub',
    details:'This eLearning course presents information on Adult Learning Principles and the differences between andragogy and pedagogy. By the end of the course, learners will be able to define andragogy, describe characteristics of adult learners, and apply principles of adult learning.', 
    link:'https://nereidarondon.github.io/Self-Care/',
    storyboard:'',
    story: true
  };

  return(
    <>      
      <Card project={selfcare} />
    </>
  );
}
