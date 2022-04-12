import React from 'react';

import './App.css';
import { Routing } from './routing/Routing';
import {BrowserRouter} from 'react-router-dom';
import {Header} from "./components/Header/Header";

export const App = () => {
  return (
    <div className="app">
        <BrowserRouter>
            <Header />
            <Routing />
        </BrowserRouter>
    </div>
  );
}

