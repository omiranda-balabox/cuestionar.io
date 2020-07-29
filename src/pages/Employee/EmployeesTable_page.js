import React, { Component } from 'react';
import Table from '../../components/table/Table';

import empleados from '../../assets/employee.json';

export default class EmployeesTable extends Component {
  render() {
    return (
      <Table data={empleados}/>
    );
  }
}
