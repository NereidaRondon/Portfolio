import React from 'react';
import Card from './Card';

export default function Phishing(){

  const phish = {
    title:'Phishing Training', 
    iframe:'https://nereidarondon.github.io/Phishing/', 
    role:'Research, Designer, Developer', 
    tech:'Articualte Storyline, Google Slides, GitHub',
    details:'This eLearning course demonstrates how scammers attempt to Phish unknowing victims with everyday communications. The quiz includes examples of email communications where the learner has to identify the emails that are phishing scams and which are safe.', 
    link:'https://nereidarondon.github.io/Phishing/',
    storyboard:'/phishingSB',
    story: true
  };

  return(
    <>      
      <Card project={phish} />
    </>
  );
}
