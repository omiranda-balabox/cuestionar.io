import { sendHttpRequest }  from '../request';

import { SAVE_SESSION } from './userTypes';

// Funcion para validar las credenciales (Log in)
export const validateCredentials = (user) => (dispatch) => {

    // Se construlle el body de la request con los datos proporcionados y datos estatico de la llamada
    const requestData = {       
        action:"login",
        mail: user.mail,
        password: user.password,
        user_type:"coach"
    };

    // Debug
    // console.log(requestData);
    // Aquí se validan los datos de la 
    // validate(requestData);

    // Se hace la petición

    sendHttpRequest(
        'POST', 
        'http://balabox-demos.com/zoul/zadmin/app/mods/mods',
        requestData
        ).then((response) => {
            console.log(response);
            // Validacion del rol del usuario
            dispatch({
                type: SAVE_SESSION,
                payload: '/companyList'
            })
        }
    );
}