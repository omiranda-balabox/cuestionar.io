import React, { Component } from 'react';
import List from '../../components/list/List';

import empleados from '../../assets/employee.json';

export default class NoticesManagement extends Component {
  render() {
    return (
      <List data={empleados}/>
    );
  }
}
