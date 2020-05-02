import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Index from './Index';

const App = () => (
  <BrowserRouter>
    <Route exact path='/' component={Index} />
  </BrowserRouter>
);

export default App;