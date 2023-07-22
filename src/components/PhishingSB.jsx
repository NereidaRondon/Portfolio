import React from 'react';
import Phish from '../assets/PhishingSB.pdf';

export default function PhishingSB(){
  return(
    <object width="100%" height="600px" data={Phish} type="application/pdf"></object>

  );
}