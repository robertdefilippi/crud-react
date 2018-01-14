// The components inside this director are aware of the app’s state
// as they are connected to the redux store.

import { connect } from 'react-redux';
import * as appActions from '../actions/appActions';
import App from '../components/app';

const mapStateToProps = (state) => {
    return {
        mappedAppState: state.appState
    }
};
// map actions to props
const mapDispatchToProps = (dispatch) => {
    return {
        mappedToggleAddRecipe: () => dispatch(appActions.toggleAddRecipe())
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(App);