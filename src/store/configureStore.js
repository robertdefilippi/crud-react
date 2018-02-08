// Holds the whole state tree of the application,
// for app and the individual recipes

import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk'; // Middleware to return functions not actions; async for functions
import logger from 'redux-logger'

import rootReducer from '../reducers';

// Define configureStore for export into app.js
export default function configureStore(initialState) {
    return createStore(
        rootReducer,
        initialState,
        applyMiddleware(thunk, logger)
    );

}