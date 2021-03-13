import {
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_ERROR,
    LOGOUT_SUCCESS
} from './ActionTypes';
import { DecodeUserToken } from '../../utils/DecodeUser';

const initialState = {
    user: DecodeUserToken(),
    loading: false,
    error: '',
    isLoggedIn: DecodeUserToken() != null
}

const AdminReducer = (state = initialState, action) => {
    switch(action.type) {
        case LOGIN_REQUEST: return {
            ...state,
            loading: false,
            isLoggedIn: false
        }
        case LOGIN_SUCCESS: return {
            ...state,
            user: action.payload,
            isLoggedIn: true
        }
        case LOGIN_ERROR: return {
            ...state,
            error: action.payload,
            isLoggedIn: false
        }
        case LOGOUT_SUCCESS: return {
            ...state,
            error: '',
            isLoggedIn: false,
            user: null
        }
        default: return state
    }
}

export default AdminReducer;