// The containers inside this director are aware of the app’s state
// as they are connected to the redux store.

// A store holds the whole state tree of your application
// The only way to change the state inside it is to dispatch an action on it.

import { connect } from 'react-redux';
import * as appActions from '../actions/appActions';
import App from '../components/app'; // Imports cousin app.js component

const mapStateToProps = (state) => {
    return {
        mappedAppState: state.appState
    }
};

// Dispatches an action; the only way to trigger a state change
const mapDispatchToProps = (dispatch) => {
    return {
        mappedToggleAddRecipe: () => dispatch(appActions.toggleAddRecipe())
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(App);