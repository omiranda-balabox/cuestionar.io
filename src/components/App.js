import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Index from './Index';
import Menu from './Menu';

const App = () => (
  <BrowserRouter>
    <Menu />
    <div>
    <Route exact path='/' component={Index} />
    </div>
  </BrowserRouter>
);

export default App;