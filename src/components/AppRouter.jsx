import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './Home';
import Error from './Error';
import Projects from './Projects';
//import Videos from './Videos';
import Contact from './Contact';
import Resume from './Resume';
import PTCertificate from './PTCertificate';
import ICPCert from './ICPCert';
import Web102Cert from './Web102Cert';
import AI4allCert from './AI4allCert';

export default function AppRouter() {

  return (
    <Routes>

      <Route exact path="/" element={<Home />} />

      <Route path="/projects" element={<Projects />} />

      {/* <Route path="/videos" element={<Videos />} /> */}

      <Route path="/contact" element={<Contact />} />

      <Route path="/resume" element={<Resume />} />

      <Route path="/promineocertificate" element={<PTCertificate />} />

      <Route path="/icpcertificate" element={<ICPCert />} />

      <Route path="/web102certificate" element={<Web102Cert />} />

      <Route path="/ai4allcertificate" element={<AI4allCert />} />

       </Routes>
  );
}