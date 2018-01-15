// Combine reducers and unite them under the single state tree

import { routerReducer as routing } from 'react-router-redux';
import { combineReducers } from 'redux';
import appReducer from './appReducer';
import recipeReducer from './recipeReducer';

// Combine the reducers and export
export default combineReducers({
    appState: appReducer,
    recipeState: recipeReducer,
    routing
    // Add more reducers here, if necessary
})