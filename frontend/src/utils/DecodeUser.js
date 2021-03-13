import { decodeToken, isExpired } from 'react-jwt';
// DECODE JWT
export const DecodeUserToken = () => {
    let token = localStorage.getItem('token');
    if(isExpired(token))
        return null;
    return decodeToken(token);
}