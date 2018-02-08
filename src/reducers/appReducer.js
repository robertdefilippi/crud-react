// Reducers update the state object in your store.
// Actions describe that something happened, but not "how" things happened / changed
// Reducers say "how"

// Set the initial state of the app
const INITIAL_STATE = {
    showAddRecipe: false
};

const appReducer = (currentState = INITIAL_STATE, action) => {

    // Determine current action
    switch (action.type) {

        case 'TOGGLE_ADD_RECIPE':
            return {
                ...currentState,
                showAddRecipe: !currentState.showAddRecipe
            };

        default:
            return currentState;
    }
};

export default appReducer;