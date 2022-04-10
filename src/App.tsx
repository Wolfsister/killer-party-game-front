import React from 'react';

import logo from './logo.svg';
import './App.css';
import { Routing } from './routing/Routing';
import { Link } from 'react-router-dom';

export const App = () => {
  return (
    <div className="app">
     <Routing />
    </div>
  );
}

