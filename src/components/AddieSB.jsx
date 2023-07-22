import React from 'react';
import Addie from '../assets/AddieSB.pdf';

export default function AddieSB(){
  return(
    <object width="100%" height="600px" data={Addie} type="application/pdf"></object>

  );
}