import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as genesActions from '../actions/genesActions';
import Spinner from './general/Spinner';
import Fatal from './general/Fatal';

class Index extends Component {
    componentDidMount() {
        if(!Object.keys(this.props.genes).length){
            this.props.traerGenes();
        }
    }

    mostrarcontenido = () => {
        const { 
            genes, 
            cargando, 
            error, 
            cambioCheck
        } = this.props;

        if(cargando) {
            return <Spinner />;
        }

        if(error) {
            return <Fatal mensaje={error} />;
        }
        console.log(genes);
        return Object.keys(genes).map((gen_id) =>(
            <div key={genes[gen_id].idGen} >
                <input 
                    type="checkbox"
                    id={genes[gen_id].nombre}
                    onChange={ () => cambioCheck(genes[gen_id].idGenes) }
                    defaultChecked={genes[gen_id].cargado}
                />{genes[gen_id].nombre}
            </div>
        ))
    } 

    render() {
        return (
            <div className="jumbotron">
                <p className="index-title">Seleccion de genes para cargar</p>
                <div>
                    { this.mostrarcontenido() }
                    <button className="btn btn-danger m_left" >Limpiar base</button>
                    <button className="btn btn-primary m_left" >Cargar genes</button>
                </div>
            </div>
        );
    }
}

const mapStateToProps = ({genesReducer}) => genesReducer;

export default connect(mapStateToProps, genesActions)(Index);