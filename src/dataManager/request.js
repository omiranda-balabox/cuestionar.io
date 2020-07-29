// Aqui se valida el status
import { mock } from './mock';

const baseUrl = 'http://localhost:8080/rest/service/'

// Real request
/* const sendHttpRequest = (method, url, data) => {
    return fetch( baseUrl + url,{
        method: method,
        body: JSON.stringify(data),
        headers: data ? { 'Content-Type': 'application/json' } : {}
    }).then(response => {
        if(response.status >= 400) {
            return response.json().then(errResData =>{
                const error = new Error('Something went worng!');
                error.data = errResData;
                throw error;
            });
        }
        return response.json();
    });
}; */

// Debug request
export const sendHttpRequest = async (method, url, data) => {
    return await mock(true, 1000);
};
