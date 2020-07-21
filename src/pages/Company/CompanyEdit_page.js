import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as companyActions from '../../dataManager/company/companyActions';

class CompanyEdit extends Component {
    constructor(props){
        super(props);
        this.state = {
          razonSocial: '',
          nombreComercial: '',
          rfc: '',
          domicilio: '',
          estado: '',
          pais: '',
          giro: '',
          actividadesPrincipales: '',
          datoDeContacto: '',
          correoDeContacto: '',
          usuarios: '',
        }
    }

    save = () => {
        console.log("Iniciando sesion");
        this.props.saveCompany(this.state);
    }

    render() {
        return (
            <div className="container d-flex justify-content-center">
                <div className="card w-50">
                    <h3 className="card-header d-flex justify-content-center">Panel de edición de empresa</h3>
                    <div className='card-body'>
                        <div className='column'>
                            <form>
                                <div className="form-group">
                                    <label htmlFor="razonSocial">Razon Social</label>
                                    <input type="text" className="form-control" name ="razonSocial" required
                                    placeholder="Razon Social" value={this.razonSocial} onChange={event => this.setState({razonSocial : event.target.value})} />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="nombreComercial">Nombre Comercial</label>
                                    <input type="text" className="form-control" name ="nombreComercial" required
                                    placeholder="Nombre Comercial" value={this.nombreComercial} onChange={event => this.setState({nombreComercial: event.target.value})} />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="rfc">RFC</label>
                                    <input type="text" className="form-control" name ="rfc" required
                                    placeholder="RFC" value={this.rfc} onChange={event => this.setState({rfc: event.target.value})} />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="domicilio">Domicilio</label>
                                    <input type="text" className="form-control" name ="domicilio" required
                                    placeholder="Domicilio" value={this.domicilio} onChange={event => this.setState({domicilio: event.target.value})} />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="estado">Estado</label>
                                    <input type="text" className="form-control" name ="estado" required
                                    placeholder="Estado" value={this.estado} onChange={event => this.setState({estado: event.target.value})} />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="pais">País</label>
                                    <input type="text" className="form-control" name ="pais" required
                                    placeholder="País" value={this.pais} onChange={event => this.setState({pais: event.target.value})} />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="giro">Giro</label>   
                                    <input type="text" className="form-control" name ="giro" required
                                    placeholder="Giro" value={this.giro} onChange={event => this.setState({giro: event.target.value})} />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="actividadesPrincipales">Actividades Principales</label>
                                    <input type="text" className="form-control" name ="actividadesPrincipales" required
                                    placeholder="Actividades Principales" value={this.actividadesPrincipales} onChange={event => this.setState({actividadesPrincipales: event.target.value})} />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="datosDeContacto">Datos de contacto</label>
                                    <input type="text" className="form-control" name ="datosDeContacto" required
                                    placeholder="Datos de contacto" value={this.datoDeContacto} onChange={event => this.setState({datoDeContacto: event.target.value})} />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="correoDeContacto">Correo de contacto</label>
                                    <input type="text" className="form-control" name ="correoDeContacto" required
                                    placeholder="Correo de Contacto" value={this.correoDeContacto} onChange={event => this.setState({correoDeContacto: event.target.value})} />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="usuarios">Usuarios</label>
                                    <input type="text" className="form-control" name ="usuarios" required
                                    placeholder="Cantidad de usuarios" value={this.usuarios} onChange={event => this.setState({usuarios: event.target.value})} />
                                </div>
                            </form>
                            <button className="btn btn-primary" onClick={this.save} >Guardar</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default connect(null, companyActions)(CompanyEdit);