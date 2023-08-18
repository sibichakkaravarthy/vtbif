
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Startup from './Components/about/Startup.jsx';
import Team from './Components/Carousel/Team.jsx';
import App from './App.js';
import Header from './Components/Navbar/ColorSchemesExample.jsx';
import Event from './Components/Events/Event.js'

function Root() {
  return (
    <BrowserRouter>
    
      <Header />
      <Routes>
  
        <Route path="/" element={<App />} />
        <Route path="/startup" element={<Startup />} />
        <Route path="/team" element={<Team/>} />
        <Route path="/event" element={<Event/>} />
      </Routes>
      
    </BrowserRouter>
  );
}

ReactDOM.render(<Root />, document.getElementById('root'));
