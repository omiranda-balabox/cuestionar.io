import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as userActions from '../dataManager/user/userActions';

// import Spinner from './general/Spinner';
// import Fatal from './general/Fatal';

class Index extends Component {
    constructor(props){
        super(props);
        this.state = {
          mail: '',
          password: ''
        }
    }

    login = () => {
        console.log("Iniciando sesion");
        this.props.validateCredentials(this.state);
    }

    render() {
        return (
            <div className="container d-flex justify-content-center">
                <div className="card w-50">
                    <h3 className="card-header d-flex justify-content-center">Iniciar Sesión</h3>
                    <div className='card-body d-flex justify-content-center'>
                        <div className='column'>
                            <form>
                                <div className="form-group">
                                    <input type="text" className="form-control" name ="mail" required
                                    placeholder="correo" value={this.mail} onChange={event => this.setState({mail: event.target.value})} />
                                </div>
                                <div className="form-group">
                                    <input type="text" className="form-control" name ="password" required
                                    placeholder="contraseña" value={this.password} onChange={event => this.setState({password: event.target.value})} />
                                </div>
                            </form>
                            <button className="btn btn-primary" onClick={this.login} >Iniciar Sesión</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

// const mapStateToProps = ({genesReducer}) => genesReducer;

// export default connect(mapStateToProps, genesActions)(Index);

export default connect(null, userActions)(Index);