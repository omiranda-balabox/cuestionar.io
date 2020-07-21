import { sendHttpRequest }  from '../request';


// Funcion para validar las credenciales (Log in)
export const saveCompany = (company) => (dispatch) => {

    // Se construlle el body de la request con los datos proporcionados y datos estatico de la llamada
    const requestData = {       
        razonSocial: company.razonSocial,
        nombreComercial: company.nombreComercial,
        rfc: company.rfc,
        domicilio: company.domicilio,
        estado: company.estado,
        pais: company.pais,
        giro: company.giro,
        actividadesPrincipales: company.actividadesPrincipales,
        datoDeContacto: company.datoDeContacto,
        correoDeContacto: company.correoDeContacto,
        usuarios: company.usuarios,
    };

    // Debug
    console.log(requestData);
    // Aquí se validan los datos de la 
    // validate(requestData);

    // Se hace la petición 
    /* sendHttpRequest(
        'POST', 
        'http://balabox-demos.com/zoul/zadmin/app/mods/mods',
        requestData
        ).then((response) => {
            console.log(response);
        });
    */
}