
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Startup from './Components/about/Startup.jsx';
import App from './App.js';
import ColorSchemesExample from './Components/Navbar/ColorSchemesExample.jsx';

function Root() {
  return (
    <BrowserRouter>
    
    <ColorSchemesExample/>
      <Routes>
  
        <Route path="/" element={<App />} />
        <Route path="/startup" element={<Startup />} />
      </Routes>
      
    </BrowserRouter>
  );
}

ReactDOM.render(<Root />, document.getElementById('root'));
