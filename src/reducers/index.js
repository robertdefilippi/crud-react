// Reducers specify how the application's state changes in response to actions set to the store.
// This combines the two reducers under the single state tree

import { routerReducer as routing } from 'react-router-redux';
import { combineReducers } from 'redux'; // To be exported
import appReducer from './appReducer';
import recipeReducer from './recipeReducer';

// Combine the reducers and export
// This is where the state of the apps are combined
export default combineReducers({
    appState: appReducer,
    recipeState: recipeReducer,
    routing
})