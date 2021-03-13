import {
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_ERROR,
    LOGOUT_SUCCESS
} from './ActionTypes';
import axios from 'axios';
import { SERVER_URL } from '../../Config';

export const loginRequest = () => {
    return {
        type: LOGIN_REQUEST
    }
}

export const loginSuccess = user => {
    return {
        type: LOGIN_SUCCESS,
        payload: user
    }
}

export const loginError = error => {
    return {
        type: LOGIN_ERROR,
        payload: error
    }
}

export const logout = () => {
    localStorage.removeItem('token');
    return {
        type: LOGOUT_SUCCESS
    }
}

export const login = (email,password,history) => {
    return async dispatch => {
        try {
            dispatch(loginRequest());

            let data = await axios.post(`${SERVER_URL}/auth/login`,{Email: email,Password: password});  
           
            if(data.data.error == false){
                dispatch(loginSuccess({ token: data.data.token }));
                localStorage.setItem('token',data.data.token);
                history.push('/dashboard');
            } else {
                console.log(data);
                dispatch(loginError(data.data.message));

                setTimeout(() => {
                    dispatch(loginError(''));
                },5000)
            }
        } catch(e) {

            dispatch(loginError(e));
            console.log(e);
        }
    }
}