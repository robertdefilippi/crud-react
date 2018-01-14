// Combine the reducers here

import { routerReducer as routing } from 'react-router-redux';
import { combineReducers } from 'redux';
import appReducer from './appReducer';
import recipeReducer from './recipeReducer';

export default combineReducers({
    appState:appReducer,
    recipeState:recipeReducer,
    routing
    // More reducers if there are
    // can go here
})