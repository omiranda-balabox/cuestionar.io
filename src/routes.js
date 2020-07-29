import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Login from './pages/Login_page';
import NavBar from './components/navigation/NavBar';
import CompanyEdit from './pages/Company/CompanyEdit_page';
import CompanyList from './pages/Company/CompanyList_page';
import EmployeeEdit from './pages/Employee/EmployeeEdit_page';
import EmployeesTable from './pages/Employee/EmployeesTable_page';
import NoticesManagement from './pages/Notice/NoticesManagement_page';

const App = () => (
  <BrowserRouter>
    <div className="d-flex justify-content-center align-items-center">
      <Route exact path='/' component={Login} />
      <Route exact path='/companyEdit' component={CompanyEdit} />
      <Route exact path='/companyList' component={CompanyList} />
      <Route exact path='/employeeEdit' component={EmployeeEdit} />
      <Route exact path='/employeesTable' component={EmployeesTable} />
      <Route exact path='/noticesManagement' component={NoticesManagement} />
    </div>
  </BrowserRouter>
);

export default App;