import React, { Component } from 'react';

export default class Table extends Component {

    showHeaders = () => {
        const { data } = this.props;
        const headers = Object.keys(data[0]);

        return headers.map((header) => (
            <th scope="col" >{header}</th>
        ));
    }

    showContent = () => {
        const { data } = this.props;
        const headers = Object.keys(data[0]);

        return data.map((item) => (
            <tr key={item.key}>
                { headers.map((header) => (<th>{item[header]}</th> ))}
            </tr>
        ))
    }

    render() {
        return (
            <table className="table table-bordered bg-light text-dark">
                <thead>
                    <tr>
                        {this.showHeaders()}
                    </tr>
                </thead>
            <tbody>
                {this.showContent()}
            </tbody>
        </table>  
        );
    }
}
