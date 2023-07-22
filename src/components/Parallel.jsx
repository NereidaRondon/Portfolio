import React from 'react';
import Card from './Card';

export default function Parallel(){

  const parallel = {
    title:'Interactive Math Activity', 
    iframe:'https://nereidarondon.github.io/Parallel-Lines/', 
    role:'Research, Designer, Developer', 
    tech:'Articualte Storyline, Google Slides, GitHub',
    details:'In this eLearning activity, learners identify angle pairs using streets and buildings.', 
    link:'https://nereidarondon.github.io/Parallel-Lines/',
    storyboard:'',
    story: false
  };

  return(
    <>      
      <Card project={parallel} />
    </>
  );
}