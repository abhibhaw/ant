import { combineReducers } from 'redux';
import AdminReducer from './admin/Reducer';

const RootReducer = combineReducers({
    aReducer: AdminReducer
});

export default RootReducer;