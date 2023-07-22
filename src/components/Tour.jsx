import React from 'react';
import Card from './Card';

export default function Tour(){

  const tour = {
    title:'360 Interactive Map', 
    iframe:'https://nereidarondon.github.io/360InteractiveMap/', 
    role:'Research, Designer, Developer', 
    tech:'Articualte Storyline, Google Maps, GitHub',
    details:'This 360 degree Virtual Tour of the Mayan Pyramids identifies structures and includes information. The virtual tourist can also visit the specific locations via Google Maps.', 
    link:'https://nereidarondon.github.io/360InteractiveMap/',
    storyboard:'',
    story: false
  };

  return(
    <>      
      <Card project={tour} />
    </>
  );
}
