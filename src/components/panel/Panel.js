import React, { Component } from 'react';

import logo from '../../assets/logo-react.png';

export default class Panel extends Component {

    showContent = () => {
        const { data } = this.props;

        return data.map((item) => (
            <div className="card d-flex justify-content-center align-content-center m-3 col-2" key={item.id}>
                <img className="card-img-top" src={ (item.img) ? item.img : logo } alt=""/>
                <div className="card-body d-flex justify-content-center align-content-center row">
                    <h5 className="card-title"> { item.nombreComercial } </h5>    
                    <a href="#" className="btn btn-primary stretched-link">Ver más</a>
                </div>
            </div>
        ));
    }
    render() { 
        return (
            <div className="m-5 d-flex justify-content-center align-content-center row" >
                {this.showContent()}
            </div>
        );
    }
}
