import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';

import './App.css';
import Homepage from './pages/Homepage/homepage';

function App() {
  return (
    <div>
    <Router>
        <Homepage />
    </Router>
    </div>
  );
}

export default App;
