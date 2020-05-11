// import axios from 'axios';
import {
    CARGANDO,
    ERROR,
    ACTUALIZAR_GENES
} from '../types/genesTypes';

// Con peticion rest
/*
export const traerGenes = () => async (dispatch) => {
    dispatch({
        type: CARGANDO
    });
    try {
        const respuesta = await axios.get('localhost:8080/servicio/genes');

        const genes = {};
        respuesta.data.map((gen) =>(
            genes[gen.idGenes] = gen
        ));

        dispatch({
            type: ACTUALIZAR_GENES,
            payload: genes
        })

    } catch (error) {
        console.log('Error: ' + error.message);
        dispatch({
            type: ERROR,
            payload: 'Error al conectar con el servidor'
        });
    }
} */

//Sin peticion rest para prueba
export const traerGenes = () => (dispatch) => { 
    const respuesta = [ { 
        idGenes: 0,
        nombre: 'NF1',
        cargado: false
    }, { 
        idGenes: 1,
        nombre: 'BRCA1',
        cargado: false
    }, { 
        idGenes: 2,
        nombre: 'BRCA2',
        cargado: false
    }, { 
        idGenes: 3,
        nombre: 'COL1A1',
        cargado: false
    }, { 
        idGenes: 4,
        nombre: 'COL1A2',
        cargado: false
    }, { 
        idGenes: 5,
        nombre: 'FBN1',
        cargado: false
    }
];
    const genes = {};
    respuesta.map((gen) =>(
        genes[gen.idGenes] = gen
    ));

    //console.log("traer genes" + genes);
    dispatch({
        type: ACTUALIZAR_GENES,
        payload: genes
    })
}

export const cambioCheck = (idGen) => (dispatch, getState) =>{
    const { genes } = getState().genesReducer;
    const seleccionado = genes[idGen];
    // console.log("idGen: " + idGen);
    // console.log("genes: " + genes );
    // console.log("gen: " + genes[idGen] );
    // console.log("seleccionado: " + seleccionado );

    const newGenes = {...genes};
    newGenes[idGen] = {
        ...genes[idGen],
        cargado: !seleccionado.cargado
    }

    dispatch({
        type: ACTUALIZAR_GENES,
        payload: newGenes
    });
}

/*
export const cargarGenes = () => async (dispatch, getState) => {
    const { genes } = getState().genesReducer;

    dispatch({
        type: CARGANDO
    });
    try {
        const respuesta = await axios.post('localhost:8080/servicio/genes', genes);

        respuesta.data.map((gen) =>(
            genes[gen.idGenes] = gen
        ));

        dispatch({
            type: ACTUALIZAR_GENES,
            payload: genes
        })

    } catch (error) {
        console.log('Error: ' + error.message);
        dispatch({
            type: ERROR,
            payload: 'Error al conectar con el servidor'
        });
    }
}

export const limpiarGenes = () => async (dispatch, getState) => {
    const { genes } = getState().genesReducer;

    dispatch({
        type: CARGANDO
    });
    try {
        const respuesta = await axios.delete('localhost:8080/servicio/genes', genes);

        respuesta.data.map((gen) =>(
            genes[gen.idGenes] = gen
        ));

        dispatch({
            type: ACTUALIZAR_GENES,
            payload: genes
        })

    } catch (error) {
        console.log('Error: ' + error.message);
        dispatch({
            type: ERROR,
            payload: 'Error al conectar con el servidor'
        });
    }
}*/