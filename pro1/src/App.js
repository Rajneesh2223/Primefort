import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Contact from './components/contacts';
import Home from './pages/home.jsx';
import Footer from './components/footer';

function App() {
  return (
    <BrowserRouter>
      <Contact/>
      <Home/>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
