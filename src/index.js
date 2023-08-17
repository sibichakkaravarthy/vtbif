
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Startup from './Components/about/Startup.jsx';
import Team from './Components/Carousel/Team.jsx';
import App from './App.js';
import Header from './Components/Navbar/ColorSchemesExample.jsx';

function Root() {
  return (
    <BrowserRouter>
    
      <Header />
      <Routes>
  
        <Route path="/" element={<App />} />
        <Route path="/startup" element={<Startup />} />
        <Route path="/team" element={<Team/>} />
      </Routes>
      
    </BrowserRouter>
  );
}

ReactDOM.render(<Root />, document.getElementById('root'));
