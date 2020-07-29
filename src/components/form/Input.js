import React, { useState} from "react";
import { MailInput_Validation, PasswordInput_Validation } from '../Validator';


export function MailInput(props) {
    const [validationMessage, setValidationMessage] = useState('');
    return (
        <div className="form-group">
            <input 
                type="email" 
                className="form-control" 
                name = {"mail"}
                required
                placeholder={"correo"}
                value={props.value} 
                onChange={ (event) => {
                    const valid = MailInput_Validation(event.target.value)
                    if (valid === true) {
                        setValidationMessage('')
                        props.onChange( event.target.value, true)
                    }
                    else {
                        setValidationMessage('Dirección de correo invalida')
                        props.onChange( event.target.value, false)
                    }
                        
                }} />
            <div className="d-flex justify-content-end">
                <small className="form-text text-danger font-italic">{validationMessage}</small>
            </div>
        </div>
    );
}


export function PasswordInput(props) {
    const [validationMessage, setValidationMessage] = useState('');
    return (
        <div className="form-group">
            <input 
                type="password" 
                className="form-control" 
                name = {"password"}
                required
                placeholder={"contraseña"}
                value={props.value} 
                onChange={ (event) => {
                    const valid = PasswordInput_Validation(event.target.value)
                    if (valid === 0) {
                        setValidationMessage('')
                        props.onChange( event.target.value, true)
                    }
                    else if(valid === 1) {
                        setValidationMessage('Tu contraseña debe tener almenos 6 caracteres')
                        props.onChange( event.target.value, false)
                    }
                    else {
                        setValidationMessage('Tu contraseña puede tener letras numeros o algunos de los siguientes caracteres: !@#\$%\^&\* ')
                        props.onChange( event.target.value, false)
                    }
                        
                }} />
            <div className="d-flex justify-content-end">
                <small className="form-text text-danger font-italic">{validationMessage}</small>
            </div>
        </div>
    );
}