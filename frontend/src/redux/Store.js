import { createStore, applyMiddleware } from 'redux';
import RootReducer from './RootReducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import { logger } from 'redux-logger';
import thunk from 'redux-thunk';

const Store = createStore(
                RootReducer,
                composeWithDevTools(applyMiddleware(logger,thunk))
              );

export default Store;