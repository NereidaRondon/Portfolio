import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './Home';
import Error from './Error';
import Projects from './Projects';
import Media from './Media';
import Contact from './Contact';

export default function AppRouter() {

  return (
    <Routes>

      <Route exact path="/" element={<Home />} />

      <Route path="/projects" element={<Projects />} />

      <Route path="/media" element={<Media />} />

      <Route path="/contact" element={<Contact />} />

      <Route path="*" element={<Error />} />

    </Routes>
  );
}