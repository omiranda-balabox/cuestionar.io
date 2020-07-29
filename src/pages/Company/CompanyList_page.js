import React, { Component } from 'react';

import Panel from '../../components/panel/Panel';
import Spinner from '../../components/general/Spinner';

import empresas from '../../assets/companies.json';

export default class CompanyList extends Component {
    constructor(props){
        super(props);
        this.state = {
            loading: true,
            error: '',
        }
    }

    render() {
        return (
            <div className="column">
                <div className="d-flex justify-content-center py-4 sticky-top">
                    <button className="btn btn-warning" > + Añadir Empresa</button>
                </div>
                <Panel data={empresas}/>
            </div>
        );
    }
}
