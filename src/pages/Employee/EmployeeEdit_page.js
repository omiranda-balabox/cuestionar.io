import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as companyActions from '../../dataManager/company/companyActions';


class EmployeeEdit extends Component {
    constructor(props){
        super(props);
        this.state = {
          identificador: '',
          nombre: '',
          unidadDeNegocio: '',
          domicilio: '',
          departamento: '',
          subdepartamento: '',
          nivelDePuesto: '',
          tipoDeEmpleado: '',
          fechaDeNacimiento: '',
          fechaDeIngreso: '',
          sexo: '',
          escolaridad: '',
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
                                    <label htmlFor="identificador">Identificador</label>
                                    <input type="text" className="form-control" name ="identificador" required
                                    placeholder="Identificador" value={this.identificador} onChange={event => this.setState({identificador : event.target.value})} />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="nombre">Nombre</label>
                                    <input type="text" className="form-control" name ="nombre" required
                                    placeholder="Nombre" value={this.nombre} onChange={event => this.setState({nombre: event.target.value})} />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="unidadDeNegocio">Unidad de negocio</label>
                                    <input type="text" className="form-control" name ="rfc" required
                                    placeholder="Unidad de negocio" value={this.unidadDeNegocio} onChange={event => this.setState({unidadDeNegocio: event.target.value})} />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="departamento">Departamento</label>
                                    <input type="text" className="form-control" name ="departamento" required
                                    placeholder="Departamento" value={this.departamento} onChange={event => this.setState({departamento: event.target.value})} />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="subdepartamento">Subdepartamento</label>
                                    <input type="text" className="form-control" name ="subdepartamento" required
                                    placeholder="Subdepartamento" value={this.subdepartamento} onChange={event => this.setState({subdepartamento: event.target.value})} />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="nivelDePuesto">Nivel de puesto</label>
                                    <input type="text" className="form-control" name ="nivelDePuesto" required
                                    placeholder="Nivel de puesto" value={this.nivelDePuesto} onChange={event => this.setState({nivelDePuesto: event.target.value})} />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="tipoDeEmpleado">Tipo de empleado</label>   
                                    <input type="text" className="form-control" name ="tipoDeEmpleado" required
                                    placeholder="Tipo de empleado" value={this.tipoDeEmpleado} onChange={event => this.setState({tipoDeEmpleado: event.target.value})} />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="tipoContrato">Tipo contrato</label>
                                    <input type="text" className="form-control" name ="tipoContrato" required
                                    placeholder="Tipo contrato" value={this.tipoContrato} onChange={event => this.setState({tipoContrato: event.target.value})} />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="fechaDeNacimiento">Datos de contacto</label>
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

export default connect(null, companyActions)(EmployeeEdit);