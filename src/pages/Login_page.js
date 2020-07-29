import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import {MailInput, PasswordInput } from '../components/form/Input'

import * as userActions from '../dataManager/user/userActions';

class Login extends Component {
    constructor(props){
        super(props);
        this.state = {
          mail: '',
          password: '',
          error: '',
          mailValid: false,
          passwordValid: false,
          buttonValid: true,
        }
    }

    login = () => {
        // console.log("Iniciando sesion");
        this.setState({buttonValid: false});
        const {mail, password} = this.state;
        this.props.validateCredentials({mail, password});
    }

    showButton = () => {
        if(this.state.buttonValid) {
            if(this.state.mailValid && this.state.passwordValid)
                return ( <button className="btn btn-primary" onClick={this.login}>Iniciar Sesión</button> )
            return ( <button className="btn btn-primary" onClick={this.login} disabled>Iniciar Sesión</button> )
        }
        return (
            <div className="spinner-border text-primary" role="status">
                <span className="sr-only">Loading...</span>
            </div>
         )
    }

    render() {
        // this.redirect();
        return (
            <div className="container d-flex justify-content-center">
                {
                    (this.props.homeRoute) ? <Redirect to={this.props.homeRoute}/> : ''
                }
                <div className="column w-50">
                    <h3 className="d-flex justify-content-center py-5">SIBO</h3>
                    <div className='d-flex justify-content-center'>
                            <div className='column w-75'>
                                { (this.state.error.length === 0) ? '' : 
                                <div className="d-flex justify-content-center badge badge-danger text-wrap mb-3 ">
                                    {this.state.error}
                                </div>}
                                <form>
                                    <MailInput
                                        value={this.mail}
                                        onChange={ (value, valid) => this.setState({mail: value, mailValid: valid}) }
                                    />
                                    <PasswordInput 
                                        value={this.password}
                                        onChange={ (value, valid) => this.setState({password: value, passwordValid: valid})}
                                    />
                                </form>
                                <div className='d-flex justify-content-center'>
                                    {this.showButton()}
                                </div>
                            </div>
                        </div>
                    </div>
            </div>
        );
    }
}

const mapStateToProps = ({ userReducer }) => userReducer;

export default connect(mapStateToProps, userActions)(Login);