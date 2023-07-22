import React from 'react';
import Card from './Card';

export default function Sam(){

  const sam = {
    title:'Succesive Approximation Model (SAM)', 
    iframe:'https://nereidarondon.github.io/Sam-Model/', 
    role:'Research, Designer, Developer', 
    tech:'Adobe Captivate, Google Slides, GitHub',
    details:'The eLearning course presents information on the SAM Model. By the end of the course, learners will be able to identify all 3 stages of SAM and determine what phase is being applied based off of given scenarios. Includes 3 drag andd drop quiz questions.', 
    link:'https://nereidarondon.github.io/Sam-Model/',
    storyboard:'',
    story: false
  };

  return(
    <>      
      <Card project={sam} />
    </>
  );
}
