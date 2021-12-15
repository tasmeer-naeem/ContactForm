import {createStore,applyMiddleware} from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import logger from 'redux-logger'
import reduxThunk from 'redux-thunk'
import RootReducer from './RootReducer'

const middlewares=[reduxThunk]

if(process.env.NODE_ENV === 'development'){
    middlewares.push(logger);
}

const store=createStore(RootReducer,composeWithDevTools(applyMiddleware(...middlewares)));

export default store;