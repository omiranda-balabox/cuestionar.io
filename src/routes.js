import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Index from './components/Index';
import Login from './pages/Login_page';
import CompanyEdit from './pages/Company/CompanyEdit_page';

const App = () => (
  <BrowserRouter>
    <div className="margen">
      <Route exact path='/' component={Login} />
      <Route exact path='/companyEdit' component={CompanyEdit} />
      <Route exact path='/index' component={Index} />
    </div>
  </BrowserRouter>
);

export default App;