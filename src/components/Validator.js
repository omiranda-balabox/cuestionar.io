/* export default class Validator {
    
    static validator = null;

    static getValidator() {
        if(Validator.validator == null) {
            Validator.validator = new Validator();
        }
        return this.validator;
    }
    
    static TextInput_validation(value) {
        if(value.lenght <= 100 && value.lenght > 0) 
            return true;
        
        return false;
    }

    MailInput_validation (value) {
        if(this.TextInput_validation(value) && /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value)) 
            return true;
        return false;
    }
} */

export const TextInput_Validation = (value) => {
    if(value.length <= 100 && value.length > 0) 
        return true;
    return false;
}

export const MailInput_Validation = (value) => {
    
    if(TextInput_Validation(value) && /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value)) 
        return true;
    return false;
}

export const PasswordInput_Validation = (value) => {
    if( /^([a-zA-Z0-9!@#\$%\^&\*])*$/.test(value)) {
        if(value.length > 5 && value.length <=100)
            return 0;
        return 1;
    }
    return 2;
}