import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './containers/App';
import Todos from './containers/Todos';
import Todo from './containers/Todo';

// For the App.js component.
// React renders Todos at “/”
// React renders one route “/:id” by the id parameter
// TODO add correct objects for App and Todos and Todo
export default (
    <Route path="/" component={App}>
        <IndexRoute component={Todos} />
        <Route path="/:id" component={Todo} />
    </Route>
)