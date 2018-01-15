// Main file for the frontend CRUD app

import React, {Component} from 'react';
import './App.css';
import {Provider} from 'react-redux'; // Make store available to container components
import {Router, browserHistory} from 'react-router'; // Will wrap all the routes we define in our routes file
import PropTypes from 'prop-types'; // Runtime type checking for React props and similar objects.
import {syncHistoryWithStore} from 'react-router-redux';
import configureStore from './store/configureStore'; // Configure the state tree
import routes from './routes/routes'; // Import routes for Router object from react-router

const store = configureStore();
const history = syncHistoryWithStore(browserHistory, store); // Sync browser history with redux store

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <div>
                    <Router history={history} routes={routes}/>
                </div>
            </Provider>
        );
    }
}

// Set object types for App.js
// Both store and history are required
App.propTypes = {
    store: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired
};

export default App;
