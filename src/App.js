import React, {Component} from 'react';
import './App.css';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router'; // To manipulate routes
import PropTypes from 'prop-types'; // Runtime type checking for React props and similar objects.
import { syncHistoryWithStore } from 'react-router-redux';
import configureStore from './store/configureStore'; // Configure the store
import routes from './routes';

const store = configureStore();
const history = syncHistoryWithStore(browserHistory, store); // Sync brower history with redux store

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <div>
                    <Router history={history} routes={routes} />
                </div>
            </Provider>
        );
    }
}

App.propTypes = {
    store: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired
};

export default App;export default App;