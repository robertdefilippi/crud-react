import React from 'react';
import {Route, IndexRoute} from 'react-router'; // Define to allow routing

// Import the routes you will be using
import App from '../containers/app';
import Recipes from '../containers/recipes';
import Recipe from '../containers/recipe';

// Basic inheritance ... components >> containers >> routes

// Render the containers (not the components)
// Tells the app what the parent, child, and siblings are
export default (
    <Route path="/" component={App}>
        <IndexRoute component={Recipes}/>
        <Route path="/:id" component={Recipe}/>
    </Route>
)