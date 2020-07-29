import React, { Component } from 'react';

import logo from '../../assets/logo-react.png'

export default class List extends Component {

    showContent = () => {
        const { data } = this.props;
        const headers = Object.keys(data[0]);

        return data.map((employee) => (
            <tr>
                { headers.map((header) => (<th>{employee[header]}</th> ))}
            </tr>
        ))
    }

    render() {
        return (
            <div className="card">
                <div className="row">
                    <img className="img-thumbnail rounded" src={logo} width="90" alt=""/>
                    <div>
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                        <div className="card-footer bg-transparent text-right"> 3 pts</div>
                    </div>
                </div>
            </div>
        );
    }
}
